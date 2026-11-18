// stack-page.js: questions render on page load, and are graded against the variant shown.
// Render-on-load: ported 2026-11-14 from the same Ghana file (Ben: "same protocol as Ghana").
// Seed fix:
// Ported 2026-11-13 from GhanaTextbooks/pretext/book/source/external/ghana-feedback.js
// (seed fix only; see GhanaTextbooks/KIT-NOTES.md finding 111). Upstream PreTeXt
// stackapicalls.js draws a fresh deployed seed on every collectData() call and stacks Submit
// listeners on each re-render, so after "Show new example question" an answer can be graded
// against a different variant. This pins one seed per question; the new-example button
// clears the pin. Loaded via html.js.extra in project.ptx.
(function () {
  "use strict";
  var seeds = {}; // question prefix -> seed of the variant now on screen

  function pinned(qprefix) {
    return Object.prototype.hasOwnProperty.call(seeds, qprefix);
  }

  function installSeedGuard() {
    if (window.tapSeedGuardInstalled) {
      return true;
    }
    if (typeof window.collectData !== "function" ||
        typeof window.answer !== "function" ||
        typeof window.send !== "function") {
      return false; // stackapicalls.js has not run yet
    }
    window.tapSeedGuardInstalled = true;

    // Every API call for a question goes through collectData, so this is the
    // one place the seed has to be pinned.
    var origCollectData = window.collectData;
    window.collectData = function (qfile, qname, qprefix) {
      return origCollectData.apply(this, arguments).then(function (data) {
        if (!data || typeof data !== "object") {
          return data; // question not found; upstream returns ""
        }
        if (pinned(qprefix)) {
          data.seed = seeds[qprefix];
        } else {
          seeds[qprefix] = data.seed;
        }
        return data;
      });
    };

    // answer() sets data.seed from the seed its click listener captured, which
    // would defeat the line above. Any listener still attached from an earlier
    // render is redirected onto the pinned seed here.
    var origAnswer = window.answer;
    window.answer = function (qfile, qname, qprefix, seed) {
      if (pinned(qprefix)) {
        seed = seeds[qprefix];
      }
      return origAnswer.call(this, qfile, qname, qprefix, seed);
    };

    // Replace the Submit button node before each render so listeners from
    // earlier renders die with the old node. Not needed for correctness now
    // that the seed is pinned, but it stops one click firing several identical
    // /grade calls at somebody else's CAS.
    var origSend = window.send;
    window.send = function (qfile, qname, qprefix) {
      var qtext = document.getElementById(qprefix + "stackapi_qtext");
      var btn = qtext && qtext.querySelector('input[type="button"]');
      if (btn && btn.parentNode) {
        btn.parentNode.replaceChild(btn.cloneNode(true), btn);
      }
      return origSend.apply(this, arguments);
    };

    return true;
  }

  // Take over "Show new example question". Its inline onclick calls send()
  // directly, which with the seed pinned would re-render the same variant for
  // ever. Clearing the pin first is what makes it mean "a new one, please".
  function bindNewExampleButtons() {
    var blocks = document.querySelectorAll(".que.stack");
    Array.prototype.forEach.call(blocks, function (blk) {
      var holder = blk.querySelector('[id$="newquestionbutton"]');
      var inner = blk.querySelector('[id$="_stack"]');
      if (!holder || !inner) {
        return; // createQuestionBlocks has not run yet
      }
      var btn = holder.querySelector('input[type="button"]');
      if (!btn || btn.getAttribute("data-tap-bound")) {
        return;
      }
      var prefix = inner.id.replace(/stack$/, "");
      var qfile = blk.getAttribute("data-qfile");
      var qname = blk.getAttribute("data-qname") || "";
      btn.setAttribute("data-tap-bound", "1");
      btn.onclick = function () {
        delete seeds[prefix];
        send(qfile, qname, prefix);
      };
      hideIfSingleVariant(holder, qfile);
    });
  }

  // Hide "Show new example question" when the question has only one deployed variant
  // (Ben, 2026-11-18): there the button only re-renders the same question. One file holds
  // one question, so counting its <deployedseed> elements is enough. Zero seeds keeps the
  // button, since upstream then picks a random seed. If the fetch fails the button stays.
  function hideIfSingleVariant(holder, qfile) {
    if (!qfile || holder.getAttribute("data-tap-seedcheck")) {
      return;
    }
    holder.setAttribute("data-tap-seedcheck", "1");
    fetch(qfile)
      .then(function (r) { return r.text(); })
      .then(function (text) {
        var n = (text.match(/<deployedseed>/g) || []).length;
        if (n === 1) {
          holder.style.display = "none";
        }
      })
      .catch(function () {});
  }

  // Render every question on page load.
  //
  // Upstream, stackSetup() calls createQuestionBlocks() and addCollapsibles()
  // but never send(), so each question stays an empty container until the reader
  // presses "Show new example question". A textbook whose exercises are all
  // blank until clicked is not usable, so we call send() ourselves once the
  // containers exist. Reported by Ben, 2026-07-28.
  //
  // send() is a global declared by stackapicalls.js (the button's inline onclick
  // depends on that), and the container id is `<prefix>stack`, which is where we
  // recover the prefix send() needs.
  function autoRender() {
    if (typeof send !== "function") {
      return;
    }
    var blocks = document.querySelectorAll(".que.stack");
    var delay = 0;
    Array.prototype.forEach.call(blocks, function (blk) {
      if (blk.getAttribute("data-tap-autoloaded")) {
        return;
      }
      var inner = blk.querySelector('[id$="_stack"]');
      if (!inner) {
        return; // createQuestionBlocks has not run yet; try again next tick
      }
      var tries = parseInt(blk.getAttribute("data-tap-tries") || "0", 10);
      if (tries >= 3) {
        return; // give up rather than hammer the API
      }
      blk.setAttribute("data-tap-autoloaded", "1");
      blk.setAttribute("data-tap-tries", String(tries + 1));
      var prefix = inner.id.replace(/stack$/, "");
      var qfile = blk.getAttribute("data-qfile");
      var qname = blk.getAttribute("data-qname") || "";
      // Stagger the calls: each one is a CAS render, and a chapter page holds
      // several of them.
      setTimeout(function () {
        send(qfile, qname, prefix);
        // send() is fire-and-forget over XHR, and a slow or cold API can drop
        // it silently, which showed up as SOME questions rendering and others
        // staying blank. Check whether the question text ever appeared, and if
        // not, clear the flag so the next poll retries.
        //
        // 15 seconds, not 6. The hosted API scales to zero and a cold start
        // takes about 8, so a 6-second window retried a render that was merely
        // slow, which was how the seed bug above got triggered on the first
        // question of a freshly opened page without the reader doing anything.
        // A genuinely dropped request now retries 15 seconds later instead.
        setTimeout(function () {
          var qtext = document.getElementById(prefix + "stackapi_qtext");
          var rendered = qtext && qtext.style.display !== "none";
          if (!rendered) {
            blk.removeAttribute("data-tap-autoloaded");
          }
        }, 15000);
      }, delay);
      delay += 250;
    });
  }

  // Hook the page's own lifecycle rather than racing it.
  //
  // stackSetup() is called from <body onload>, and it is what builds the empty
  // question containers. Polling for those containers meant we could fire
  // before they existed, or between their creation and the rest of setup, which
  // is why rendering was intermittent. Wrapping stackSetup means autoRender runs
  // at exactly the right moment, every time. The poll below stays only as a
  // fallback for a page where the wrap did not take.
  function hookSetup() {
    if (typeof window.stackSetup !== "function" || window.stackSetup.tapWrapped) {
      return false;
    }
    var original = window.stackSetup;
    var wrapped = function () {
      var result = original.apply(this, arguments);
      installSeedGuard();
      bindNewExampleButtons();
      autoRender();
      return result;
    };
    wrapped.tapWrapped = true;
    window.stackSetup = wrapped;
    return true;
  }

  // Marks without trailing zeros (Ben, 2026-11-14). Upstream stackapicalls.js writes every
  // mark with toFixed(2): "Score: 3.00 out of 4", "Marks for this submission: 1.00 / 1.00."
  // Rewrite those two texts so whole numbers show as integers and others lose trailing
  // zeros ("0.50" -> "0.5"). Only the score span and the marks lines are touched.
  function tidyNumber(t) {
    return t.replace(/\b(\d+)\.(\d+)\b/g, function (m) { return String(parseFloat(m)); });
  }
  function tidyMarks() {
    var spans = document.querySelectorAll('[id$="score"]');
    Array.prototype.forEach.call(spans, function (el) {
      if (el.children.length === 0) {
        var t = tidyNumber(el.textContent);
        if (t !== el.textContent) { el.textContent = t; }
      }
    });
    var divs = document.querySelectorAll(".que.stack div");
    Array.prototype.forEach.call(divs, function (d) {
      if (d.children.length === 0 &&
          (d.textContent || "").trim().indexOf("Marks for this submission") === 0) {
        var t = tidyNumber(d.textContent);
        if (t !== d.textContent) { d.textContent = t; }
      }
    });
  }
  var tidyQueued = false;
  function watchMarks() {
    if (window.tapMarksWatched || !document.body) { return; }
    window.tapMarksWatched = true;
    new MutationObserver(function () {
      if (tidyQueued) { return; }
      tidyQueued = true;
      setTimeout(function () { tidyQueued = false; tidyMarks(); }, 0);
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  function start() {
    watchMarks();
    installSeedGuard();
    hookSetup();
    bindNewExampleButtons();
    autoRender();
    var n = 0;
    var timer = setInterval(function () {
      installSeedGuard();
      hookSetup();
      bindNewExampleButtons();
      autoRender();
      n += 1;
      if (n > 120) { clearInterval(timer); }
    }, 500);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
  window.addEventListener("load", function () {
    installSeedGuard();
    hookSetup();
    setTimeout(function () { bindNewExampleButtons(); autoRender(); }, 0);
  });
})();
