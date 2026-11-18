var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface-introduction",
  "level": "1",
  "url": "preface-introduction.html",
  "type": "Preface",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  Proof is at the heart of mathematics, and it is the topic that changes most as you move from school mathematics to university mathematics. This book is for anyone making that move, or interested in it: what a proof is, how a proof is put together, and the main methods of proof you will meet.  Each chapter explains one idea, works through examples, and then asks you to do something with it. Some questions are marked by a computer algebra system as soon as you submit them. These do not ask you to type out whole proofs. They ask you to find a counterexample, put the lines of a proof in order, say which line uses a particular fact, or supply the missing step. Those are the skills that reading and writing proofs is built from. Each chapter ends with exercises to write out in full on paper.  The book is an interactive edition of the booklet Thinking about Proof , written in the Mathematics in Transit project in 2022 by teachers and researchers from the Southampton Education School, the School of Mathematics at the University of Southampton, Barton Peveril College and St Edward s School, Poole: Christian Bokhove, Athina Thoma, David Gammack, Lu Heng Sunny Yu, Sarah Roberts and Frances Downey. The booklet drew on the SMP archives at the University of Southampton. The booklet and this edition are both published under the CC BY-NC-SA 4.0 licence; the Colophon at the end of the book gives the details.  Model proofs for the end-of-chapter exercises are in the teacher edition.  "
},
{
  "id": "sec-whatisproof-certainty",
  "level": "1",
  "url": "sec-whatisproof-certainty.html",
  "type": "Section",
  "number": "1.1",
  "title": "Proof and certainty",
  "body": " Proof and certainty  Proof is at the heart of mathematics. A proof uses facts that are already known, together with logical argument, to show that a statement is true. Once a statement has been proved, we can be certain that it is always true.  Many facts that you use every day in mathematics, and take for granted, were once ideas that needed to be proved. A statement that we suspect is true but have not yet proved is a conjecture . Once a conjecture has been proved, it is called a proposition or a theorem .  Consider this proposition: for every real number ,  We can test it by substituting values of into both sides. When , Both sides equal 0, so the two sides are equal when .  But can we repeat this for every value of ? If we could check every case, one at a time, we would have a proof by exhaustion ( ). Here there are infinitely many real numbers, so we cannot try them all, and checking some values cannot make us certain that the proposition is true for every . To prove a statement, it is not enough to show that it is true in some cases.  Checks can mislead. In the next question a statement passes three checks and is still false.   Check your understanding: checks are not a proof    "
},
{
  "id": "sec-whatisproof-certainty-3",
  "level": "2",
  "url": "sec-whatisproof-certainty.html#sec-whatisproof-certainty-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conjecture proposition theorem "
},
{
  "id": "ex-ch02-p01-checks-are-not-a-proof",
  "level": "2",
  "url": "sec-whatisproof-certainty.html#ex-ch02-p01-checks-are-not-a-proof",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "Check your understanding: checks are not a proof.",
  "body": " Check your understanding: checks are not a proof   "
},
{
  "id": "sec-whatisproof-direct",
  "level": "1",
  "url": "sec-whatisproof-direct.html",
  "type": "Section",
  "number": "1.2",
  "title": "A direct proof, in algebra and in a picture",
  "body": " A direct proof, in algebra and in a picture  You may have looked at the proposition and thought it obviously true, because you know how to multiply out brackets. Multiplying out the right-hand side gives the left-hand side:  This is an example of a direct proof : it starts from what is known and reaches the conclusion by a sequence of logical steps. It is the kind of proof you are most likely to have met at A-level, and looks at it in more detail.   Check your understanding: what makes it a proof?    A direct proof need not use algebra. Geometry, or reasoning in words, can play the same part, provided each step follows logically from the one before. shows another direct proof of the proposition.   A picture proof of (after SMP AS\/A2 Core 3 for AQA, chapter 10).   A square of side x has a square of side 1 cut from one corner. The strip along the top is cut off and moved to the side, and the pieces form a rectangle x plus 1 long and x minus 1 high.     The steps of the picture proof are these.   Start with a square of side . Its area is .  Cut a square of side 1 from one corner. What is left has area .  Cut along the dashed line. This takes off a strip long and 1 high. Turn the strip and place it against the side of the other piece.  The two pieces now form a rectangle long and high, so its area is . It is made of the same pieces as the shape of area , so .    Check your understanding: follow the picture    The same idea works with a bigger square cut from the corner.   Check your understanding: change the picture    The picture proves the proposition only when . For other values of a length such as is zero or negative, and the picture cannot be drawn. The algebraic proof works for every real number . A picture can be a proof, but it proves exactly what it shows.  "
},
{
  "id": "sec-whatisproof-direct-3",
  "level": "2",
  "url": "sec-whatisproof-direct.html#sec-whatisproof-direct-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direct proof "
},
{
  "id": "ex-ch02-p02-summarise-the-direct-proof",
  "level": "2",
  "url": "sec-whatisproof-direct.html#ex-ch02-p02-summarise-the-direct-proof",
  "type": "Checkpoint",
  "number": "1.2.1",
  "title": "Check your understanding: what makes it a proof?",
  "body": " Check your understanding: what makes it a proof?   "
},
{
  "id": "fig-whatisproof-picture-proof",
  "level": "2",
  "url": "sec-whatisproof-direct.html#fig-whatisproof-picture-proof",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " A picture proof of (after SMP AS\/A2 Core 3 for AQA, chapter 10).   A square of side x has a square of side 1 cut from one corner. The strip along the top is cut off and moved to the side, and the pieces form a rectangle x plus 1 long and x minus 1 high.    "
},
{
  "id": "ex-ch02-p02-follow-the-picture",
  "level": "2",
  "url": "sec-whatisproof-direct.html#ex-ch02-p02-follow-the-picture",
  "type": "Checkpoint",
  "number": "1.2.3",
  "title": "Check your understanding: follow the picture.",
  "body": " Check your understanding: follow the picture   "
},
{
  "id": "ex-ch02-p02-change-the-picture",
  "level": "2",
  "url": "sec-whatisproof-direct.html#ex-ch02-p02-change-the-picture",
  "type": "Checkpoint",
  "number": "1.2.4",
  "title": "Check your understanding: change the picture.",
  "body": " Check your understanding: change the picture   "
},
{
  "id": "sec-whatisproof-definitions",
  "level": "1",
  "url": "sec-whatisproof-definitions.html",
  "type": "Section",
  "number": "1.3",
  "title": "Definitions",
  "body": " Definitions  A proof can only use what the words in a statement mean, so mathematicians define their words precisely. These definitions are used again and again in this book.  First, some sets of numbers and their symbols.   , the natural numbers (some books include 0).  , the integers .  , the rational numbers (defined below).  , the real numbers .   The symbol means is an element of : says that is an integer.   Even and odd   An integer is even if for some integer . An integer is odd if for some integer .    For some integer means that there is at least one integer that makes the equation true. For example, , so 6 is even, and , so 15 is odd. Every integer is either even or odd, and none is both.   Divides   Let and be integers. We say that  divides  if for some integer . The same fact can be written is a multiple of or is divisible by .    For example, 3 divides 15, because .   Rational and irrational   A real number is rational if it can be written as , where and are integers and . A real number that is not rational is irrational .    For example, , and are rational. The numbers and are irrational; proves this for .  Definitions do work in proofs. To use the fact that is odd, write for some integer ; to show that a number is even, show that it equals (an integer). builds a whole proof in this way.   Check your understanding: using the definitions    "
},
{
  "id": "sec-whatisproof-definitions-4",
  "level": "2",
  "url": "sec-whatisproof-definitions.html#sec-whatisproof-definitions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural numbers integers rational numbers real numbers "
},
{
  "id": "def-whatisproof-even-odd",
  "level": "2",
  "url": "sec-whatisproof-definitions.html#def-whatisproof-even-odd",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Even and odd.",
  "body": " Even and odd   An integer is even if for some integer . An integer is odd if for some integer .   "
},
{
  "id": "def-whatisproof-divides",
  "level": "2",
  "url": "sec-whatisproof-definitions.html#def-whatisproof-divides",
  "type": "Definition",
  "number": "1.3.2",
  "title": "Divides.",
  "body": " Divides   Let and be integers. We say that  divides  if for some integer . The same fact can be written is a multiple of or is divisible by .   "
},
{
  "id": "def-whatisproof-rational",
  "level": "2",
  "url": "sec-whatisproof-definitions.html#def-whatisproof-rational",
  "type": "Definition",
  "number": "1.3.3",
  "title": "Rational and irrational.",
  "body": " Rational and irrational   A real number is rational if it can be written as , where and are integers and . A real number that is not rational is irrational .   "
},
{
  "id": "ex-ch02-p03-definitions-in-action",
  "level": "2",
  "url": "sec-whatisproof-definitions.html#ex-ch02-p03-definitions-in-action",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "Check your understanding: using the definitions.",
  "body": " Check your understanding: using the definitions   "
},
{
  "id": "sec-whatisproof-reading",
  "level": "1",
  "url": "sec-whatisproof-reading.html",
  "type": "Section",
  "number": "1.4",
  "title": "Reading a proof",
  "body": " Reading a proof  You will read many proofs in this book. Reading a proof well is a skill, and one habit helps a great deal. In a study with university students, a short training in self-explanation improved how well students understood the proofs they read, and the improvement lasted (Hodds, Alcock and Inglis, 2014).   Self-explanation  After you read each line of a proof:   identify the main idea of the line;  explain to yourself how it follows from earlier lines, or from something you already know;  if you cannot, ask yourself what would make it true.    Two other kinds of comment come more easily but help less. A paraphrase repeats the line in other words, without saying why it is true. A monitoring comment says how well you are following ( OK, I get this ). Both are natural, but neither explains the line.  For example, here are three comments on a line from the first section of this chapter: When , both sides equal 0, so they are equal when .   Three kinds of comment on one line      Kind  Comment    Self-explanation  Putting the same value into both sides lets us compare them, but only for that one value of .    Paraphrase  Substituting into each side gives 0 both times.    Monitoring  I can follow this calculation easily.      Check your understanding: self-explanation    "
},
{
  "id": "sec-whatisproof-reading-2",
  "level": "2",
  "url": "sec-whatisproof-reading.html#sec-whatisproof-reading-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "self-explanation "
},
{
  "id": "sec-whatisproof-reading-4",
  "level": "2",
  "url": "sec-whatisproof-reading.html#sec-whatisproof-reading-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "paraphrase monitoring "
},
{
  "id": "table-whatisproof-comments",
  "level": "2",
  "url": "sec-whatisproof-reading.html#table-whatisproof-comments",
  "type": "Table",
  "number": "1.4.1",
  "title": "Three kinds of comment on one line",
  "body": " Three kinds of comment on one line      Kind  Comment    Self-explanation  Putting the same value into both sides lets us compare them, but only for that one value of .    Paraphrase  Substituting into each side gives 0 both times.    Monitoring  I can follow this calculation easily.    "
},
{
  "id": "ex-ch02-p04-self-explanation",
  "level": "2",
  "url": "sec-whatisproof-reading.html#ex-ch02-p04-self-explanation",
  "type": "Checkpoint",
  "number": "1.4.2",
  "title": "Check your understanding: self-explanation.",
  "body": " Check your understanding: self-explanation   "
},
{
  "id": "sec-whatisproof-kinds",
  "level": "1",
  "url": "sec-whatisproof-kinds.html",
  "type": "Section",
  "number": "1.5",
  "title": "Kinds of proof",
  "body": " Kinds of proof  The algebraic and the picture proofs above are both direct proofs: they start from what is known and reach the conclusion by a chain of logical steps ( ). Other kinds of proof have their own shapes, and each has a chapter of this book.   Proof by exhaustion ( ): split the statement into a finite number of cases and prove each one. Checking values one at a time is a proof only when the cases are finite and cover everything.  Proof by induction ( ): for statements about every positive integer , prove the first case, then prove that each case leads to the next. It is studied in A-level Further Mathematics and used throughout university mathematics. Like a direct proof, it argues forwards, step by step, from what is known.  Proof by contradiction ( ): an indirect proof. Assume that the statement is false, and show that this leads to something impossible.   Before the methods of proof, looks at how to show that a statement is false: a disproof by counterexample gives one example for which the statement fails, and one example is enough. Then looks at how a proof is put together. After the methods, looks at choosing a method, and at checking whether a proof is correct.   Check your understanding: what kind of proof?    "
},
{
  "id": "sec-whatisproof-kinds-4",
  "level": "2",
  "url": "sec-whatisproof-kinds.html#sec-whatisproof-kinds-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "disproof by counterexample "
},
{
  "id": "ex-ch02-p05-name-the-method",
  "level": "2",
  "url": "sec-whatisproof-kinds.html#ex-ch02-p05-name-the-method",
  "type": "Checkpoint",
  "number": "1.5.1",
  "title": "Check your understanding: what kind of proof?",
  "body": " Check your understanding: what kind of proof?   "
},
{
  "id": "sec-ch03-counterexamples",
  "level": "1",
  "url": "sec-ch03-counterexamples.html",
  "type": "Section",
  "number": "2.1",
  "title": "Counterexamples",
  "body": " Counterexamples  When we meet a conjecture , a statement we suspect is true but have not yet proved, a good first step is to try some values and see whether it seems to hold. Sometimes the values show that the conjecture is false, and then we can disprove it.  Many conjectures claim that something is true in every case: for all real numbers and , for every pair of odd numbers, for all positive .    A counterexample to a conjecture of this kind is a single case that satisfies the conditions of the conjecture but for which its conclusion is false.    To disprove such a conjecture, one counterexample is enough. The conjecture claims to be true in every case, and one case in which it fails shows that the claim is wrong.  A counterexample must be one of the cases the conjecture talks about. If a conjecture is about odd numbers, positive numbers or two different numbers, your example must be odd, positive or different too; otherwise it tells us nothing about the conjecture.  A counterexample shows that a conjecture is not true in every case. It does not show that the conjecture is false in every case: a false conjecture can still be true for many values. That is one reason why trying a few values can mislead you.    By finding a suitable counterexample, prove that this conjecture is false: for all real numbers and ,    When and , Since , this counterexample shows that the conjecture is false.     Check your understanding  In the answer boxes, type fractions as 1\/2 , as sqrt(2) , as pi and as e .      "
},
{
  "id": "sec-ch03-counterexamples-2",
  "level": "2",
  "url": "sec-ch03-counterexamples.html#sec-ch03-counterexamples-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conjecture "
},
{
  "id": "ch03-def-counterexample",
  "level": "2",
  "url": "sec-ch03-counterexamples.html#ch03-def-counterexample",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  A counterexample to a conjecture of this kind is a single case that satisfies the conditions of the conjecture but for which its conclusion is false.   "
},
{
  "id": "ch03-example-cubes",
  "level": "2",
  "url": "sec-ch03-counterexamples.html#ch03-example-cubes",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "  By finding a suitable counterexample, prove that this conjecture is false: for all real numbers and ,    When and , Since , this counterexample shows that the conjecture is false.   "
},
{
  "id": "ex-ch03-p01-summarise-the-disproof",
  "level": "2",
  "url": "sec-ch03-counterexamples.html#ex-ch03-p01-summarise-the-disproof",
  "type": "Checkpoint",
  "number": "2.1.3",
  "title": "",
  "body": ""
},
{
  "id": "ex-ch03-p01-what-one-counterexample-shows",
  "level": "2",
  "url": "sec-ch03-counterexamples.html#ex-ch03-p01-what-one-counterexample-shows",
  "type": "Checkpoint",
  "number": "2.1.4",
  "title": "",
  "body": ""
},
{
  "id": "ex-ch03-p01-disprove-a-new-conjecture",
  "level": "2",
  "url": "sec-ch03-counterexamples.html#ex-ch03-p01-disprove-a-new-conjecture",
  "type": "Checkpoint",
  "number": "2.1.5",
  "title": "",
  "body": ""
},
{
  "id": "sec-ch03-exercises",
  "level": "1",
  "url": "sec-ch03-exercises.html",
  "type": "Exercises",
  "number": "2.2",
  "title": "Exercises",
  "body": " Exercises   Prove that each of these conjectures is false by finding a suitable counterexample. Write each disproof out in full, as in : say which values you are using, check that they satisfy the conditions of the conjecture, work out both sides, and say why this shows the conjecture is false. After each exercise, enter your counterexample in the check that follows it. The two trigonometric conjectures share one check.     The product of two odd numbers is always a multiple of .    Write down the products of a few pairs of odd numbers. Is every one a multiple of ?       For all real , .    Choose an angle whose cosine you know exactly, such as or , and work out both sides.      For all real , .    Choose an angle whose sine you know exactly and work out both sides. Some angles make both sides , so avoid those.       For all real values of , .    Squaring makes some numbers bigger and some smaller. Which numbers get smaller when you square them?       The product of two different irrational numbers is always irrational.    is irrational. Can you find a different irrational number that gives a rational answer when multiplied by ?       For all real , .    Try a simple value such as and work out each side exactly.       For all positive real numbers and , .    Choose values whose natural logarithms you know exactly, such as , or . Be careful: some choices make both sides equal.       For all real numbers and , if then . (In symbols, ; read as implies .)    A counterexample needs a pair for which is true but is false. What happens when is negative?     "
},
{
  "id": "ch03-exercise-1",
  "level": "2",
  "url": "sec-ch03-exercises.html#ch03-exercise-1",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": "  The product of two odd numbers is always a multiple of .    Write down the products of a few pairs of odd numbers. Is every one a multiple of ?   "
},
{
  "id": "ex-ch03-p02-ex1-product-of-odd-numbers",
  "level": "2",
  "url": "sec-ch03-exercises.html#ex-ch03-p02-ex1-product-of-odd-numbers",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": ""
},
{
  "id": "ch03-exercise-2",
  "level": "2",
  "url": "sec-ch03-exercises.html#ch03-exercise-2",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": "  For all real , .    Choose an angle whose cosine you know exactly, such as or , and work out both sides.   "
},
{
  "id": "ch03-exercise-3",
  "level": "2",
  "url": "sec-ch03-exercises.html#ch03-exercise-3",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": "  For all real , .    Choose an angle whose sine you know exactly and work out both sides. Some angles make both sides , so avoid those.   "
},
{
  "id": "ex-ch03-p02-ex2-ex3-trigonometric-identities",
  "level": "2",
  "url": "sec-ch03-exercises.html#ex-ch03-p02-ex2-ex3-trigonometric-identities",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": ""
},
{
  "id": "ch03-exercise-4",
  "level": "2",
  "url": "sec-ch03-exercises.html#ch03-exercise-4",
  "type": "Exercise",
  "number": "2.2.6",
  "title": "",
  "body": "  For all real values of , .    Squaring makes some numbers bigger and some smaller. Which numbers get smaller when you square them?   "
},
{
  "id": "ex-ch03-p02-ex4-square-at-least-x",
  "level": "2",
  "url": "sec-ch03-exercises.html#ex-ch03-p02-ex4-square-at-least-x",
  "type": "Exercise",
  "number": "2.2.7",
  "title": "",
  "body": ""
},
{
  "id": "ch03-exercise-5",
  "level": "2",
  "url": "sec-ch03-exercises.html#ch03-exercise-5",
  "type": "Exercise",
  "number": "2.2.8",
  "title": "",
  "body": "  The product of two different irrational numbers is always irrational.    is irrational. Can you find a different irrational number that gives a rational answer when multiplied by ?   "
},
{
  "id": "ex-ch03-p03-ex5-product-of-irrationals",
  "level": "2",
  "url": "sec-ch03-exercises.html#ex-ch03-p03-ex5-product-of-irrationals",
  "type": "Exercise",
  "number": "2.2.9",
  "title": "",
  "body": ""
},
{
  "id": "ch03-exercise-6",
  "level": "2",
  "url": "sec-ch03-exercises.html#ch03-exercise-6",
  "type": "Exercise",
  "number": "2.2.10",
  "title": "",
  "body": "  For all real , .    Try a simple value such as and work out each side exactly.   "
},
{
  "id": "ex-ch03-p03-ex6-exponential-sum",
  "level": "2",
  "url": "sec-ch03-exercises.html#ex-ch03-p03-ex6-exponential-sum",
  "type": "Exercise",
  "number": "2.2.11",
  "title": "",
  "body": ""
},
{
  "id": "ch03-exercise-7",
  "level": "2",
  "url": "sec-ch03-exercises.html#ch03-exercise-7",
  "type": "Exercise",
  "number": "2.2.12",
  "title": "",
  "body": "  For all positive real numbers and , .    Choose values whose natural logarithms you know exactly, such as , or . Be careful: some choices make both sides equal.   "
},
{
  "id": "ex-ch03-p03-ex7-log-of-product",
  "level": "2",
  "url": "sec-ch03-exercises.html#ex-ch03-p03-ex7-log-of-product",
  "type": "Exercise",
  "number": "2.2.13",
  "title": "",
  "body": ""
},
{
  "id": "ch03-exercise-8",
  "level": "2",
  "url": "sec-ch03-exercises.html#ch03-exercise-8",
  "type": "Exercise",
  "number": "2.2.14",
  "title": "",
  "body": "  For all real numbers and , if then . (In symbols, ; read as implies .)    A counterexample needs a pair for which is true but is false. What happens when is negative?   "
},
{
  "id": "ex-ch03-p03-ex8-squares-implication",
  "level": "2",
  "url": "sec-ch03-exercises.html#ex-ch03-p03-ex8-squares-implication",
  "type": "Exercise",
  "number": "2.2.15",
  "title": "",
  "body": ""
},
{
  "id": "sec-structure-implication",
  "level": "1",
  "url": "sec-structure-implication.html",
  "type": "Section",
  "number": "3.1",
  "title": "Implication and equivalence",
  "body": " Implication and equivalence  A proof joins statements by logic. The implication sign shows that one statement implies another. , read implies , means that if statement is true, then statement is true.  Use between statements, which are true or false, not between expressions. or is an implication, but means nothing.  For example, let be is a square and be is a quadrilateral . Then : every square is a quadrilateral.  Swapping the two statements gives the converse , . Here the converse is false: it is not true in all cases. A 1 by 2 rectangle is a quadrilateral but not a square, and one such example is enough to show it ( ).  Now let be a triangle, and let be and be the angle at is a right angle . Here (the converse of Pythagoras' theorem) and (Pythagoras' theorem itself). Each statement implies the other. We say that is true if and only if  is true, and write , or iff . To prove , prove two implications: and .  Some symbols are used again and again when reading or writing a proof.   Key symbols      Symbol  Meaning     if and only if (iff)     implies     is an element of     therefore    Q.E.D., ,  end of the proof (Q.E.D. abbreviates the Latin quod erat demonstrandum , which was to be shown )    , , ,  the natural numbers, integers, rational numbers and real numbers ( )     Decide which implications hold in each pair.   Check your understanding: which way does it go?    Why does have to say where the right angle is?   Check your understanding: why say where the right angle is?    "
},
{
  "id": "sec-structure-implication-2",
  "level": "2",
  "url": "sec-structure-implication.html#sec-structure-implication-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "implication "
},
{
  "id": "sec-structure-implication-5",
  "level": "2",
  "url": "sec-structure-implication.html#sec-structure-implication-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converse "
},
{
  "id": "sec-structure-implication-6",
  "level": "2",
  "url": "sec-structure-implication.html#sec-structure-implication-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "if and only if "
},
{
  "id": "table-structure-symbols",
  "level": "2",
  "url": "sec-structure-implication.html#table-structure-symbols",
  "type": "Table",
  "number": "3.1.1",
  "title": "Key symbols",
  "body": " Key symbols      Symbol  Meaning     if and only if (iff)     implies     is an element of     therefore    Q.E.D., ,  end of the proof (Q.E.D. abbreviates the Latin quod erat demonstrandum , which was to be shown )    , , ,  the natural numbers, integers, rational numbers and real numbers ( )    "
},
{
  "id": "ex-ch04-p01-implication-and-converse",
  "level": "2",
  "url": "sec-structure-implication.html#ex-ch04-p01-implication-and-converse",
  "type": "Checkpoint",
  "number": "3.1.2",
  "title": "Check your understanding: which way does it go?",
  "body": " Check your understanding: which way does it go?   "
},
{
  "id": "ex-ch04-p01-right-angle-at-b",
  "level": "2",
  "url": "sec-structure-implication.html#ex-ch04-p01-right-angle-at-b",
  "type": "Checkpoint",
  "number": "3.1.3",
  "title": "Check your understanding: why say where the right angle is?",
  "body": " Check your understanding: why say where the right angle is?   "
},
{
  "id": "sec-structure-constructing",
  "level": "1",
  "url": "sec-structure-constructing.html",
  "type": "Section",
  "number": "3.2",
  "title": "Constructing a proof",
  "body": " Constructing a proof  Many published proofs are the polished result of a messy process with many dead ends. The finished proof can look effortless and elegant, and it hides the work that went into it. Most people only feel confident about proof after a lot of experience of proving things in many areas of mathematics.  Here is how you might construct a proof. Consider this conjecture: for every odd number , is divisible by 8.  A good place to start is to try some values. They may disprove the conjecture, and then you are done. If they do not, you will need a proof, and trying values may help you to spot patterns and the reasons for them. The rough work below is adapted from SMP AS\/A2 Core 3 for AQA, chapter 10.   Rough work: trying values      Working  Thinking     I'll try a few odd values of and see what happens.     :  :  :  :  :   All these are divisible by 8, so I'll try to prove the conjecture. If I can't produce a proof, I'll carry on with values of and try to find a counterexample.     Where do I start? What do I know? I know that is odd.    Since is odd, is odd too. So is even. (crossed out)  Just because a number is even, it doesn't have to be divisible by 8. For example, 2, 4, 6, 10, 12, 14, 18, I need a different approach.     At this point it can be really useful to ask whether a direct proof would work, and to describe what is happening with algebra.   Rough work: using algebra      Working  Thinking     All odd numbers can be written as some number . For example, . So I can write as .     ,  so      so  Clearly this is divisible by 4, but I need to show it is divisible by 8. I'll factorise and see if that helps.     If I could show that was even, then the number would be the product of 4 and an even number, which is divisible by 8. But and are consecutive integers, so one of them must be even, and hence the product must be even. I think I'm there!     The rough work says so I can write as . A written proof has to say this carefully.   Check your understanding: introducing     Writing the proof  Your last algebraic step may not be enough, on its own, to prove the conjecture clearly. Always finish a proof by explaining the reasoning and drawing a conclusion.    Odd squares minus one   Prove that is divisible by 8 for every odd number .    As is odd, there is an integer such that . So  Since and are consecutive integers, one of them is even, so the product is even too. So is the product of 4 and an even number, and hence it is divisible by 8. So for every odd number , is divisible by 8.    Here is the same proof in numbered lines.   Check your understanding: the proof line by line     Check your understanding: follow the proof with a number     Check your understanding: the best summary    "
},
{
  "id": "table-structure-rough-values",
  "level": "2",
  "url": "sec-structure-constructing.html#table-structure-rough-values",
  "type": "Table",
  "number": "3.2.1",
  "title": "Rough work: trying values",
  "body": " Rough work: trying values      Working  Thinking     I'll try a few odd values of and see what happens.     :  :  :  :  :   All these are divisible by 8, so I'll try to prove the conjecture. If I can't produce a proof, I'll carry on with values of and try to find a counterexample.     Where do I start? What do I know? I know that is odd.    Since is odd, is odd too. So is even. (crossed out)  Just because a number is even, it doesn't have to be divisible by 8. For example, 2, 4, 6, 10, 12, 14, 18, I need a different approach.    "
},
{
  "id": "table-structure-rough-algebra",
  "level": "2",
  "url": "sec-structure-constructing.html#table-structure-rough-algebra",
  "type": "Table",
  "number": "3.2.2",
  "title": "Rough work: using algebra",
  "body": " Rough work: using algebra      Working  Thinking     All odd numbers can be written as some number . For example, . So I can write as .     ,  so      so  Clearly this is divisible by 4, but I need to show it is divisible by 8. I'll factorise and see if that helps.     If I could show that was even, then the number would be the product of 4 and an even number, which is divisible by 8. But and are consecutive integers, so one of them must be even, and hence the product must be even. I think I'm there!    "
},
{
  "id": "ex-ch04-p02-introducing-k",
  "level": "2",
  "url": "sec-structure-constructing.html#ex-ch04-p02-introducing-k",
  "type": "Checkpoint",
  "number": "3.2.3",
  "title": "Check your understanding: introducing <span class=\"process-math\">\\(k\\)<\/span>.",
  "body": " Check your understanding: introducing   "
},
{
  "id": "example-structure-odd-squares",
  "level": "2",
  "url": "sec-structure-constructing.html#example-structure-odd-squares",
  "type": "Example",
  "number": "3.2.4",
  "title": "Odd squares minus one.",
  "body": " Odd squares minus one   Prove that is divisible by 8 for every odd number .    As is odd, there is an integer such that . So  Since and are consecutive integers, one of them is even, so the product is even too. So is the product of 4 and an even number, and hence it is divisible by 8. So for every odd number , is divisible by 8.   "
},
{
  "id": "ex-ch04-p02-proof-line-by-line",
  "level": "2",
  "url": "sec-structure-constructing.html#ex-ch04-p02-proof-line-by-line",
  "type": "Checkpoint",
  "number": "3.2.5",
  "title": "Check your understanding: the proof line by line.",
  "body": " Check your understanding: the proof line by line   "
},
{
  "id": "ex-ch04-p02-follow-the-proof",
  "level": "2",
  "url": "sec-structure-constructing.html#ex-ch04-p02-follow-the-proof",
  "type": "Checkpoint",
  "number": "3.2.6",
  "title": "Check your understanding: follow the proof with a number.",
  "body": " Check your understanding: follow the proof with a number   "
},
{
  "id": "ex-ch04-p02-best-summary",
  "level": "2",
  "url": "sec-structure-constructing.html#ex-ch04-p02-best-summary",
  "type": "Checkpoint",
  "number": "3.2.7",
  "title": "Check your understanding: the best summary.",
  "body": " Check your understanding: the best summary   "
},
{
  "id": "sec-structure-layout",
  "level": "1",
  "url": "sec-structure-layout.html",
  "type": "Section",
  "number": "3.3",
  "title": "Laying out a proof",
  "body": " Laying out a proof  A proof is a combination of writing and mathematics. Lay it out so that the sequence of logical steps leads to the conclusion, and so that a reader is convinced by the reasoning in each step.   The parts of a proof   What you are given: start from the hypothesis ( Let be an odd number. ).  New letters: introduce each one and say what it stands for ( for some integer ).  Deductions: each line follows from earlier lines or from facts you know. Say why, when it is not obvious.  The conclusion: say what you have proved, in the words of the original statement, and mark the end of the proof.    Use the parts of a proof to assemble a proof of a new statement.   Check your understanding: assemble a proof    "
},
{
  "id": "ex-ch04-p03-parsons-odd-numbers",
  "level": "2",
  "url": "sec-structure-layout.html#ex-ch04-p03-parsons-odd-numbers",
  "type": "Checkpoint",
  "number": "3.3.1",
  "title": "Check your understanding: assemble a proof.",
  "body": " Check your understanding: assemble a proof   "
},
{
  "id": "sec-exhaustion-idea",
  "level": "1",
  "url": "sec-exhaustion-idea.html",
  "type": "Section",
  "number": "4.1",
  "title": "Splitting a statement into cases",
  "body": " Splitting a statement into cases  The idea of proof by exhaustion is simple: split the statement into a finite number of distinct cases, then check that the statement is true in each case.   Proof by exhaustion  A proof by exhaustion has two steps.  Split the statement into a finite number of cases that together are exhaustive.  Show that the statement is true in each case.     Three points about these steps may sound abstract now. They will become clear once you have seen a few examples.     The number of cases must be finite. Otherwise you would have to check infinitely many cases, which cannot be done, at least not in a finite time. Take the statement the square of any real number is never negative . In principle you could treat every real number as a case of its own, and check its square one number at a time. That would never finish. Split the real numbers instead into three cases, numbers less than zero, numbers greater than zero, and zero, and there are only three cases to check. does exactly this.    The cases must be exhaustive. There are finitely many of them, but together they must cover every possibility the statement is about: every number the statement makes a claim about must lie in at least one case.    Step 2 means proving each case. For many proofs this is no more than a direct check that the case is true. For others, a case needs a proof of its own. So proof by exhaustion is often best thought of as a first step towards a complete proof, rather than a whole method in itself.     Why split a statement into cases at all? Each case is a smaller statement than the original, and is often easier to prove. Once you have split into cases, each case is proved independently of the others. Often a case is simple enough to prove by substituting numbers and checking; occasionally you will need another type of proof for a case, such as a direct proof ( ).  Check your understanding: decide whether each proposed set of cases would work for a proof by exhaustion.   "
},
{
  "id": "ex-ch05-p01-exhaustive-or-not",
  "level": "2",
  "url": "sec-exhaustion-idea.html#ex-ch05-p01-exhaustive-or-not",
  "type": "Checkpoint",
  "number": "4.1.1",
  "title": "",
  "body": ""
},
{
  "id": "sec-exhaustion-splits",
  "level": "1",
  "url": "sec-exhaustion-splits.html",
  "type": "Section",
  "number": "4.2",
  "title": "Common ways to split into cases",
  "body": " Common ways to split into cases  Some ways of splitting into finitely many exhaustive cases come up again and again.   Positive, negative or zero  Every real number is positive, negative or zero: This property is called the trichotomy of the real numbers, from the Greek for cutting in three. Every real number satisfies it.    Even and odd  Every integer is even or odd: Recall the definitions ( ): is even if it can be written as , where is an integer, and is odd if it can be written as , where is an integer.    Remainders on division  Fix an integer . Every integer is a multiple of , or 1 more than a multiple of , or 2 more, and so on up to more than a multiple of : The number added to is the remainder of on division by . This extends the split into even and odd, which is the case : an even number leaves remainder 0 on division by 2, and an odd number leaves remainder 1. shows the split for . Every integer lies in exactly one row.    The integers from to , sorted by their remainder on division by 3.   The integers from minus 3 to 11 arranged in three rows by their remainder on division by 3; every integer appears in exactly one row.      Checking each case explicitly  If a statement is only about a finite list of values, the cases can simply be those values, checked one at a time. For example, to prove that for , check each of the six values in turn. asks you to do this.  In examinations and in your studies, use this kind of proof only when the number of cases is manageable: fewer than about ten. Beyond that, it is not an efficient or realistic way to finish a proof in a reasonable time. Outside school and undergraduate study, though, checking a large finite number of cases one by one, usually with a computer, is sometimes used in research. The famous four-colour theorem is an early example. Its infinitely many cases were first reduced to 1,834 cases (later reduced to 1,482), and a computer checked each one (Appel, K. and Haken, W. (1989), Every Planar Map is Four Colorable , Contemporary Mathematics 98, American Mathematical Society).   Check your understanding: complete a split by remainders.   "
},
{
  "id": "para-exhaustion-trichotomy-2",
  "level": "2",
  "url": "sec-exhaustion-splits.html#para-exhaustion-trichotomy-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trichotomy "
},
{
  "id": "para-exhaustion-parity-2",
  "level": "2",
  "url": "sec-exhaustion-splits.html#para-exhaustion-parity-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "even odd "
},
{
  "id": "para-exhaustion-remainders-2",
  "level": "2",
  "url": "sec-exhaustion-splits.html#para-exhaustion-remainders-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "remainder "
},
{
  "id": "fig-exhaustion-remainders",
  "level": "2",
  "url": "sec-exhaustion-splits.html#fig-exhaustion-remainders",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": " The integers from to , sorted by their remainder on division by 3.   The integers from minus 3 to 11 arranged in three rows by their remainder on division by 3; every integer appears in exactly one row.    "
},
{
  "id": "ex-ch05-p02-missing-case",
  "level": "2",
  "url": "sec-exhaustion-splits.html#ex-ch05-p02-missing-case",
  "type": "Checkpoint",
  "number": "4.2.2",
  "title": "",
  "body": ""
},
{
  "id": "sec-exhaustion-examples",
  "level": "1",
  "url": "sec-exhaustion-examples.html",
  "type": "Section",
  "number": "4.3",
  "title": "Worked examples",
  "body": " Worked examples   Using trichotomy   Prove that the square of any real number is never negative.    Let be any real number.  It is always useful to name the variable first, and the set it belongs to: natural numbers, real numbers and so on.  To prove: .  Where you can, translate the statement in words into a statement in symbols.  By the trichotomy of the real numbers, , or .  Case . Multiplying both sides of by gives , so .  Here is positive, and multiplying both sides of an inequality by a positive number keeps its direction.  Case . Multiplying both sides of by gives , so .  Here is negative, and multiplying both sides of an inequality by a negative number reverses it: becomes .  Case . Then .  So in every case or ; that is, for every real number .    Check your understanding: the proof above, written in numbered lines.    Using remainders   Prove that if is an integer that is not a multiple of 3, then is a multiple of 3.    Splitting by the remainder on division by 3, every integer is one of the following:  a multiple of 3;  1 more than a multiple of 3;  2 more than a multiple of 3.    Case (i) is ruled out by the hypothesis, so we need only check cases (ii) and (iii). In both we use the difference of two squares, .  Case (ii): is 1 more than a multiple of 3, so for some integer . Then which is a multiple of 3.  Case (iii): is 2 more than a multiple of 3, so for some integer . Then which is a multiple of 3.  Every case allowed by the hypothesis has been checked, so the statement is proved.    Check your understanding: summarise the proof above, then build a proof of the same kind.     Checking every case   Prove that for every natural number .    A natural number is one of the four numbers , so there are four cases.  Case : and . Since , the statement is true for .  Case : and . Since , the statement is true for .  Case : and . Since , the statement is true for .  Case : and . Since , the statement is true for .  The statement is true in every case, so it is proved.  Some authors count 0 as a natural number. If you do, check that case too: , so the statement is still true.    "
},
{
  "id": "example-exhaustion-trichotomy",
  "level": "2",
  "url": "sec-exhaustion-examples.html#example-exhaustion-trichotomy",
  "type": "Example",
  "number": "4.3.1",
  "title": "Using trichotomy.",
  "body": " Using trichotomy   Prove that the square of any real number is never negative.    Let be any real number.  It is always useful to name the variable first, and the set it belongs to: natural numbers, real numbers and so on.  To prove: .  Where you can, translate the statement in words into a statement in symbols.  By the trichotomy of the real numbers, , or .  Case . Multiplying both sides of by gives , so .  Here is positive, and multiplying both sides of an inequality by a positive number keeps its direction.  Case . Multiplying both sides of by gives , so .  Here is negative, and multiplying both sides of an inequality by a negative number reverses it: becomes .  Case . Then .  So in every case or ; that is, for every real number .   "
},
{
  "id": "ex-ch05-p03-trichotomy-lines",
  "level": "2",
  "url": "sec-exhaustion-examples.html#ex-ch05-p03-trichotomy-lines",
  "type": "Checkpoint",
  "number": "4.3.2",
  "title": "",
  "body": ""
},
{
  "id": "example-exhaustion-divisibility",
  "level": "2",
  "url": "sec-exhaustion-examples.html#example-exhaustion-divisibility",
  "type": "Example",
  "number": "4.3.3",
  "title": "Using remainders.",
  "body": " Using remainders   Prove that if is an integer that is not a multiple of 3, then is a multiple of 3.    Splitting by the remainder on division by 3, every integer is one of the following:  a multiple of 3;  1 more than a multiple of 3;  2 more than a multiple of 3.    Case (i) is ruled out by the hypothesis, so we need only check cases (ii) and (iii). In both we use the difference of two squares, .  Case (ii): is 1 more than a multiple of 3, so for some integer . Then which is a multiple of 3.  Case (iii): is 2 more than a multiple of 3, so for some integer . Then which is a multiple of 3.  Every case allowed by the hypothesis has been checked, so the statement is proved.   "
},
{
  "id": "ex-ch05-p03-divisibility-summary",
  "level": "2",
  "url": "sec-exhaustion-examples.html#ex-ch05-p03-divisibility-summary",
  "type": "Checkpoint",
  "number": "4.3.4",
  "title": "",
  "body": ""
},
{
  "id": "ex-ch05-p03-parsons-cube-minus-n",
  "level": "2",
  "url": "sec-exhaustion-examples.html#ex-ch05-p03-parsons-cube-minus-n",
  "type": "Checkpoint",
  "number": "4.3.5",
  "title": "",
  "body": ""
},
{
  "id": "example-exhaustion-explicit",
  "level": "2",
  "url": "sec-exhaustion-examples.html#example-exhaustion-explicit",
  "type": "Example",
  "number": "4.3.6",
  "title": "Checking every case.",
  "body": " Checking every case   Prove that for every natural number .    A natural number is one of the four numbers , so there are four cases.  Case : and . Since , the statement is true for .  Case : and . Since , the statement is true for .  Case : and . Since , the statement is true for .  Case : and . Since , the statement is true for .  The statement is true in every case, so it is proved.  Some authors count 0 as a natural number. If you do, check that case too: , so the statement is still true.   "
},
{
  "id": "sec-exhaustion-pitfalls",
  "level": "1",
  "url": "sec-exhaustion-pitfalls.html",
  "type": "Section",
  "number": "4.4",
  "title": "Common mistakes, and when to use exhaustion",
  "body": " Common mistakes, and when to use exhaustion  Checking one or two values does not show that a statement is true for all values. When a statement makes a claim about a set of numbers, every number in that set has to be checked. For example, take the claim that if is an integer with , then is greater than . If you checked only , you might be convinced that the claim is true. But a proof by exhaustion is complete only when every value the claim is about has been checked, and a careful check of the whole range shows that the claim is false. The question below asks you to make that kind of check for yourself.   If a statement claims to hold for an infinite set of numbers, checking values one at a time can never be enough, because there are infinitely many cases. Then you need another method, or a split into finitely many classes of numbers, such as remainders on division, each class containing infinitely many numbers.  Make sure the cases are exhaustive. The cases you split into must cover every possibility the statement is about. For example, if a statement is about all real numbers and you use trichotomy, do not forget to check that the statement is also true for , as in . And if you find a case in which the statement fails, you have a counterexample ( ): the statement is false.  When is the method useful? Proof by exhaustion is useful when a statement can easily be split into a handful of simpler, or more limited, cases. It takes some experience to know whether the cases really are easier to prove, or whether it would be easier to prove the original statement directly by another method. Sometimes it is just a matter of trial and error. Like most things in mathematics, and in life, experience comes from enough trial and error.  "
},
{
  "id": "ex-ch05-p04-check-every-case",
  "level": "2",
  "url": "sec-exhaustion-pitfalls.html#ex-ch05-p04-check-every-case",
  "type": "Checkpoint",
  "number": "4.4.1",
  "title": "",
  "body": ""
},
{
  "id": "exercises-exhaustion",
  "level": "1",
  "url": "exercises-exhaustion.html",
  "type": "Exercises",
  "number": "4.5",
  "title": "Exercises",
  "body": " Exercises   Prove each statement by exhaustion. Some exercises are followed by a check that marks one part of the proof.     Prove that for .    There are six cases. For a check without rounding, raise both sides to the fifth power.      Show that if is an integer with , then is not a multiple of 4.    There are six cases. In each, write as a multiple of 4 plus a remainder.      Prove by exhaustion that if is a prime number with , then is a multiple of 12.    First list every prime with . Each one is a case.       Prove that if is a positive integer less than 5, then the last digit of is .      Prove that if is an integer with , then is not divisible by 3.    There are five cases. Find the remainder of each value on division by 3.       Prove that for every integer with , the number is 1 more or 1 less than a multiple of 7. (That is, the difference between and the nearest multiple of 7 is 1.)    For each , find the multiple of 7 nearest to . It may be above or below.       Let be an integer. Prove by exhaustion that is positive for .    There are three cases.      Prove by exhaustion that if is an integer that is not divisible by 3, then for some integer .    Write the cases with a different letter from : or .       Use exhaustion to prove that if is an integer that is not a multiple of 3, then is a multiple of 3.    Compare with , or use the previous exercise.      Prove that if is a positive integer, then is divisible by 7.    Factorise completely: start with , use the difference of two squares, then the factor theorem. Then use the seven cases , .       Prove that for every real number .    Recall the definition of : if , and if .    "
},
{
  "id": "exercise-exhaustion-1",
  "level": "2",
  "url": "exercises-exhaustion.html#exercise-exhaustion-1",
  "type": "Exercise",
  "number": "4.5.1",
  "title": "",
  "body": "  Prove that for .    There are six cases. For a check without rounding, raise both sides to the fifth power.   "
},
{
  "id": "exercise-exhaustion-2",
  "level": "2",
  "url": "exercises-exhaustion.html#exercise-exhaustion-2",
  "type": "Exercise",
  "number": "4.5.2",
  "title": "",
  "body": "  Show that if is an integer with , then is not a multiple of 4.    There are six cases. In each, write as a multiple of 4 plus a remainder.   "
},
{
  "id": "exercise-exhaustion-3",
  "level": "2",
  "url": "exercises-exhaustion.html#exercise-exhaustion-3",
  "type": "Exercise",
  "number": "4.5.3",
  "title": "",
  "body": "  Prove by exhaustion that if is a prime number with , then is a multiple of 12.    First list every prime with . Each one is a case.   "
},
{
  "id": "ex-ch05-p05-ex3-prime-cases",
  "level": "2",
  "url": "exercises-exhaustion.html#ex-ch05-p05-ex3-prime-cases",
  "type": "Exercise",
  "number": "4.5.4",
  "title": "",
  "body": ""
},
{
  "id": "exercise-exhaustion-4",
  "level": "2",
  "url": "exercises-exhaustion.html#exercise-exhaustion-4",
  "type": "Exercise",
  "number": "4.5.5",
  "title": "",
  "body": "  Prove that if is a positive integer less than 5, then the last digit of is .   "
},
{
  "id": "exercise-exhaustion-5",
  "level": "2",
  "url": "exercises-exhaustion.html#exercise-exhaustion-5",
  "type": "Exercise",
  "number": "4.5.6",
  "title": "",
  "body": "  Prove that if is an integer with , then is not divisible by 3.    There are five cases. Find the remainder of each value on division by 3.   "
},
{
  "id": "ex-ch05-p05-ex5-remainder-table",
  "level": "2",
  "url": "exercises-exhaustion.html#ex-ch05-p05-ex5-remainder-table",
  "type": "Exercise",
  "number": "4.5.7",
  "title": "",
  "body": ""
},
{
  "id": "exercise-exhaustion-6",
  "level": "2",
  "url": "exercises-exhaustion.html#exercise-exhaustion-6",
  "type": "Exercise",
  "number": "4.5.8",
  "title": "",
  "body": "  Prove that for every integer with , the number is 1 more or 1 less than a multiple of 7. (That is, the difference between and the nearest multiple of 7 is 1.)    For each , find the multiple of 7 nearest to . It may be above or below.   "
},
{
  "id": "ex-ch05-p05-ex6-one-more-or-less",
  "level": "2",
  "url": "exercises-exhaustion.html#ex-ch05-p05-ex6-one-more-or-less",
  "type": "Exercise",
  "number": "4.5.9",
  "title": "",
  "body": ""
},
{
  "id": "exercise-exhaustion-7",
  "level": "2",
  "url": "exercises-exhaustion.html#exercise-exhaustion-7",
  "type": "Exercise",
  "number": "4.5.10",
  "title": "",
  "body": "  Let be an integer. Prove by exhaustion that is positive for .    There are three cases.   "
},
{
  "id": "exercise-exhaustion-8",
  "level": "2",
  "url": "exercises-exhaustion.html#exercise-exhaustion-8",
  "type": "Exercise",
  "number": "4.5.11",
  "title": "",
  "body": "  Prove by exhaustion that if is an integer that is not divisible by 3, then for some integer .    Write the cases with a different letter from : or .   "
},
{
  "id": "ex-ch05-p05-ex8-find-k",
  "level": "2",
  "url": "exercises-exhaustion.html#ex-ch05-p05-ex8-find-k",
  "type": "Exercise",
  "number": "4.5.12",
  "title": "",
  "body": ""
},
{
  "id": "exercise-exhaustion-9",
  "level": "2",
  "url": "exercises-exhaustion.html#exercise-exhaustion-9",
  "type": "Exercise",
  "number": "4.5.13",
  "title": "",
  "body": "  Use exhaustion to prove that if is an integer that is not a multiple of 3, then is a multiple of 3.    Compare with , or use the previous exercise.   "
},
{
  "id": "exercise-exhaustion-10",
  "level": "2",
  "url": "exercises-exhaustion.html#exercise-exhaustion-10",
  "type": "Exercise",
  "number": "4.5.14",
  "title": "",
  "body": "  Prove that if is a positive integer, then is divisible by 7.    Factorise completely: start with , use the difference of two squares, then the factor theorem. Then use the seven cases , .   "
},
{
  "id": "ex-ch05-p05-ex10-factor-cases",
  "level": "2",
  "url": "exercises-exhaustion.html#ex-ch05-p05-ex10-factor-cases",
  "type": "Exercise",
  "number": "4.5.15",
  "title": "",
  "body": ""
},
{
  "id": "exercise-exhaustion-11",
  "level": "2",
  "url": "exercises-exhaustion.html#exercise-exhaustion-11",
  "type": "Exercise",
  "number": "4.5.16",
  "title": "",
  "body": "  Prove that for every real number .    Recall the definition of : if , and if .   "
},
{
  "id": "sec-direct-algebra",
  "level": "1",
  "url": "sec-direct-algebra.html",
  "type": "Section",
  "number": "5.1",
  "title": "Describing numbers with algebra",
  "body": " Describing numbers with algebra  The proof in that is divisible by 8 for every odd number is a direct proof : it starts from what is known ( is odd, so for some integer ) and works forward to the result. This kind of direct proof is often called proof by deduction . It is probably the kind of proof you know best from A-level, and this chapter looks at it in more detail.  A good first step is often to describe what is happening with algebra, and then use your algebra to prove the conjecture. shows the usual ways of describing numbers. In each, , and stand for integers.   Describing numbers with algebra    To describe  Use   any integer  any two integers and  three consecutive integers , , (or , , )  any two square numbers and  two consecutive square numbers and  any even number  any odd number  two consecutive even numbers and  two consecutive odd numbers and    If is any integer, then is an even number and is an odd number (the definitions of even and odd are in ). As runs through all the integers, runs through every even number and through every odd number. It follows that and describe any two consecutive even numbers, and and any two consecutive odd numbers.  Not every expression that is always odd will do: shows why.   As runs through the integers, gives every odd number, but gives only every other odd number.   Two number lines from minus 7 to 9. On the first, every odd number is marked as a value of 2k plus 1. On the second, only minus 7, minus 3, 1, 5 and 9 are marked as values of 4k plus 1; the odd numbers minus 5, minus 1, 3 and 7 are missed.     Check your understanding: which expressions give every odd number?   Some facts are taken as known and can simply be stated in a proof. For example:  even even = even;  even odd = even;  even + even = even;  and so on. Each of these facts can itself be proved directly.  Check your understanding: start such a proof, and finish its algebra.   "
},
{
  "id": "sec-direct-algebra-2",
  "level": "2",
  "url": "sec-direct-algebra.html#sec-direct-algebra-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direct proof proof by deduction "
},
{
  "id": "table-direct-representations",
  "level": "2",
  "url": "sec-direct-algebra.html#table-direct-representations",
  "type": "Table",
  "number": "5.1.1",
  "title": "Describing numbers with algebra",
  "body": " Describing numbers with algebra    To describe  Use   any integer  any two integers and  three consecutive integers , , (or , , )  any two square numbers and  two consecutive square numbers and  any even number  any odd number  two consecutive even numbers and  two consecutive odd numbers and   "
},
{
  "id": "fig-direct-odd-numbers",
  "level": "2",
  "url": "sec-direct-algebra.html#fig-direct-odd-numbers",
  "type": "Figure",
  "number": "5.1.2",
  "title": "",
  "body": " As runs through the integers, gives every odd number, but gives only every other odd number.   Two number lines from minus 7 to 9. On the first, every odd number is marked as a value of 2k plus 1. On the second, only minus 7, minus 3, 1, 5 and 9 are marked as values of 4k plus 1; the odd numbers minus 5, minus 1, 3 and 7 are missed.    "
},
{
  "id": "ex-ch06-p01-every-odd-number",
  "level": "2",
  "url": "sec-direct-algebra.html#ex-ch06-p01-every-odd-number",
  "type": "Checkpoint",
  "number": "5.1.3",
  "title": "",
  "body": ""
},
{
  "id": "ex-ch06-p01-opening-lines",
  "level": "2",
  "url": "sec-direct-algebra.html#ex-ch06-p01-opening-lines",
  "type": "Checkpoint",
  "number": "5.1.4",
  "title": "",
  "body": ""
},
{
  "id": "sec-direct-algebra-works",
  "level": "1",
  "url": "sec-direct-algebra-works.html",
  "type": "Section",
  "number": "5.2",
  "title": "When the algebra does the work",
  "body": " When the algebra does the work   The sum of two consecutive odd numbers   Prove that the sum of any two consecutive odd numbers is a multiple of 4.    Let the two consecutive odd numbers be and , where is an integer.  Make sure that you define the symbols you will use.  Then their sum is .  Carry out what the conjecture suggests: here, find the sum.  . Since is an integer, is an integer, so is a multiple of 4.  Factorise to show that you can take out a factor of 4, and say why what is left is an integer.  Hence the sum of any two consecutive odd numbers is a multiple of 4.  Write the conclusion so that it reflects the wording of the conjecture.    Check your understanding: a proof of the same kind, with its last step missing.   "
},
{
  "id": "example-direct-odd-sum",
  "level": "2",
  "url": "sec-direct-algebra-works.html#example-direct-odd-sum",
  "type": "Example",
  "number": "5.2.1",
  "title": "The sum of two consecutive odd numbers.",
  "body": " The sum of two consecutive odd numbers   Prove that the sum of any two consecutive odd numbers is a multiple of 4.    Let the two consecutive odd numbers be and , where is an integer.  Make sure that you define the symbols you will use.  Then their sum is .  Carry out what the conjecture suggests: here, find the sum.  . Since is an integer, is an integer, so is a multiple of 4.  Factorise to show that you can take out a factor of 4, and say why what is left is an integer.  Hence the sum of any two consecutive odd numbers is a multiple of 4.  Write the conclusion so that it reflects the wording of the conjecture.   "
},
{
  "id": "ex-ch06-p02-faded-consecutive-sum",
  "level": "2",
  "url": "sec-direct-algebra-works.html#ex-ch06-p02-faded-consecutive-sum",
  "type": "Checkpoint",
  "number": "5.2.2",
  "title": "",
  "body": ""
},
{
  "id": "sec-direct-reasoning",
  "level": "1",
  "url": "sec-direct-reasoning.html",
  "type": "Section",
  "number": "5.3",
  "title": "When algebra is not enough",
  "body": " When algebra is not enough  In the example above the algebra does most of the work, and little reasoning is needed. It is not always possible to let the algebra do the work, as the next example shows.   The product of three consecutive positive integers   Prove that the product of any three consecutive positive integers is a multiple of 6.    Let the three consecutive positive integers be , and , where is a positive integer.  Make sure that you define the symbols you will use.  Then their product is   At this point you may realise that you are not sure how this helps: you cannot take out a factor of 6.  So start again, with a different idea.  Among three consecutive integers there are either one or two even numbers, so the product is a multiple of 2.  Think about what it means to have three consecutive numbers, and how they relate to odd and even numbers.  Every third integer is a multiple of 3, so one of three consecutive integers is a multiple of 3. Hence the product is a multiple of 3.  So the product is a multiple of 2 and a multiple of 3, and therefore it is a multiple of 6.  Bring the two facts together.    As you can see, proving involves a certain amount of trying ideas out and dismissing them.  Check your understanding: summarise the proof above, then look closely at its last step.    "
},
{
  "id": "example-direct-three-product",
  "level": "2",
  "url": "sec-direct-reasoning.html#example-direct-three-product",
  "type": "Example",
  "number": "5.3.1",
  "title": "The product of three consecutive positive integers.",
  "body": " The product of three consecutive positive integers   Prove that the product of any three consecutive positive integers is a multiple of 6.    Let the three consecutive positive integers be , and , where is a positive integer.  Make sure that you define the symbols you will use.  Then their product is   At this point you may realise that you are not sure how this helps: you cannot take out a factor of 6.  So start again, with a different idea.  Among three consecutive integers there are either one or two even numbers, so the product is a multiple of 2.  Think about what it means to have three consecutive numbers, and how they relate to odd and even numbers.  Every third integer is a multiple of 3, so one of three consecutive integers is a multiple of 3. Hence the product is a multiple of 3.  So the product is a multiple of 2 and a multiple of 3, and therefore it is a multiple of 6.  Bring the two facts together.   "
},
{
  "id": "ex-ch06-p03-summary-three-consecutive",
  "level": "2",
  "url": "sec-direct-reasoning.html#ex-ch06-p03-summary-three-consecutive",
  "type": "Checkpoint",
  "number": "5.3.2",
  "title": "",
  "body": ""
},
{
  "id": "ex-ch06-p03-multiple-of-both",
  "level": "2",
  "url": "sec-direct-reasoning.html#ex-ch06-p03-multiple-of-both",
  "type": "Checkpoint",
  "number": "5.3.3",
  "title": "",
  "body": ""
},
{
  "id": "exercises-direct",
  "level": "1",
  "url": "exercises-direct.html",
  "type": "Exercises",
  "number": "5.4",
  "title": "Exercises",
  "body": " Exercises   Prove each of these statements. Some exercises are followed by a check that marks one part of the proof.     Prove that the cube of any even number is divisible by 8.    Write the even number as , where is an integer. Take care with the bracket when you cube it.      Prove that the sum of the first odd numbers is , for every positive integer .    What is the th odd number? Then use the formula for the sum of an arithmetic series, or write the sum forwards and backwards and add the two.      Prove that , and find the values of for which the identity is not defined.    Write as and put the left-hand side over a single denominator. The identity is not defined wherever one of its parts would mean dividing by zero.       Prove that, for any four consecutive integers, the product of the last two minus the product of the first two is equal to the sum of all four.    Let the integers be , , and , where is an integer, and expand both products.       Prove that the graphs of and are identical.    exactly when . Use to find the least value of .       Prove that the product of four consecutive integers is always 1 less than a perfect square.    Let the integers be , , , . Multiply the outer pair and the inner pair first: what do you notice about the two products?       Prove that is a multiple of 8 for every positive integer .    . Or use .       Prove that if is a prime number with , then is a multiple of 24.    . Show that this is a multiple of 8 and a multiple of 3. Why does that make it a multiple of 24?     "
},
{
  "id": "exercise-direct-1",
  "level": "2",
  "url": "exercises-direct.html#exercise-direct-1",
  "type": "Exercise",
  "number": "5.4.1",
  "title": "",
  "body": "  Prove that the cube of any even number is divisible by 8.    Write the even number as , where is an integer. Take care with the bracket when you cube it.   "
},
{
  "id": "exercise-direct-2",
  "level": "2",
  "url": "exercises-direct.html#exercise-direct-2",
  "type": "Exercise",
  "number": "5.4.2",
  "title": "",
  "body": "  Prove that the sum of the first odd numbers is , for every positive integer .    What is the th odd number? Then use the formula for the sum of an arithmetic series, or write the sum forwards and backwards and add the two.   "
},
{
  "id": "exercise-direct-3",
  "level": "2",
  "url": "exercises-direct.html#exercise-direct-3",
  "type": "Exercise",
  "number": "5.4.3",
  "title": "",
  "body": "  Prove that , and find the values of for which the identity is not defined.    Write as and put the left-hand side over a single denominator. The identity is not defined wherever one of its parts would mean dividing by zero.   "
},
{
  "id": "ex-ch06-p04-ex3-where-undefined",
  "level": "2",
  "url": "exercises-direct.html#ex-ch06-p04-ex3-where-undefined",
  "type": "Exercise",
  "number": "5.4.4",
  "title": "",
  "body": ""
},
{
  "id": "exercise-direct-4",
  "level": "2",
  "url": "exercises-direct.html#exercise-direct-4",
  "type": "Exercise",
  "number": "5.4.5",
  "title": "",
  "body": "  Prove that, for any four consecutive integers, the product of the last two minus the product of the first two is equal to the sum of all four.    Let the integers be , , and , where is an integer, and expand both products.   "
},
{
  "id": "ex-ch06-p04-ex4-equivalence-chain",
  "level": "2",
  "url": "exercises-direct.html#ex-ch06-p04-ex4-equivalence-chain",
  "type": "Exercise",
  "number": "5.4.6",
  "title": "",
  "body": ""
},
{
  "id": "exercise-direct-5",
  "level": "2",
  "url": "exercises-direct.html#exercise-direct-5",
  "type": "Exercise",
  "number": "5.4.7",
  "title": "",
  "body": "  Prove that the graphs of and are identical.    exactly when . Use to find the least value of .   "
},
{
  "id": "ex-ch06-p04-ex5-smallest-constant",
  "level": "2",
  "url": "exercises-direct.html#ex-ch06-p04-ex5-smallest-constant",
  "type": "Exercise",
  "number": "5.4.8",
  "title": "",
  "body": ""
},
{
  "id": "exercise-direct-6",
  "level": "2",
  "url": "exercises-direct.html#exercise-direct-6",
  "type": "Exercise",
  "number": "5.4.9",
  "title": "",
  "body": "  Prove that the product of four consecutive integers is always 1 less than a perfect square.    Let the integers be , , , . Multiply the outer pair and the inner pair first: what do you notice about the two products?   "
},
{
  "id": "ex-ch06-p04-ex6-find-m",
  "level": "2",
  "url": "exercises-direct.html#ex-ch06-p04-ex6-find-m",
  "type": "Exercise",
  "number": "5.4.10",
  "title": "",
  "body": ""
},
{
  "id": "exercise-direct-7",
  "level": "2",
  "url": "exercises-direct.html#exercise-direct-7",
  "type": "Exercise",
  "number": "5.4.11",
  "title": "",
  "body": "  Prove that is a multiple of 8 for every positive integer .    . Or use .   "
},
{
  "id": "ex-ch06-p04-ex7-square-minus-one",
  "level": "2",
  "url": "exercises-direct.html#ex-ch06-p04-ex7-square-minus-one",
  "type": "Exercise",
  "number": "5.4.12",
  "title": "",
  "body": ""
},
{
  "id": "exercise-direct-8",
  "level": "2",
  "url": "exercises-direct.html#exercise-direct-8",
  "type": "Exercise",
  "number": "5.4.13",
  "title": "",
  "body": "  Prove that if is a prime number with , then is a multiple of 24.    . Show that this is a multiple of 8 and a multiple of 3. Why does that make it a multiple of 24?   "
},
{
  "id": "ex-ch06-p04-ex8-parsons-24",
  "level": "2",
  "url": "exercises-direct.html#ex-ch06-p04-ex8-parsons-24",
  "type": "Exercise",
  "number": "5.4.14",
  "title": "",
  "body": ""
},
{
  "id": "sec-induction-picture",
  "level": "1",
  "url": "sec-induction-picture.html",
  "type": "Section",
  "number": "6.1",
  "title": "Odd numbers and squares",
  "body": " Odd numbers and squares  Start with a pattern: add up the odd numbers, starting from 1.   Odd numbers and squares   Prove that for every positive integer .    First look at the statement visually The idea of this visual proof is from J. R. Brown (1997), Proofs and pictures, The British Journal for the Philosophy of Science 48(2), 161-180. , starting from 1 and adding the next term of the sum one at a time. Draw each number as that many dots.   With 1 on the left-hand side: , a single dot.  With on the left-hand side: . Adding 3 dots to the single dot gives a square of side 2.  With : . Adding 5 more dots gives a square of side 3.  With : . Adding 7 more dots gives a square of side 4.   , after this example, shows the four squares.     Each square is the one before with an L-shaped layer of dots added. The newest layer is shown in black.   Four squares of dots with sides 1, 2, 3 and 4. Each square is the one before with an L-shaped layer of 3, 5 and then 7 dots added along the top and the right-hand side.     The pattern carries on: each square is the one before with an L-shaped layer added along the top and down the right-hand side, and each new layer has the next odd number of dots. The pictures make the statement very believable. But four pictures check four cases, and checking cases is not a proof (see ). However many cases we check, there are infinitely many more. We need an argument that works for every at once.  The pictures do suggest one. Think about the first case, then an arbitrary case , and the case that comes straight after it, : how does the square for turn into the square for ?   Check your understanding: the next layer    "
},
{
  "id": "ex-induction-odd-squares",
  "level": "2",
  "url": "sec-induction-picture.html#ex-induction-odd-squares",
  "type": "Example",
  "number": "6.1.1",
  "title": "Odd numbers and squares.",
  "body": " Odd numbers and squares   Prove that for every positive integer .    First look at the statement visually The idea of this visual proof is from J. R. Brown (1997), Proofs and pictures, The British Journal for the Philosophy of Science 48(2), 161-180. , starting from 1 and adding the next term of the sum one at a time. Draw each number as that many dots.   With 1 on the left-hand side: , a single dot.  With on the left-hand side: . Adding 3 dots to the single dot gives a square of side 2.  With : . Adding 5 more dots gives a square of side 3.  With : . Adding 7 more dots gives a square of side 4.   , after this example, shows the four squares.   "
},
{
  "id": "fig-induction-dot-squares",
  "level": "2",
  "url": "sec-induction-picture.html#fig-induction-dot-squares",
  "type": "Figure",
  "number": "6.1.2",
  "title": "",
  "body": " Each square is the one before with an L-shaped layer of dots added. The newest layer is shown in black.   Four squares of dots with sides 1, 2, 3 and 4. Each square is the one before with an L-shaped layer of 3, 5 and then 7 dots added along the top and the right-hand side.    "
},
{
  "id": "ex-ch07-p01-dots-in-next-layer",
  "level": "2",
  "url": "sec-induction-picture.html#ex-ch07-p01-dots-in-next-layer",
  "type": "Checkpoint",
  "number": "6.1.3",
  "title": "Check your understanding: the next layer.",
  "body": " Check your understanding: the next layer   "
},
{
  "id": "sec-induction-four-steps",
  "level": "1",
  "url": "sec-induction-four-steps.html",
  "type": "Section",
  "number": "6.2",
  "title": "The four steps of a proof by induction",
  "body": " The four steps of a proof by induction  To prove the statement for every positive integer , two facts are enough.   The statement holds for .  For every positive integer : if the statement holds for , then it holds for .   Together these give the statement for every . The first fact gives . The second, with , takes us from 1 to 2; with , from 2 to 3; and so on, with no gaps. This is the row of dominoes: the first fact pushes over the first domino, and the second says that each falling domino knocks over the next.  It helps to have a name for the statement for . We write . So is the statement with , the statement with , and the statement with every replaced by . The second fact says that implies for every positive integer . Here is arbitrary, not random: the argument must work whichever positive integer is.  The proof below needs the statement for particular values of : for the base case, and for , which the induction step must prove. Practise both first.   Check your understanding: writing and     Odd numbers and squares: a proof by induction   Prove by induction that for every positive integer .    Step 1: base case. Check that the statement holds for . When the left-hand side is and the right-hand side is . So the statement holds for .  Step 2: induction hypothesis. Assume that the statement holds for , for some positive integer . That is, assume that  Step 3: induction step. Prove that if the statement holds for , then it holds for . We aim to show that Start from the left-hand side. Its first terms are the left-hand side of the induction hypothesis, so we can replace them by its right-hand side, : Now simplify: Finally, factorise: So if the statement holds for , it holds for . This completes the induction step.   The new layer has dots.   A shaded k by k square of dots labelled k squared, with a row of k dots along its top, a column of k dots down its right-hand side, and one corner dot where the row and column meet.     The figure shows the same step as a picture: the by square, with dots, becomes the by square when the next odd number of dots, , is added.  Step 4: summarise and conclude. The statement holds for , and whenever it holds for it holds for . So, by the principle of mathematical induction, it holds for every positive integer .    Notice how the four steps fit together. Steps 1 and 3 are separate pieces of work: Step 1 is one calculation, and Step 3 is an argument about an arbitrary that never uses . Step 4 joins them.   Check your understanding: where is each line used?     Check your understanding: why may we assume ?    "
},
{
  "id": "ex-ch07-p02-write-p-m-and-p-k1",
  "level": "2",
  "url": "sec-induction-four-steps.html#ex-ch07-p02-write-p-m-and-p-k1",
  "type": "Checkpoint",
  "number": "6.2.1",
  "title": "Check your understanding: writing <span class=\"process-math\">\\(P(m)\\)<\/span> and <span class=\"process-math\">\\(P(k+1)\\)<\/span>.",
  "body": " Check your understanding: writing and   "
},
{
  "id": "ex-induction-odd-squares-proof",
  "level": "2",
  "url": "sec-induction-four-steps.html#ex-induction-odd-squares-proof",
  "type": "Example",
  "number": "6.2.2",
  "title": "Odd numbers and squares: a proof by induction.",
  "body": " Odd numbers and squares: a proof by induction   Prove by induction that for every positive integer .    Step 1: base case. Check that the statement holds for . When the left-hand side is and the right-hand side is . So the statement holds for .  Step 2: induction hypothesis. Assume that the statement holds for , for some positive integer . That is, assume that  Step 3: induction step. Prove that if the statement holds for , then it holds for . We aim to show that Start from the left-hand side. Its first terms are the left-hand side of the induction hypothesis, so we can replace them by its right-hand side, : Now simplify: Finally, factorise: So if the statement holds for , it holds for . This completes the induction step.   The new layer has dots.   A shaded k by k square of dots labelled k squared, with a row of k dots along its top, a column of k dots down its right-hand side, and one corner dot where the row and column meet.     The figure shows the same step as a picture: the by square, with dots, becomes the by square when the next odd number of dots, , is added.  Step 4: summarise and conclude. The statement holds for , and whenever it holds for it holds for . So, by the principle of mathematical induction, it holds for every positive integer .   "
},
{
  "id": "ex-ch07-p02-where-is-each-line-used",
  "level": "2",
  "url": "sec-induction-four-steps.html#ex-ch07-p02-where-is-each-line-used",
  "type": "Checkpoint",
  "number": "6.2.4",
  "title": "Check your understanding: where is each line used?",
  "body": " Check your understanding: where is each line used?   "
},
{
  "id": "ex-ch07-p02-why-assume-p-k",
  "level": "2",
  "url": "sec-induction-four-steps.html#ex-ch07-p02-why-assume-p-k",
  "type": "Checkpoint",
  "number": "6.2.5",
  "title": "Check your understanding: why may we assume <span class=\"process-math\">\\(P(k)\\text{?}\\)<\/span>",
  "body": " Check your understanding: why may we assume ?   "
},
{
  "id": "sec-induction-inequality",
  "level": "1",
  "url": "sec-induction-inequality.html",
  "type": "Section",
  "number": "6.3",
  "title": "Starting from a different value",
  "body": " Starting from a different value  Not every statement starts at . The next statement is an inequality that is true only from onwards, so its base case is . The four steps are exactly the same as before.   A factorial inequality   Prove that for every integer .    Step 1: base case. The base case is the smallest value of in the statement, which need not be 1. Here it is . The left-hand side of the inequality is and the right-hand side is . Since , the statement holds for .  Step 2: induction hypothesis. Assume that the statement holds for , for some integer . That is, assume that .  Step 3: induction step. We need to show that the statement holds for , that is, . Start from the left-hand side. Write in terms of , which appears in the induction hypothesis: Both terms contain , and the induction hypothesis says , so Since , Putting the chain together, . So if the statement holds for , it holds for .  Step 4: summarise and conclude. The statement holds for , and whenever it holds for it holds for . So, by the principle of mathematical induction, for every integer .     Check your understanding: where does it start?    "
},
{
  "id": "ex-induction-factorial",
  "level": "2",
  "url": "sec-induction-inequality.html#ex-induction-factorial",
  "type": "Example",
  "number": "6.3.1",
  "title": "A factorial inequality.",
  "body": " A factorial inequality   Prove that for every integer .    Step 1: base case. The base case is the smallest value of in the statement, which need not be 1. Here it is . The left-hand side of the inequality is and the right-hand side is . Since , the statement holds for .  Step 2: induction hypothesis. Assume that the statement holds for , for some integer . That is, assume that .  Step 3: induction step. We need to show that the statement holds for , that is, . Start from the left-hand side. Write in terms of , which appears in the induction hypothesis: Both terms contain , and the induction hypothesis says , so Since , Putting the chain together, . So if the statement holds for , it holds for .  Step 4: summarise and conclude. The statement holds for , and whenever it holds for it holds for . So, by the principle of mathematical induction, for every integer .   "
},
{
  "id": "ex-ch07-p03-where-does-it-start",
  "level": "2",
  "url": "sec-induction-inequality.html#ex-ch07-p03-where-does-it-start",
  "type": "Checkpoint",
  "number": "6.3.2",
  "title": "Check your understanding: where does it start?",
  "body": " Check your understanding: where does it start?   "
},
{
  "id": "sec-induction-divisibility",
  "level": "1",
  "url": "sec-induction-divisibility.html",
  "type": "Section",
  "number": "6.4",
  "title": "Divisibility, and an induction inside an induction",
  "body": " Divisibility, and an induction inside an induction  A number is a multiple of 9 when it equals (an integer). To prove a statement about divisibility by induction, write the induction hypothesis in that form, and aim to write the case in that form too.   Divisibility by 9   Prove that, for every positive integer , is divisible by 9.    Step 1: base case. When , . So the statement holds for .  Step 2: induction hypothesis. Assume that the statement holds for , for some positive integer . That is, is a multiple of 9:  Step 3: induction step. We need to show that for some integer . Start from the left-hand side. Break up and , because appears in the induction hypothesis: Expanding and grouping the terms of the hypothesis together, Now use the induction hypothesis, : It remains to show that is a multiple of 9. That needs a proof by induction of its own.  Lemma. For every positive integer , is a multiple of 9.  Proof of the lemma, by induction on . Base case: when , . Induction hypothesis: assume that for some positive integer and some integer . Induction step: we need to be a multiple of 9. Break up , because appears in the hypothesis: Now write 15 as a difference, . These are not any two numbers: rebuilds , the expression in the hypothesis, and is a multiple of 9: By the induction hypothesis, and is an integer. So the statement of the lemma holds for . It holds for , and whenever it holds for it holds for , so by the principle of mathematical induction is a multiple of 9 for every positive integer .  Back to the main proof. By the lemma with , for some integer . So and is an integer. So if the statement holds for , it holds for .  Step 4: summarise and conclude.  is divisible by 9, and whenever is divisible by 9 so is . So, by the principle of mathematical induction, is divisible by 9 for every positive integer .     Check your understanding: the structure of the proof     Check your understanding: the same method, a new statement    "
},
{
  "id": "ex-induction-divisibility",
  "level": "2",
  "url": "sec-induction-divisibility.html#ex-induction-divisibility",
  "type": "Example",
  "number": "6.4.1",
  "title": "Divisibility by 9.",
  "body": " Divisibility by 9   Prove that, for every positive integer , is divisible by 9.    Step 1: base case. When , . So the statement holds for .  Step 2: induction hypothesis. Assume that the statement holds for , for some positive integer . That is, is a multiple of 9:  Step 3: induction step. We need to show that for some integer . Start from the left-hand side. Break up and , because appears in the induction hypothesis: Expanding and grouping the terms of the hypothesis together, Now use the induction hypothesis, : It remains to show that is a multiple of 9. That needs a proof by induction of its own.  Lemma. For every positive integer , is a multiple of 9.  Proof of the lemma, by induction on . Base case: when , . Induction hypothesis: assume that for some positive integer and some integer . Induction step: we need to be a multiple of 9. Break up , because appears in the hypothesis: Now write 15 as a difference, . These are not any two numbers: rebuilds , the expression in the hypothesis, and is a multiple of 9: By the induction hypothesis, and is an integer. So the statement of the lemma holds for . It holds for , and whenever it holds for it holds for , so by the principle of mathematical induction is a multiple of 9 for every positive integer .  Back to the main proof. By the lemma with , for some integer . So and is an integer. So if the statement holds for , it holds for .  Step 4: summarise and conclude.  is divisible by 9, and whenever is divisible by 9 so is . So, by the principle of mathematical induction, is divisible by 9 for every positive integer .   "
},
{
  "id": "ex-ch07-p04-structure-of-divisibility-proof",
  "level": "2",
  "url": "sec-induction-divisibility.html#ex-ch07-p04-structure-of-divisibility-proof",
  "type": "Checkpoint",
  "number": "6.4.2",
  "title": "Check your understanding: the structure of the proof.",
  "body": " Check your understanding: the structure of the proof   "
},
{
  "id": "ex-ch07-p04-transfer-the-method",
  "level": "2",
  "url": "sec-induction-divisibility.html#ex-ch07-p04-transfer-the-method",
  "type": "Checkpoint",
  "number": "6.4.3",
  "title": "Check your understanding: the same method, a new statement.",
  "body": " Check your understanding: the same method, a new statement   "
},
{
  "id": "sec-induction-together",
  "level": "1",
  "url": "sec-induction-together.html",
  "type": "Section",
  "number": "6.5",
  "title": "Putting a proof together",
  "body": " Putting a proof together  Every proof in this chapter has the same shape. Here it is as a checklist.   Writing a proof by induction   Say what is, and for which it is claimed.  Base case: check for the smallest in the claim.  Induction hypothesis: assume for an arbitrary in the range.  Induction step: prove , and say where you use .  Conclude, naming the principle of mathematical induction.   Two errors to avoid. Do not assume the statement for every : that assumes what you are trying to prove. And do not conclude from a few checked cases: checking cases is evidence, not proof.    Check your understanding: assemble a proof    "
},
{
  "id": "ex-ch07-p05-parsons-two-to-the-n",
  "level": "2",
  "url": "sec-induction-together.html#ex-ch07-p05-parsons-two-to-the-n",
  "type": "Checkpoint",
  "number": "6.5.1",
  "title": "Check your understanding: assemble a proof.",
  "body": " Check your understanding: assemble a proof   "
},
{
  "id": "sec-induction-exercises",
  "level": "1",
  "url": "sec-induction-exercises.html",
  "type": "Exercises",
  "number": "6.6",
  "title": "Exercises",
  "body": " Exercises   Try each proof on paper first, following the checklist in . After four of the exercises there is a question that checks the key step of that proof.     Prove that for every integer .    Write down the statement for first. In the induction step, replace using the induction hypothesis, then take out the common factor rather than expanding everything.     Check the induction step      Prove that for every integer .    Start from and use the induction hypothesis. You will also need : why is that true?      Prove that for every integer .    by the induction hypothesis. It remains to show that when .     Check the cases and the step      Prove that is divisible by 6 for every integer .    Expand and find inside it. Is what is left over a multiple of 6?     Check the algebra of the step      Let and be different integers. Prove that is divisible by for every positive integer .    Write . What is the something, and why is it a multiple of ?     Check the add-and-subtract step    "
},
{
  "id": "ex-induction-sum-cubes",
  "level": "2",
  "url": "sec-induction-exercises.html#ex-induction-sum-cubes",
  "type": "Exercise",
  "number": "6.6.1",
  "title": "",
  "body": "  Prove that for every integer .    Write down the statement for first. In the induction step, replace using the induction hypothesis, then take out the common factor rather than expanding everything.   "
},
{
  "id": "ex-ch07-p06-ex1-faded-step",
  "level": "2",
  "url": "sec-induction-exercises.html#ex-ch07-p06-ex1-faded-step",
  "type": "Exercise",
  "number": "6.6.2",
  "title": "Check the induction step.",
  "body": " Check the induction step   "
},
{
  "id": "ex-induction-factorial-power",
  "level": "2",
  "url": "sec-induction-exercises.html#ex-induction-factorial-power",
  "type": "Exercise",
  "number": "6.6.3",
  "title": "",
  "body": "  Prove that for every integer .    Start from and use the induction hypothesis. You will also need : why is that true?   "
},
{
  "id": "ex-induction-two-power-square",
  "level": "2",
  "url": "sec-induction-exercises.html#ex-induction-two-power-square",
  "type": "Exercise",
  "number": "6.6.4",
  "title": "",
  "body": "  Prove that for every integer .    by the induction hypothesis. It remains to show that when .   "
},
{
  "id": "ex-ch07-p06-ex3-cases-and-step",
  "level": "2",
  "url": "sec-induction-exercises.html#ex-ch07-p06-ex3-cases-and-step",
  "type": "Exercise",
  "number": "6.6.5",
  "title": "Check the cases and the step.",
  "body": " Check the cases and the step   "
},
{
  "id": "ex-induction-divisible-six",
  "level": "2",
  "url": "sec-induction-exercises.html#ex-induction-divisible-six",
  "type": "Exercise",
  "number": "6.6.6",
  "title": "",
  "body": "  Prove that is divisible by 6 for every integer .    Expand and find inside it. Is what is left over a multiple of 6?   "
},
{
  "id": "ex-ch07-p06-ex4-difference",
  "level": "2",
  "url": "sec-induction-exercises.html#ex-ch07-p06-ex4-difference",
  "type": "Exercise",
  "number": "6.6.7",
  "title": "Check the algebra of the step.",
  "body": " Check the algebra of the step   "
},
{
  "id": "ex-induction-difference-powers",
  "level": "2",
  "url": "sec-induction-exercises.html#ex-induction-difference-powers",
  "type": "Exercise",
  "number": "6.6.8",
  "title": "",
  "body": "  Let and be different integers. Prove that is divisible by for every positive integer .    Write . What is the something, and why is it a multiple of ?   "
},
{
  "id": "ex-ch07-p06-ex5-factor-step",
  "level": "2",
  "url": "sec-induction-exercises.html#ex-ch07-p06-ex5-factor-step",
  "type": "Exercise",
  "number": "6.6.9",
  "title": "Check the add-and-subtract step.",
  "body": " Check the add-and-subtract step   "
},
{
  "id": "sec-contradiction-root-two",
  "level": "1",
  "url": "sec-contradiction-root-two.html",
  "type": "Section",
  "number": "7.1",
  "title": "The square root of 2 is irrational",
  "body": " The square root of 2 is irrational  In a proof by contradiction we assume that the statement we want to prove is false, and reason from this assumption until we reach something that cannot be true: for example, a statement and its opposite both holding. Correct reasoning from a true assumption never leads to something false. So if we reach a contradiction, the assumption must be false, and the statement we wanted to prove is true.   Proof by contradiction   Assume that the statement is false. Write down exactly what this assumption says.  Reason from the assumption, one correct step at a time.  Reach a contradiction: something that cannot be true, or that contradicts something already established, often the assumption itself.  Conclude that the assumption is false, so the statement is true.    A famous example is the proof that is irrational. First we need the words.    A real number is rational if it can be written as , where and are integers and . Otherwise it is irrational . A fraction is in its simplest form if and have no common factor greater than 1. Every rational number can be written as a fraction in its simplest form: divide and by their highest common factor.     The square root of 2   Prove that is irrational.    Assume, for contradiction, that is rational. Then for some integers and with , and we may choose the fraction in its simplest form. Squaring, So is even, and therefore is even too (we prove this fact in ). As is even, for some integer , and so . From and we get , which gives . In other words, is even, and therefore is even too.  But if and are both even, then is not in its simplest form, which contradicts our choice of and . So the assumption was false, and is irrational.    The first check is about the choice of in its simplest form. The second asks what goes wrong when the same proof is tried on , which is rational. Type whole numbers in the answer boxes.   Check your understanding: why the simplest form?     Check your understanding: the same proof for the square root of 4    "
},
{
  "id": "def-contradiction-rational",
  "level": "2",
  "url": "sec-contradiction-root-two.html#def-contradiction-rational",
  "type": "Definition",
  "number": "7.1.1",
  "title": "",
  "body": "  A real number is rational if it can be written as , where and are integers and . Otherwise it is irrational . A fraction is in its simplest form if and have no common factor greater than 1. Every rational number can be written as a fraction in its simplest form: divide and by their highest common factor.   "
},
{
  "id": "example-contradiction-root-two",
  "level": "2",
  "url": "sec-contradiction-root-two.html#example-contradiction-root-two",
  "type": "Example",
  "number": "7.1.2",
  "title": "The square root of 2.",
  "body": " The square root of 2   Prove that is irrational.    Assume, for contradiction, that is rational. Then for some integers and with , and we may choose the fraction in its simplest form. Squaring, So is even, and therefore is even too (we prove this fact in ). As is even, for some integer , and so . From and we get , which gives . In other words, is even, and therefore is even too.  But if and are both even, then is not in its simplest form, which contradicts our choice of and . So the assumption was false, and is irrational.   "
},
{
  "id": "ex-ch08-p01-simplest-form",
  "level": "2",
  "url": "sec-contradiction-root-two.html#ex-ch08-p01-simplest-form",
  "type": "Checkpoint",
  "number": "7.1.3",
  "title": "Check your understanding: why the simplest form?",
  "body": " Check your understanding: why the simplest form?   "
},
{
  "id": "ex-ch08-p01-root-four",
  "level": "2",
  "url": "sec-contradiction-root-two.html#ex-ch08-p01-root-four",
  "type": "Checkpoint",
  "number": "7.1.4",
  "title": "Check your understanding: the same proof for the square root of 4.",
  "body": " Check your understanding: the same proof for the square root of 4   "
},
{
  "id": "sec-contradiction-primes",
  "level": "1",
  "url": "sec-contradiction-primes.html",
  "type": "Section",
  "number": "7.2",
  "title": "There are infinitely many primes",
  "body": " There are infinitely many primes  Our second example is Euclid's proof that there are infinitely many prime numbers, often called one of the most elegant proofs in mathematics. Some argue that it is not strictly a proof by contradiction, because it also gives a recipe for making new primes; many would call it one of the first known proofs by contradiction.  Recall that a prime is an integer greater than 1 whose only positive divisors are 1 and itself. The proof uses one fact about primes: every integer greater than 1 is either prime or divisible by a prime.   Infinitely many primes   Prove that there are infinitely many prime numbers.    Assume, for contradiction, that there are only finitely many primes. List them all in increasing order, , , , , , , so that is the largest prime. Now consider the number one more than the product of all the primes. Dividing by any of leaves remainder 1, so none of them divides . But is greater than 1, so is either prime or divisible by a prime. Either way, some prime divides , and it is not in our list, so it is larger than . This contradicts the assumption that is the largest prime. So the assumption is false, and there are infinitely many primes.    The first check follows the proof in a particular case; you may use a calculator. The second asks you to adapt Euclid's idea to primes of a special form.   Check your understanding: Euclid's number     Check your understanding: primes of the form    "
},
{
  "id": "example-contradiction-primes",
  "level": "2",
  "url": "sec-contradiction-primes.html#example-contradiction-primes",
  "type": "Example",
  "number": "7.2.1",
  "title": "Infinitely many primes.",
  "body": " Infinitely many primes   Prove that there are infinitely many prime numbers.    Assume, for contradiction, that there are only finitely many primes. List them all in increasing order, , , , , , , so that is the largest prime. Now consider the number one more than the product of all the primes. Dividing by any of leaves remainder 1, so none of them divides . But is greater than 1, so is either prime or divisible by a prime. Either way, some prime divides , and it is not in our list, so it is larger than . This contradicts the assumption that is the largest prime. So the assumption is false, and there are infinitely many primes.   "
},
{
  "id": "ex-ch08-p02-euclid-number",
  "level": "2",
  "url": "sec-contradiction-primes.html#ex-ch08-p02-euclid-number",
  "type": "Checkpoint",
  "number": "7.2.2",
  "title": "Check your understanding: Euclid’s number.",
  "body": " Check your understanding: Euclid's number   "
},
{
  "id": "ex-ch08-p02-primes-6k-plus-5",
  "level": "2",
  "url": "sec-contradiction-primes.html#ex-ch08-p02-primes-6k-plus-5",
  "type": "Checkpoint",
  "number": "7.2.3",
  "title": "Check your understanding: primes of the form <span class=\"process-math\">\\(6k + 5\\)<\/span>.",
  "body": " Check your understanding: primes of the form   "
},
{
  "id": "sec-contradiction-integers",
  "level": "1",
  "url": "sec-contradiction-integers.html",
  "type": "Section",
  "number": "7.3",
  "title": "Contradictions with whole numbers",
  "body": " Contradictions with whole numbers  The next two proofs use facts about divisibility and about even and odd numbers.   A sum of 1001   Prove that if two positive integers have sum 1001, then their product is not divisible by 1001.    Let the two positive integers be and , with . We want to prove that is not divisible by 1001.  Suppose, for contradiction, that is divisible by 1001, so that for some positive integer .  Now .  Since 7 is prime and 7 divides , 7 divides or (or both).  But is also a multiple of 7.  If 7 divides one of and , and 7 divides , then 7 divides the other one too. So 7 divides both and .  The same argument works with 11 and with 13.  So 7, 11 and 13 all divide , so divides , and is positive, so . Likewise .  Then , which contradicts . So the product is not divisible by 1001.    The proof above leaves some reasons unsaid. The next check asks you to supply them, and to see why the proof needs all three primes.   Check your understanding: the reasons behind the steps     No integer solutions   Prove that the equation has no integer solutions.    Assume, for contradiction, that the equation has an integer solution, and call it . Then . Now is either even or odd.  If is even, then is even and is odd, which is not possible.  If is odd, then is odd and is even, which is not possible either.  In both cases we have a contradiction. So the assumption is false, and the equation has no integer solutions.    Inside this proof by contradiction is a proof by exhaustion ( ): two cases, each ending in a contradiction.  "
},
{
  "id": "example-contradiction-1001",
  "level": "2",
  "url": "sec-contradiction-integers.html#example-contradiction-1001",
  "type": "Example",
  "number": "7.3.1",
  "title": "A sum of 1001.",
  "body": " A sum of 1001   Prove that if two positive integers have sum 1001, then their product is not divisible by 1001.    Let the two positive integers be and , with . We want to prove that is not divisible by 1001.  Suppose, for contradiction, that is divisible by 1001, so that for some positive integer .  Now .  Since 7 is prime and 7 divides , 7 divides or (or both).  But is also a multiple of 7.  If 7 divides one of and , and 7 divides , then 7 divides the other one too. So 7 divides both and .  The same argument works with 11 and with 13.  So 7, 11 and 13 all divide , so divides , and is positive, so . Likewise .  Then , which contradicts . So the product is not divisible by 1001.   "
},
{
  "id": "ex-ch08-p03-sum-1001-reasons",
  "level": "2",
  "url": "sec-contradiction-integers.html#ex-ch08-p03-sum-1001-reasons",
  "type": "Checkpoint",
  "number": "7.3.2",
  "title": "Check your understanding: the reasons behind the steps.",
  "body": " Check your understanding: the reasons behind the steps   "
},
{
  "id": "example-contradiction-cubic",
  "level": "2",
  "url": "sec-contradiction-integers.html#example-contradiction-cubic",
  "type": "Example",
  "number": "7.3.3",
  "title": "No integer solutions.",
  "body": " No integer solutions   Prove that the equation has no integer solutions.    Assume, for contradiction, that the equation has an integer solution, and call it . Then . Now is either even or odd.  If is even, then is even and is odd, which is not possible.  If is odd, then is odd and is even, which is not possible either.  In both cases we have a contradiction. So the assumption is false, and the equation has no integer solutions.   "
},
{
  "id": "sec-contradiction-assumption",
  "level": "1",
  "url": "sec-contradiction-assumption.html",
  "type": "Section",
  "number": "7.4",
  "title": "Setting up the assumption",
  "body": " Setting up the assumption  So far the assumption has been easy to write down: is rational , there are only finitely many primes . For a statement of the form if , then , or for every , it takes more care. The next three examples show how.   If is even, then is even   Let be an integer. Prove that if is even, then is even.    Suppose, for contradiction, that is even and is not even. Then is odd, so for some integer . Then so is odd. So is even and is not even, a contradiction. So if is even, then is even.    A statement if P, then Q fails only when P is true and Q is false. So a proof by contradiction of if P, then Q starts by assuming P and not Q, as in the example: is even and is odd.  Look closely at what the proof above uses.   Check your understanding: what does each part of the proof use?    The middle of that proof shows that if is odd, then is odd. This statement is the contrapositive of if is even, then is even . In general the contrapositive of if P, then Q is if not Q, then not P . A statement and its contrapositive are either both true or both false, so proving the contrapositive proves the statement. Do not confuse it with the converse, if Q, then P , from , which can be false when the statement is true. The proof in is a proof of the contrapositive wrapped in a contradiction; written either way, it is correct.   is never 2   Prove that if and are integers, then .    Suppose, for contradiction, that this statement is false. In other words, there exist integers and for which is false. Or again, worded differently: there exist integers and for which .  From this equation, , so is even. Since is even, is even, by . So for some integer .  Substituting into gives , so . Dividing by 2 gives , so . Since is an integer, 1 is even. This is a contradiction.  So the assumption that the statement is false is itself false, and the statement is true.     An inequality for every   Prove that for every real number with .    Suppose, for contradiction, that the statement is false. Then there is at least one with for which .  For , neither nor is negative, so . Squaring non-negative numbers keeps their order, so Since , this gives and so . But this contradicts the fact that neither nor is negative. So the statement is true.    and each rewrote the negation of the statement in a form that could be used. collects the patterns.   Writing the assumption    Statement  Assumption that starts a proof by contradiction    if P, then Q  P and not Q    for every ,  there is at least one for which is false    there is no with  there is at least one with    P or Q  not P and not Q                 Practise writing the assumption for a statement of the form for every . Type as <= and as >= .   Check your understanding: write the assumption    "
},
{
  "id": "example-contradiction-even-square",
  "level": "2",
  "url": "sec-contradiction-assumption.html#example-contradiction-even-square",
  "type": "Example",
  "number": "7.4.1",
  "title": "If <span class=\"process-math\">\\(a^2\\)<\/span> is even, then <span class=\"process-math\">\\(a\\)<\/span> is even.",
  "body": " If is even, then is even   Let be an integer. Prove that if is even, then is even.    Suppose, for contradiction, that is even and is not even. Then is odd, so for some integer . Then so is odd. So is even and is not even, a contradiction. So if is even, then is even.   "
},
{
  "id": "ex-ch08-p04-contrapositive-inside",
  "level": "2",
  "url": "sec-contradiction-assumption.html#ex-ch08-p04-contrapositive-inside",
  "type": "Checkpoint",
  "number": "7.4.2",
  "title": "Check your understanding: what does each part of the proof use?",
  "body": " Check your understanding: what does each part of the proof use?   "
},
{
  "id": "sec-contradiction-assumption-7",
  "level": "2",
  "url": "sec-contradiction-assumption.html#sec-contradiction-assumption-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "contrapositive "
},
{
  "id": "example-contradiction-a2-4b",
  "level": "2",
  "url": "sec-contradiction-assumption.html#example-contradiction-a2-4b",
  "type": "Example",
  "number": "7.4.3",
  "title": "<span class=\"process-math\">\\(a^2 - 4b\\)<\/span> is never 2.",
  "body": " is never 2   Prove that if and are integers, then .    Suppose, for contradiction, that this statement is false. In other words, there exist integers and for which is false. Or again, worded differently: there exist integers and for which .  From this equation, , so is even. Since is even, is even, by . So for some integer .  Substituting into gives , so . Dividing by 2 gives , so . Since is an integer, 1 is even. This is a contradiction.  So the assumption that the statement is false is itself false, and the statement is true.   "
},
{
  "id": "example-contradiction-sin-cos",
  "level": "2",
  "url": "sec-contradiction-assumption.html#example-contradiction-sin-cos",
  "type": "Example",
  "number": "7.4.4",
  "title": "An inequality for every <span class=\"process-math\">\\(x\\)<\/span>.",
  "body": " An inequality for every   Prove that for every real number with .    Suppose, for contradiction, that the statement is false. Then there is at least one with for which .  For , neither nor is negative, so . Squaring non-negative numbers keeps their order, so Since , this gives and so . But this contradicts the fact that neither nor is negative. So the statement is true.   "
},
{
  "id": "table-contradiction-negations",
  "level": "2",
  "url": "sec-contradiction-assumption.html#table-contradiction-negations",
  "type": "Table",
  "number": "7.4.5",
  "title": "Writing the assumption",
  "body": " Writing the assumption    Statement  Assumption that starts a proof by contradiction    if P, then Q  P and not Q    for every ,  there is at least one for which is false    there is no with  there is at least one with    P or Q  not P and not Q                "
},
{
  "id": "ex-ch08-p04-write-the-assumption",
  "level": "2",
  "url": "sec-contradiction-assumption.html#ex-ch08-p04-write-the-assumption",
  "type": "Checkpoint",
  "number": "7.4.6",
  "title": "Check your understanding: write the assumption.",
  "body": " Check your understanding: write the assumption   "
},
{
  "id": "sec-contradiction-bridges",
  "level": "1",
  "url": "sec-contradiction-bridges.html",
  "type": "Section",
  "number": "7.5",
  "title": "The bridges of Königsberg",
  "body": " The bridges of Königsberg  So far every example has been about numbers. But proof by contradiction is an idea that can be used in any part of mathematics. Here is a famous problem that Leonhard Euler solved. The town of Königsberg (now Kaliningrad) stood on both banks of a river and on the land between its branches. Seven bridges, to , joined the four areas of land, as in . People wondered whether it was possible to walk through the town crossing each of the seven bridges exactly once.   The seven bridges of Königsberg, redrawn after Euler's figure. The areas of land are , , and .   A schematic map: an island A in a river, the north bank C, the south bank B, and land D to the east between two branches of the river. Bridges a and b join A to B, c and d join A to C, e joins A to D, f joins B to D, and g joins C to D.     Euler named the four areas of land , , and , and wrote a route as the list of areas it passes through, in order. Crossing a bridge from to adds the letter after . So a route that crosses seven bridges is a list of eight letters: the starting area, and one more letter for each bridge. He then looked at simpler arrangements, such as two areas joined by several bridges ( ).   Two areas of land, and , joined by five bridges (after Euler's second figure).   A river with land A on one side and land B on the other, joined by five bridges labelled a to e.     Think about one area, . If one bridge leads to , a route that crosses it has in its list once: before the crossing or after it. If three bridges lead to , appears twice, and if five bridges lead to , three times. Euler concluded: In general, if the number of bridges is any odd number, and if it is increased by one, then the number of occurrences of A is half of the result. For more on the problem, see the Mathematical Association of America's Convergence article on Euler's solution .   The bridges of Königsberg   Prove that there is no route through Königsberg that crosses each of the seven bridges exactly once.    Assume, for contradiction, that there is such a route, and write it as a list of letters, as Euler did. It crosses seven bridges, so the list has letters.  Five bridges lead to , so must appear times. Three bridges lead to each of , and , so each of them must appear times. In total the list must have letters. But it has only 8. This is a contradiction, so no such route exists. (In particular there is no round trip of this kind.)  Euler went on to generalise the argument to any arrangement of land and bridges.    The first check asks for the idea of Euler's proof in one sentence. The second applies his counting to other towns.   Check your understanding: the idea of Euler's proof     Check your understanding: Euler's counting in another town    "
},
{
  "id": "fig-contradiction-konigsberg",
  "level": "2",
  "url": "sec-contradiction-bridges.html#fig-contradiction-konigsberg",
  "type": "Figure",
  "number": "7.5.1",
  "title": "",
  "body": " The seven bridges of Königsberg, redrawn after Euler's figure. The areas of land are , , and .   A schematic map: an island A in a river, the north bank C, the south bank B, and land D to the east between two branches of the river. Bridges a and b join A to B, c and d join A to C, e joins A to D, f joins B to D, and g joins C to D.    "
},
{
  "id": "fig-contradiction-two-banks",
  "level": "2",
  "url": "sec-contradiction-bridges.html#fig-contradiction-two-banks",
  "type": "Figure",
  "number": "7.5.2",
  "title": "",
  "body": " Two areas of land, and , joined by five bridges (after Euler's second figure).   A river with land A on one side and land B on the other, joined by five bridges labelled a to e.    "
},
{
  "id": "example-contradiction-bridges",
  "level": "2",
  "url": "sec-contradiction-bridges.html#example-contradiction-bridges",
  "type": "Example",
  "number": "7.5.3",
  "title": "The bridges of Königsberg.",
  "body": " The bridges of Königsberg   Prove that there is no route through Königsberg that crosses each of the seven bridges exactly once.    Assume, for contradiction, that there is such a route, and write it as a list of letters, as Euler did. It crosses seven bridges, so the list has letters.  Five bridges lead to , so must appear times. Three bridges lead to each of , and , so each of them must appear times. In total the list must have letters. But it has only 8. This is a contradiction, so no such route exists. (In particular there is no round trip of this kind.)  Euler went on to generalise the argument to any arrangement of land and bridges.   "
},
{
  "id": "ex-ch08-p05-bridges-summary",
  "level": "2",
  "url": "sec-contradiction-bridges.html#ex-ch08-p05-bridges-summary",
  "type": "Checkpoint",
  "number": "7.5.4",
  "title": "Check your understanding: the idea of Euler’s proof.",
  "body": " Check your understanding: the idea of Euler's proof   "
},
{
  "id": "ex-ch08-p05-bridges-count",
  "level": "2",
  "url": "sec-contradiction-bridges.html#ex-ch08-p05-bridges-count",
  "type": "Checkpoint",
  "number": "7.5.5",
  "title": "Check your understanding: Euler’s counting in another town.",
  "body": " Check your understanding: Euler's counting in another town   "
},
{
  "id": "exercises-contradiction",
  "level": "1",
  "url": "exercises-contradiction.html",
  "type": "Exercises",
  "number": "7.6",
  "title": "Exercises",
  "body": " Exercises   Prove each of the following statements by contradiction. Start each proof by writing down exactly what you assume, the negation of the statement (see ). Then reason until you reach something impossible, say what the contradiction is, and conclude. The checks after , and test parts of those proofs.     Prove that is irrational.    Follow , but cube instead of square. You will need: if is even, then is even. Why is that true?     Check: assemble the proof      Prove that the equation has no integer solutions.    Assume that there is an integer solution , and consider two cases, even and odd, as in .      Prove that there are no positive integers and such that .    Factorise . What can you say about whether and are even or odd?      Prove that for every integer , if is odd, then is odd.    The statement fails only if is odd and is even. Assume that, and write .      Prove that for every integer , if is odd, then is even.    Assume that is odd and is odd, and write .      Prove that there are no integers and for which .    Look for a common factor of 21 and 30.      Prove that the sum of a rational number and an irrational number is irrational.    Assume that is rational, is irrational and is rational. What does tell you?     Check: why one number must be rational      Prove that if and are positive real numbers, then .    Assume that for some positive and . Both sides are positive, so you may square them.     Check: the key step, and why and must be positive      Prove that there are infinitely many primes such that is not prime.    Suppose there are only finitely many, and let be the largest. Then every prime larger than has prime. Use to pick such a , and look at , and .      Let , and be positive real numbers. Prove that if , then or .    The statement fails only if and both and . What do you get by multiplying these two inequalities?    "
},
{
  "id": "exercise-contradiction-1",
  "level": "2",
  "url": "exercises-contradiction.html#exercise-contradiction-1",
  "type": "Exercise",
  "number": "7.6.1",
  "title": "",
  "body": "  Prove that is irrational.    Follow , but cube instead of square. You will need: if is even, then is even. Why is that true?   "
},
{
  "id": "ex-ch08-p06-ex1-parsons-cube-root",
  "level": "2",
  "url": "exercises-contradiction.html#ex-ch08-p06-ex1-parsons-cube-root",
  "type": "Exercise",
  "number": "7.6.2",
  "title": "Check: assemble the proof.",
  "body": " Check: assemble the proof   "
},
{
  "id": "exercise-contradiction-2",
  "level": "2",
  "url": "exercises-contradiction.html#exercise-contradiction-2",
  "type": "Exercise",
  "number": "7.6.3",
  "title": "",
  "body": "  Prove that the equation has no integer solutions.    Assume that there is an integer solution , and consider two cases, even and odd, as in .   "
},
{
  "id": "exercise-contradiction-3",
  "level": "2",
  "url": "exercises-contradiction.html#exercise-contradiction-3",
  "type": "Exercise",
  "number": "7.6.4",
  "title": "",
  "body": "  Prove that there are no positive integers and such that .    Factorise . What can you say about whether and are even or odd?   "
},
{
  "id": "exercise-contradiction-4",
  "level": "2",
  "url": "exercises-contradiction.html#exercise-contradiction-4",
  "type": "Exercise",
  "number": "7.6.5",
  "title": "",
  "body": "  Prove that for every integer , if is odd, then is odd.    The statement fails only if is odd and is even. Assume that, and write .   "
},
{
  "id": "exercise-contradiction-5",
  "level": "2",
  "url": "exercises-contradiction.html#exercise-contradiction-5",
  "type": "Exercise",
  "number": "7.6.6",
  "title": "",
  "body": "  Prove that for every integer , if is odd, then is even.    Assume that is odd and is odd, and write .   "
},
{
  "id": "exercise-contradiction-6",
  "level": "2",
  "url": "exercises-contradiction.html#exercise-contradiction-6",
  "type": "Exercise",
  "number": "7.6.7",
  "title": "",
  "body": "  Prove that there are no integers and for which .    Look for a common factor of 21 and 30.   "
},
{
  "id": "exercise-contradiction-7",
  "level": "2",
  "url": "exercises-contradiction.html#exercise-contradiction-7",
  "type": "Exercise",
  "number": "7.6.8",
  "title": "",
  "body": "  Prove that the sum of a rational number and an irrational number is irrational.    Assume that is rational, is irrational and is rational. What does tell you?   "
},
{
  "id": "ex-ch08-p06-ex7-rational-plus-irrational",
  "level": "2",
  "url": "exercises-contradiction.html#ex-ch08-p06-ex7-rational-plus-irrational",
  "type": "Exercise",
  "number": "7.6.9",
  "title": "Check: why one number must be rational.",
  "body": " Check: why one number must be rational   "
},
{
  "id": "exercise-contradiction-8",
  "level": "2",
  "url": "exercises-contradiction.html#exercise-contradiction-8",
  "type": "Exercise",
  "number": "7.6.10",
  "title": "",
  "body": "  Prove that if and are positive real numbers, then .    Assume that for some positive and . Both sides are positive, so you may square them.   "
},
{
  "id": "ex-ch08-p06-ex8-squaring-step",
  "level": "2",
  "url": "exercises-contradiction.html#ex-ch08-p06-ex8-squaring-step",
  "type": "Exercise",
  "number": "7.6.11",
  "title": "Check: the key step, and why <span class=\"process-math\">\\(a\\)<\/span> and <span class=\"process-math\">\\(b\\)<\/span> must be positive.",
  "body": " Check: the key step, and why and must be positive   "
},
{
  "id": "exercise-contradiction-9",
  "level": "2",
  "url": "exercises-contradiction.html#exercise-contradiction-9",
  "type": "Exercise",
  "number": "7.6.12",
  "title": "",
  "body": "  Prove that there are infinitely many primes such that is not prime.    Suppose there are only finitely many, and let be the largest. Then every prime larger than has prime. Use to pick such a , and look at , and .   "
},
{
  "id": "exercise-contradiction-10",
  "level": "2",
  "url": "exercises-contradiction.html#exercise-contradiction-10",
  "type": "Exercise",
  "number": "7.6.13",
  "title": "",
  "body": "  Let , and be positive real numbers. Prove that if , then or .    The statement fails only if and both and . What do you get by multiplying these two inequalities?   "
},
{
  "id": "sec-choosing-if-then",
  "level": "1",
  "url": "sec-choosing-if-then.html",
  "type": "Section",
  "number": "8.1",
  "title": "Statements of the form “if A, then B”",
  "body": " Statements of the form if A, then B  Choosing a method takes practice. Sometimes the statement itself gives you a hint; at other times you need to try more than one method before you find one that works. Mathematicians do the same: when it is not obvious how to prove something, they try a few approaches and keep the one that works best. Before any of that, it pays to ask whether the statement is true at all. Try some values first. If the statement fails for one of them, a counterexample disproves it ( ), and there is nothing to prove.  A very useful first question is: is the statement of the form if A, then B ? Then the proof is usually a direct proof or a proof by contradiction. In a direct proof you start from A and, using definitions and facts you already know, show step by step that B follows. In a proof by contradiction you assume that A is true and that B is false, and show that this leads to something impossible, a contradiction. So B cannot be false when A is true.  Here are two statements to prove. We try a direct proof of each.   The sum of two odd integers   Prove that if and are odd integers, then is an even integer.    First translate the words into symbols. and are odd integers means that and , where and are integers. We use two different letters, and : and need not be the same odd number, so the proof must not use the same symbol for different things.  Next, translate the goal. is an even integer means that for some integer . So the proof has this structure: Now fill in the steps.  Add the two equations: . Collect like terms: . Every term has a factor of 2: . Call the bracket : , where . Since and are integers, so is .  So if and are odd integers, then is an even integer.    The same statement can be proved by contradiction. Suppose that and are odd and that is odd. Writing and as before, , which is even. So is both odd and even, a contradiction. Look at where the assumption is odd is used: only at the very end. The calculation in the middle is the direct proof. When a direct proof is available, wrapping it in a contradiction adds nothing.  There is a third way to prove if A, then B , which you met inside a proof by contradiction in : prove its contrapositive , if not B, then not A . A statement and its contrapositive are either both true or both false, so proving one proves the other. It helps when not B gives you more to work with than A does. Be careful not to prove a different statement by mistake: the converse if B, then A ( ) and the statement if not A, then not B are not equivalent to if A, then B .  Each kind of proof starts in its own way. The check below gives a statement and five possible opening lines.   Check your understanding: how does each proof start?     An odd cube plus one   Prove that if is an odd integer, then is an even integer.    Does the statement seem reasonable? Try a few odd values of first: gives , gives 28 and gives 126, all even. So it looks true, and we look for a proof.  Start from what is given: is odd, so for some integer . Then (using ). This looks messy, but look at it term by term. The first term is even: . The second term, , is odd. The third term, , is even. The last term, 1, is odd. Two odd numbers add up to an even number, and adding even numbers keeps it even, so is even.  In one line: , and is an integer.    Testing values comes before proving, but only some values test a statement. Type whole numbers in the first answer box.   Check your understanding: testing a statement    Two slips are common when testing and starting a proof of if A, then B . First, a value that does not satisfy A tells you nothing: for the statement in , gives , which is odd, but 2 is not odd, so the statement makes no claim about it. A counterexample must make A true and B false. Second, do not start a direct proof by writing down what you want to prove, such as for some integer : that assumes the conclusion. Start from A.  "
},
{
  "id": "sec-choosing-if-then-3",
  "level": "2",
  "url": "sec-choosing-if-then.html#sec-choosing-if-then-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direct proof proof by contradiction "
},
{
  "id": "example-choosing-odd-sum",
  "level": "2",
  "url": "sec-choosing-if-then.html#example-choosing-odd-sum",
  "type": "Example",
  "number": "8.1.1",
  "title": "The sum of two odd integers.",
  "body": " The sum of two odd integers   Prove that if and are odd integers, then is an even integer.    First translate the words into symbols. and are odd integers means that and , where and are integers. We use two different letters, and : and need not be the same odd number, so the proof must not use the same symbol for different things.  Next, translate the goal. is an even integer means that for some integer . So the proof has this structure: Now fill in the steps.  Add the two equations: . Collect like terms: . Every term has a factor of 2: . Call the bracket : , where . Since and are integers, so is .  So if and are odd integers, then is an even integer.   "
},
{
  "id": "sec-choosing-if-then-7",
  "level": "2",
  "url": "sec-choosing-if-then.html#sec-choosing-if-then-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "contrapositive "
},
{
  "id": "ex-ch09-p01-openings-and-frameworks",
  "level": "2",
  "url": "sec-choosing-if-then.html#ex-ch09-p01-openings-and-frameworks",
  "type": "Checkpoint",
  "number": "8.1.2",
  "title": "Check your understanding: how does each proof start?",
  "body": " Check your understanding: how does each proof start?   "
},
{
  "id": "example-choosing-odd-cube",
  "level": "2",
  "url": "sec-choosing-if-then.html#example-choosing-odd-cube",
  "type": "Example",
  "number": "8.1.3",
  "title": "An odd cube plus one.",
  "body": " An odd cube plus one   Prove that if is an odd integer, then is an even integer.    Does the statement seem reasonable? Try a few odd values of first: gives , gives 28 and gives 126, all even. So it looks true, and we look for a proof.  Start from what is given: is odd, so for some integer . Then (using ). This looks messy, but look at it term by term. The first term is even: . The second term, , is odd. The third term, , is even. The last term, 1, is odd. Two odd numbers add up to an even number, and adding even numbers keeps it even, so is even.  In one line: , and is an integer.   "
},
{
  "id": "ex-ch09-p01-test-before-proving",
  "level": "2",
  "url": "sec-choosing-if-then.html#ex-ch09-p01-test-before-proving",
  "type": "Checkpoint",
  "number": "8.1.4",
  "title": "Check your understanding: testing a statement.",
  "body": " Check your understanding: testing a statement   "
},
{
  "id": "sec-choosing-clues",
  "level": "1",
  "url": "sec-choosing-clues.html",
  "type": "Section",
  "number": "8.2",
  "title": "Clues in the statement",
  "body": " Clues in the statement  Not every statement has the form if A, then B . Other clues point to other methods. A statement about a set number of cases can be proved by checking each one, by exhaustion. A statement about every positive integer , where each case can be built from the one before, suggests induction. The box below collects the questions to ask.   Questions to ask about a statement   Is it true? Try some values that satisfy its conditions. If one of them fails, it is a counterexample, and the statement is false ( ).  Is it about a finite number of cases? Then you can check each case: a proof by exhaustion ( ). Some statements about infinitely many numbers split into finitely many cases, such as even and odd.  Is it about every positive integer (or every integer from some value on), where the case can be built from the case , as in a sum of terms or a sequence defined term by term? Try induction ( ).  Is it of the form if A, then B ? Start from A and work towards B: a direct proof ( ). If A gives you little to work with, prove the contrapositive or argue by contradiction.  Does it say that something is impossible or not so ( irrational , there is no , cannot )? Assume the opposite and look for a contradiction ( ).   These are clues, not rules.   The table shows the clues at work on five statements.   Five statements and the methods they suggest      Statement  What to notice, and a method to try    The difference between two consecutive square numbers is always odd.  It has the form if A, then B : if we have two consecutive square numbers (A), then their difference is odd (B). A direct proof.    The difference between two consecutive square numbers between 9 and 81 is odd.  The square numbers between 9 and 81 are 16, 25, 36, 49 and 64, so there are only four differences to check. A proof by exhaustion.    The sum of the first square numbers is .  It must hold for every positive integer , and the sum for is the sum for plus one more term. A proof by induction.    If the square of a number is positive, then the number is positive.  Test it first: is positive, but is not. The statement is false, so no proof exists. A disproof by counterexample.    is irrational.  Irrational means not rational : the statement says that is impossible. A proof by contradiction.     Clues are not rules. The first two rows show that more than one method can work: the direct proof for the first row also proves the second. Several methods often work, and then the best choice is usually the simplest. The fourth row is a warning: a statement can look ready for a proof and still be false.  Now try the questions on some new statements.   Check your understanding: which method?    "
},
{
  "id": "table-choosing-clues",
  "level": "2",
  "url": "sec-choosing-clues.html#table-choosing-clues",
  "type": "Table",
  "number": "8.2.1",
  "title": "Five statements and the methods they suggest",
  "body": " Five statements and the methods they suggest      Statement  What to notice, and a method to try    The difference between two consecutive square numbers is always odd.  It has the form if A, then B : if we have two consecutive square numbers (A), then their difference is odd (B). A direct proof.    The difference between two consecutive square numbers between 9 and 81 is odd.  The square numbers between 9 and 81 are 16, 25, 36, 49 and 64, so there are only four differences to check. A proof by exhaustion.    The sum of the first square numbers is .  It must hold for every positive integer , and the sum for is the sum for plus one more term. A proof by induction.    If the square of a number is positive, then the number is positive.  Test it first: is positive, but is not. The statement is false, so no proof exists. A disproof by counterexample.    is irrational.  Irrational means not rational : the statement says that is impossible. A proof by contradiction.    "
},
{
  "id": "ex-ch09-p02-which-method",
  "level": "2",
  "url": "sec-choosing-clues.html#ex-ch09-p02-which-method",
  "type": "Checkpoint",
  "number": "8.2.2",
  "title": "Check your understanding: which method?",
  "body": " Check your understanding: which method?   "
},
{
  "id": "sec-choosing-quest",
  "level": "1",
  "url": "sec-choosing-quest.html",
  "type": "Section",
  "number": "8.3",
  "title": "A quest for prime number formulas",
  "body": " A quest for prime number formulas  Let us explore one statement and its proof more fully. Finding a proof can be a real quest, with wrong turns on the way. This one ends with a proof by contradiction. Many quadratic formulas produce long strings of prime numbers, and is a famous example. Recall that a prime number is a whole number greater than 1 whose only positive divisors are 1 and itself.   First conjecture   is prime for every positive integer .    Test the conjecture for to 10.   The first ten values of    1 2 3 4 5    41 43 47 53 61    6 7 8 9 10    71 83 97 113 131     These are all prime numbers (you can check by hand, or with a calculator or computer). In fact the conjecture holds for every up to and including 40. But when , , and when , . Neither is prime, so the conjecture is false: one counterexample is enough. And there are more values of for which is divisible by 41. Find some of them. Type whole numbers in the first box, and a set such as {3, 7} in the second.   Check your understanding: more values divisible by 41     Second conjecture   No quadratic expression , where , and are integers and , is prime for every integer .    In other words: whatever quadratic you choose, at least one integer makes it not prime.  Look at a few quadratic expressions, for example , and . It is quick to find values of for which they are not prime: for the first, gives 35; for the second, gives 8; for the third, gives 50. The more quadratics you try, the more convinced you become. But trying examples is not enough, however many you try: you might miss the one example that is a counterexample. This is the exciting phase of problem solving, when you try out ideas in search of either a convincing proof or a counterexample. Let us try to prove the conjecture.   A first attempt  The general quadratic is . Putting gives , which is not prime, because it is divisible by both and . Therefore no quadratic expression in can be prime for every integer .  However, this proof does not work. Which cases spoil it? Think of the definition of a prime number.   Start with an example: find a quadratic for which the attempt goes wrong. In the answer box, type * for multiplication or leave a space, for example 2*n^2 + 3*n + 5 .   Check your understanding: what spoils the first attempt?    A prime number is divisible by 1 and by . So divisible by and by does not stop from being prime when one of these factors is 1 or . For example, has , and is prime. The attempt fails, and we need a different idea.   No quadratic is always prime   Prove the second conjecture: if , and are integers with , then is not prime for at least one integer .    Suppose, for contradiction, that is prime for every integer . In particular is prime. Call it .  Now take : (the last step uses ). So is a multiple of . In the same way, is a multiple of .  So is a multiple of when , and . These are three different integers, because . By our assumption each of the three values is prime, and a prime that is a multiple of the prime must be itself. So : the graph of would meet the horizontal line at three points. That is impossible for a quadratic: the equation , that is with , has at most two solutions ( ).  This contradiction shows that the assumption is false: is not prime for at least one of , and .     A horizontal line meets the graph of a quadratic at most twice.   A U-shaped parabola and a dashed horizontal line labelled y = p, which crosses the parabola at exactly two points.     The proof says in the same way and moves on. The first check asks you to do that step, and why the proof needs three values of ; the second asks for a summary of the whole proof. In the first box you can type a product of letters with or without * : 4ap and 4*a*p both work.   Check your understanding: the step done in the same way     Check your understanding: the idea of the proof    "
},
{
  "id": "sec-choosing-quest-2",
  "level": "2",
  "url": "sec-choosing-quest.html#sec-choosing-quest-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prime number "
},
{
  "id": "conjecture-choosing-first",
  "level": "2",
  "url": "sec-choosing-quest.html#conjecture-choosing-first",
  "type": "Conjecture",
  "number": "8.3.1",
  "title": "First conjecture.",
  "body": " First conjecture   is prime for every positive integer .   "
},
{
  "id": "table-choosing-first-conjecture",
  "level": "2",
  "url": "sec-choosing-quest.html#table-choosing-first-conjecture",
  "type": "Table",
  "number": "8.3.2",
  "title": "The first ten values of <span class=\"process-math\">\\(n^2 - n + 41\\)<\/span>",
  "body": " The first ten values of    1 2 3 4 5    41 43 47 53 61    6 7 8 9 10    71 83 97 113 131    "
},
{
  "id": "ex-ch09-p03-more-failures",
  "level": "2",
  "url": "sec-choosing-quest.html#ex-ch09-p03-more-failures",
  "type": "Checkpoint",
  "number": "8.3.3",
  "title": "Check your understanding: more values divisible by 41.",
  "body": " Check your understanding: more values divisible by 41   "
},
{
  "id": "conjecture-choosing-second",
  "level": "2",
  "url": "sec-choosing-quest.html#conjecture-choosing-second",
  "type": "Conjecture",
  "number": "8.3.4",
  "title": "Second conjecture.",
  "body": " Second conjecture   No quadratic expression , where , and are integers and , is prime for every integer .   "
},
{
  "id": "ex-ch09-p03-spoil-the-first-proof",
  "level": "2",
  "url": "sec-choosing-quest.html#ex-ch09-p03-spoil-the-first-proof",
  "type": "Checkpoint",
  "number": "8.3.5",
  "title": "Check your understanding: what spoils the first attempt?",
  "body": " Check your understanding: what spoils the first attempt?   "
},
{
  "id": "example-choosing-no-prime-quadratic",
  "level": "2",
  "url": "sec-choosing-quest.html#example-choosing-no-prime-quadratic",
  "type": "Example",
  "number": "8.3.6",
  "title": "No quadratic is always prime.",
  "body": " No quadratic is always prime   Prove the second conjecture: if , and are integers with , then is not prime for at least one integer .    Suppose, for contradiction, that is prime for every integer . In particular is prime. Call it .  Now take : (the last step uses ). So is a multiple of . In the same way, is a multiple of .  So is a multiple of when , and . These are three different integers, because . By our assumption each of the three values is prime, and a prime that is a multiple of the prime must be itself. So : the graph of would meet the horizontal line at three points. That is impossible for a quadratic: the equation , that is with , has at most two solutions ( ).  This contradiction shows that the assumption is false: is not prime for at least one of , and .   "
},
{
  "id": "fig-choosing-parabola",
  "level": "2",
  "url": "sec-choosing-quest.html#fig-choosing-parabola",
  "type": "Figure",
  "number": "8.3.7",
  "title": "",
  "body": " A horizontal line meets the graph of a quadratic at most twice.   A U-shaped parabola and a dashed horizontal line labelled y = p, which crosses the parabola at exactly two points.    "
},
{
  "id": "ex-ch09-p03-the-similar-step",
  "level": "2",
  "url": "sec-choosing-quest.html#ex-ch09-p03-the-similar-step",
  "type": "Checkpoint",
  "number": "8.3.8",
  "title": "Check your understanding: the step done “in the same way”.",
  "body": " Check your understanding: the step done in the same way   "
},
{
  "id": "ex-ch09-p03-best-summary",
  "level": "2",
  "url": "sec-choosing-quest.html#ex-ch09-p03-best-summary",
  "type": "Checkpoint",
  "number": "8.3.9",
  "title": "Check your understanding: the idea of the proof.",
  "body": " Check your understanding: the idea of the proof   "
},
{
  "id": "sec-choosing-combining",
  "level": "1",
  "url": "sec-choosing-combining.html",
  "type": "Section",
  "number": "8.4",
  "title": "Combining techniques",
  "body": " Combining techniques  A proof can combine methods. In the next example the overall approach is direct, but inside the direct proof there is a separate proof by contradiction.   A product of two irrational numbers   Prove that every nonzero rational number can be written as a product of two irrational numbers.    First reword the statement in the form if , then : if is a nonzero rational number, then is the product of two irrational numbers.  Suppose that is a nonzero rational number. Then for some integers and with . We can write as a product of two numbers:   We know that is irrational ( ). So to complete the proof we need to show that is irrational too. For this we use a proof by contradiction.  Suppose that is rational. Then for some integers and with , and so . But , so Since and are integers, this says that is rational, which is a contradiction. So is irrational.  So is a product of two irrational numbers.    The proof has two parts, one inside the other. The check below asks how they fit together, and why the statement says nonzero . Type line numbers in the first and third boxes.   Check your understanding: a proof inside a proof    The proof divides by , which is allowed because : is nonzero, so is nonzero too. That is where the word nonzero is needed, and it is needed: 0 is not a product of two irrational numbers, because if then or , and 0 is rational.  Now use the same method for sums. Any order of the blocks in which each step comes after the steps it relies on is accepted.   Check your understanding: the same method for sums    Choosing a method is a skill that grows with practice. Ask the questions in the box , try the method they suggest, and be ready to try another, as in the quest for prime formulas. The next chapter ( ) turns the question round: given a proof, is it correct?  "
},
{
  "id": "example-choosing-product-irrationals",
  "level": "2",
  "url": "sec-choosing-combining.html#example-choosing-product-irrationals",
  "type": "Example",
  "number": "8.4.1",
  "title": "A product of two irrational numbers.",
  "body": " A product of two irrational numbers   Prove that every nonzero rational number can be written as a product of two irrational numbers.    First reword the statement in the form if , then : if is a nonzero rational number, then is the product of two irrational numbers.  Suppose that is a nonzero rational number. Then for some integers and with . We can write as a product of two numbers:   We know that is irrational ( ). So to complete the proof we need to show that is irrational too. For this we use a proof by contradiction.  Suppose that is rational. Then for some integers and with , and so . But , so Since and are integers, this says that is rational, which is a contradiction. So is irrational.  So is a product of two irrational numbers.   "
},
{
  "id": "ex-ch09-p04-structure-of-the-proof",
  "level": "2",
  "url": "sec-choosing-combining.html#ex-ch09-p04-structure-of-the-proof",
  "type": "Checkpoint",
  "number": "8.4.2",
  "title": "Check your understanding: a proof inside a proof.",
  "body": " Check your understanding: a proof inside a proof   "
},
{
  "id": "ex-ch09-p04-parsons-sum-of-irrationals",
  "level": "2",
  "url": "sec-choosing-combining.html#ex-ch09-p04-parsons-sum-of-irrationals",
  "type": "Checkpoint",
  "number": "8.4.3",
  "title": "Check your understanding: the same method for sums.",
  "body": " Check your understanding: the same method for sums   "
},
{
  "id": "sec-correct-divide-by-zero",
  "level": "1",
  "url": "sec-correct-divide-by-zero.html",
  "type": "Section",
  "number": "9.1",
  "title": "A proof that <span class=\"process-math\">\\(2 = 1\\)<\/span>",
  "body": " A proof that  Here is a famous example. Read it line by line, and decide where it goes wrong before you open the solution.   A proof that   Find the error in this proof that .  Suppose that .  Then .            Lines 2, 3 and 4 each follow from the line before: line 2 multiplies both sides of line 1 by , line 3 subtracts from both sides, and line 4 factorises each side. The trouble is the step to line 5, which divides both sides of line 4 by . Since , , and we cannot divide by zero: , but . In general, from we may conclude only when . So line 5 does not follow from line 4, and the proof is invalid.  An argument like this, whose steps look correct but which reaches a false conclusion, is called a fallacy .    One way to find where a proof goes wrong is to follow it with actual numbers. A correct step never leads from true lines to a false one. So if you choose values that make the first lines true, the first line that is false for those values cannot follow from the lines before it. The first check uses this idea on the proof above, with two choices of values. The second gives you a new argument with a similar flaw.   Check your understanding: follow the proof with numbers     Check your understanding: a lost solution    "
},
{
  "id": "example-correct-two-equals-one",
  "level": "2",
  "url": "sec-correct-divide-by-zero.html#example-correct-two-equals-one",
  "type": "Example",
  "number": "9.1.1",
  "title": "A proof that <span class=\"process-math\">\\(2 = 1\\)<\/span>.",
  "body": " A proof that   Find the error in this proof that .  Suppose that .  Then .            Lines 2, 3 and 4 each follow from the line before: line 2 multiplies both sides of line 1 by , line 3 subtracts from both sides, and line 4 factorises each side. The trouble is the step to line 5, which divides both sides of line 4 by . Since , , and we cannot divide by zero: , but . In general, from we may conclude only when . So line 5 does not follow from line 4, and the proof is invalid.  An argument like this, whose steps look correct but which reaches a false conclusion, is called a fallacy .   "
},
{
  "id": "ex-ch10-p01-follow-with-numbers",
  "level": "2",
  "url": "sec-correct-divide-by-zero.html#ex-ch10-p01-follow-with-numbers",
  "type": "Checkpoint",
  "number": "9.1.2",
  "title": "Check your understanding: follow the proof with numbers.",
  "body": " Check your understanding: follow the proof with numbers   "
},
{
  "id": "ex-ch10-p01-lost-solution",
  "level": "2",
  "url": "sec-correct-divide-by-zero.html#ex-ch10-p01-lost-solution",
  "type": "Checkpoint",
  "number": "9.1.3",
  "title": "Check your understanding: a lost solution.",
  "body": " Check your understanding: a lost solution   "
},
{
  "id": "sec-correct-root-nine",
  "level": "1",
  "url": "sec-correct-root-nine.html",
  "type": "Section",
  "number": "9.2",
  "title": "A proof that <span class=\"process-math\">\\(\\sqrt{9}\\)<\/span> is irrational",
  "body": " A proof that is irrational  It can be much harder to see why a proof is invalid. Here is a proof by contradiction (see ) of something we know to be false: is rational.   A proof that is irrational   Find the error in this proof that is irrational.  Assume that , where and are integers with , and and are coprime (they have no common factor other than 1).  Then ,  so .  Therefore is a multiple of 9,  so is a multiple of 9, and we can write for some integer .  Then ,  so .  Therefore is a multiple of 9,  so is a multiple of 9.  So and are both multiples of 9, and they cannot be coprime.  This is a contradiction, so is irrational.      Lines 1 to 4 are fine. Line 1 sets up the assumption: every rational number can be written as a fraction whose numerator and denominator have no common factor greater than 1. Lines 2 and 3 square and rearrange, and line 4 reads off that is a multiple of 9.  Line 5 does not follow. It concludes that is a multiple of 9 because is, and that reasoning is incorrect: the claim if is a multiple of 9, then is a multiple of 9 is false, as you can check by trying some values of . So the contradiction in line 10 is never established. In fact no correct argument could reach a contradiction here, because is rational.    When you are trying to unpick algebraic reasoning, try some values. If a step relies on a general claim, look for a counterexample to the claim (see ): one counterexample shows that the step does not follow.   Check your understanding: what went wrong?     Check your understanding: test the claim    "
},
{
  "id": "example-correct-root-nine",
  "level": "2",
  "url": "sec-correct-root-nine.html#example-correct-root-nine",
  "type": "Example",
  "number": "9.2.1",
  "title": "A proof that <span class=\"process-math\">\\(\\sqrt{9}\\)<\/span> is irrational.",
  "body": " A proof that is irrational   Find the error in this proof that is irrational.  Assume that , where and are integers with , and and are coprime (they have no common factor other than 1).  Then ,  so .  Therefore is a multiple of 9,  so is a multiple of 9, and we can write for some integer .  Then ,  so .  Therefore is a multiple of 9,  so is a multiple of 9.  So and are both multiples of 9, and they cannot be coprime.  This is a contradiction, so is irrational.      Lines 1 to 4 are fine. Line 1 sets up the assumption: every rational number can be written as a fraction whose numerator and denominator have no common factor greater than 1. Lines 2 and 3 square and rearrange, and line 4 reads off that is a multiple of 9.  Line 5 does not follow. It concludes that is a multiple of 9 because is, and that reasoning is incorrect: the claim if is a multiple of 9, then is a multiple of 9 is false, as you can check by trying some values of . So the contradiction in line 10 is never established. In fact no correct argument could reach a contradiction here, because is rational.   "
},
{
  "id": "ex-ch10-p02-best-summary",
  "level": "2",
  "url": "sec-correct-root-nine.html#ex-ch10-p02-best-summary",
  "type": "Checkpoint",
  "number": "9.2.2",
  "title": "Check your understanding: what went wrong?",
  "body": " Check your understanding: what went wrong?   "
},
{
  "id": "ex-ch10-p02-counterexamples-to-the-claim",
  "level": "2",
  "url": "sec-correct-root-nine.html#ex-ch10-p02-counterexamples-to-the-claim",
  "type": "Checkpoint",
  "number": "9.2.3",
  "title": "Check your understanding: test the claim.",
  "body": " Check your understanding: test the claim   "
},
{
  "id": "sec-correct-flaws",
  "level": "1",
  "url": "sec-correct-flaws.html",
  "type": "Section",
  "number": "9.3",
  "title": "Common flaws",
  "body": " Common flaws  The two proofs above fail in the same way: one step does not follow from the lines before it. A proof can also fail when every line is correct, because the lines prove something other than the statement. It helps to have names for the commonest flaws.   Common flaws in proofs  A step that does not follow:  divides by zero : divides both sides by something that is 0, or might be 0, as in the proof that ;  makes an algebra slip : a mistake in expanding, simplifying or taking square roots, such as writing as ;  uses a false claim : relies on a general statement that is not true, such as if is a multiple of 9, then is a multiple of 9 .    Lines that do not prove the statement:  assumes what it should prove : uses the whole statement being proved as a step, for example by starting from it and simplifying ( );  proves the converse : proves if , then when the statement is if , then , by starting from the conclusion and reaching the hypothesis ( );  covers only some cases : checks examples, or writes the objects with letters in a way that fits only some of them ( , ).    A true conclusion does not make an argument a proof: a flawed argument can reach a true statement.   In the check below, some of the arguments are proofs and some are not.   Check your understanding: name the flaw    "
},
{
  "id": "ex-ch10-p03-name-the-flaw",
  "level": "2",
  "url": "sec-correct-flaws.html#ex-ch10-p03-name-the-flaw",
  "type": "Checkpoint",
  "number": "9.3.1",
  "title": "Check your understanding: name the flaw.",
  "body": " Check your understanding: name the flaw   "
},
{
  "id": "exercises-correct",
  "level": "1",
  "url": "exercises-correct.html",
  "type": "Exercises",
  "number": "9.4",
  "title": "Exercises",
  "body": " Exercises   Can you find what is wrong with each of these proofs? Read each one line by line first. The checks after each exercise ask where the error is, and, after , how to repair the proof.     The following statement is true, but the proof by induction below is wrong. Find the error, and write a correct proof.  Statement: for every odd positive integer , is divisible by 8.  Step 1: base case. When , , and 8 is divisible by 8. So the statement holds for .  Step 2: induction hypothesis. Assume that the statement holds for . This means that is a multiple of 8, so , where is a positive integer.  Step 3: induction step. We need to show that the statement holds for , that is, that , where is a positive integer. Starting from the left-hand side, which is not a multiple of 8.    Check the algebra line by line. If every line is correct, ask whether the proof sets out to show the right thing: which numbers is the statement about?     Check: find the error in the induction     Check: repair the induction step      What is wrong with the following argument?      Line 4 holds for every , so substitute :        Sketch the graphs of and for . Are they the same graph?     Check: find the error in the trigonometry    "
},
{
  "id": "exercise-correct-induction",
  "level": "2",
  "url": "exercises-correct.html#exercise-correct-induction",
  "type": "Exercise",
  "number": "9.4.1",
  "title": "",
  "body": "  The following statement is true, but the proof by induction below is wrong. Find the error, and write a correct proof.  Statement: for every odd positive integer , is divisible by 8.  Step 1: base case. When , , and 8 is divisible by 8. So the statement holds for .  Step 2: induction hypothesis. Assume that the statement holds for . This means that is a multiple of 8, so , where is a positive integer.  Step 3: induction step. We need to show that the statement holds for , that is, that , where is a positive integer. Starting from the left-hand side, which is not a multiple of 8.    Check the algebra line by line. If every line is correct, ask whether the proof sets out to show the right thing: which numbers is the statement about?   "
},
{
  "id": "ex-ch10-p04-ex1-find-the-error",
  "level": "2",
  "url": "exercises-correct.html#ex-ch10-p04-ex1-find-the-error",
  "type": "Exercise",
  "number": "9.4.2",
  "title": "Check: find the error in the induction.",
  "body": " Check: find the error in the induction   "
},
{
  "id": "ex-ch10-p04-ex1-repair-the-step",
  "level": "2",
  "url": "exercises-correct.html#ex-ch10-p04-ex1-repair-the-step",
  "type": "Exercise",
  "number": "9.4.3",
  "title": "Check: repair the induction step.",
  "body": " Check: repair the induction step   "
},
{
  "id": "exercise-correct-zero-equals-two",
  "level": "2",
  "url": "exercises-correct.html#exercise-correct-zero-equals-two",
  "type": "Exercise",
  "number": "9.4.4",
  "title": "",
  "body": "  What is wrong with the following argument?      Line 4 holds for every , so substitute :        Sketch the graphs of and for . Are they the same graph?   "
},
{
  "id": "ex-ch10-p04-ex2-find-the-error",
  "level": "2",
  "url": "exercises-correct.html#ex-ch10-p04-ex2-find-the-error",
  "type": "Exercise",
  "number": "9.4.5",
  "title": "Check: find the error in the trigonometry.",
  "body": " Check: find the error in the trigonometry   "
},
{
  "id": "ch-conclusion",
  "level": "1",
  "url": "ch-conclusion.html",
  "type": "Chapter",
  "number": "10",
  "title": "Conclusion",
  "body": " Conclusion  This book has given an overview of a challenging topic: what a proof is, how one is structured, and several methods of proof. Knowing which method a statement needs is not always easy. That comes with practice and with time spent in mathematics, and as it comes you will also come to appreciate how elegant a good proof can be.  Proofs are the building blocks of mathematics. A claim that has not been proved is, however plausible, a conjecture.  "
},
{
  "id": "colophon",
  "level": "1",
  "url": "colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " Interactive edition by Ben Davies, 2026.  Adapted from Bokhove, C., Thoma, A., Gammack, D., Yu, L. H. S., Roberts, S. and Downey, F., Thinking about Proof , 1st edition, University of Southampton, 2022, doi:10.5258\/SOTON\/P1082 , used under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International licence (CC BY-NC-SA 4.0).  Changes from the booklet: the text has been edited and reorganised as an online book, and computer-marked questions (written in STACK) have been added. The teacher edition also adds teaching notes and model proofs.  This interactive edition is licensed under the same licence, CC BY-NC-SA 4.0 . You may share and adapt it for non-commercial purposes, provided you credit the original authors and this edition, indicate any changes, and release your version under the same licence.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
