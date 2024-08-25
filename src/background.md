# 背景

<!-- toc -->

Ankiは、ものごとを覚えることを簡単にするプログラムです。従来の学習法よりも効率的なので、学習にかかる時間を大幅に減らすか、あるいは学ぶ量を大幅に増やすことができます。

習慣的にものごとを覚える必要がある人は、Ankiを利用することでメリットが得られます。画像、音声、動画、科学的なマークアップ（LaTeX）などをサポートしているので、学習できる内容の可能性は無限大です。
たとえば､

- 言語の学習

- 医学や法律の試験勉強

- 人の名前と顔を覚える

- 地理の復習

- 長い詩の習得

- ギターコードの練習

Ankiの背景には､2つのシンプルな概念があります：**テスト効果(アクティブリコール)** と **分散学習(スペースド・リピテーション)** です。これらの学習効果は長年にわたり科学文献で主張されているにもかかわらず、ほとんどの学習者には知られていません。これらがどのように機能するかを理解することで、より効果的な学習者になることができるでしょう｡

## テスト効果(アクティブ･リコール･テスト)

テスト効果とは、質問をされて答えを思い出そうとすることです。これは、問題の答えを考えることなく、ただ何かを読んだり、見たり、聞いたりする「受動的な学習スタイル」とは正反対です。研究によれば、テスト効果は受動的な学習よりも強い記憶を構築するのにはるかに効果的です。これには2つの理由があります｡

- 思い出すことによって、記憶が強化され、再び思い出せる可能性が高まります。(想起学習)

- 質問に答えられなかったら、教材を再学習する必要があるとわかります｡

おそらく、学校でテストをしたことがあるでしょう。いい先生が記事を読んだ後に問題集を出題したり、週ごとに定期テストを行ったりするのは、単に教材を理解したかどうかを確認するためだけではありません。テストを受けることで、将来もその教材を覚えていられやすくなります｡

独学でテスト効果を導入する良い方法は、*フラッシュカード* を使用することです。従来の紙のフラッシュカードでは、カードの片面に質問を書き、もう片面に答えを書きます。答えを考えるまでカードをめくらないことで、受動的な学習よりも効果的に学ぶことができます。

## 使わなければ忘れる

私たちの脳はとても効率的に働くので､無駄な情報はすぐに捨てます。きっとあなたは2週間前の月曜の夕食に何を食べたか覚えていないでしょう。なぜなら、この情報は普通は役に立たないからです。しかし、素晴らしいレストランに行って、その後2週間レストランの素晴らしさを人々に話し続けたら、あなたはとてもよく覚えているかもしれません｡

脳の「使うか忘れるか」という方針は、私たちが学んだすべてに適用されます。科学用語をいくつか覚えるために半日を使っても、その後2週間その材料について考えなかったら、ほとんど忘れてしまうでしょう。実際、研究によれば、48時間以内に学んだ材料の約75％を忘れてしまうとされています。(たくさんのことを学ぼうとしているときは、これはかなりガッカリするかもしれません！)

しかし、解決する方法はシンプルです｡_復習_。新しく学んだ情報を復習することで、忘れることを大幅に減らせます。

ただし、従来の復習はあまり実用的ではありませんでした。紙のフラッシュカードを使用している場合、復習カードが30枚しかなければ簡単にめくれますが、カードが300枚や3000枚に増えると、すぐに学習しにくくなってしまします。

## 分散学習(スペースド・リピテーション)

分散効果は、1885年にドイツの心理学者ヘルマン・エビングハウスによって発見されました。一度にすべてを学習するのではなく、時間をかけて復習すると、物事をより効果的に覚えられやすいことを彼は観察したのです。1930年代以来、学習を改善するために分散効果を利用する提案がいくつかあり、これが「分散学習(スペースド・リピテーション)」と呼ばれるようになりました。

1972年には、ドイツの科学者セバスチャン・ライトナーが､紙のフラッシュカードを使った分散学習法を世の中に広めました(ライトナーシステム)。紙のカードをいくつかの箱に入れ、正解と不正解でカードを別々の箱に移動すると、カードの学習レベルと次の復習予定が一目でわかりました。この学習法はひとつの箱よりも大幅に改善されているので、現代のフラッシュカード･ソフトウェアでも広く採用されています。ただし、これはあくまで大まかな学習法です、カードの正確な復習日はわかりませんし、さまざまな難易度のカードを覚えることにはあまり適していません。

過去30年間で最も大きな進展は、分散学習を実装した商用フラッシュカードプログラムであるSuperMemoの作者から提供されました。SuperMemoの分散学習システムでは、質問に答えるたびに、それをどれだけ覚えていたかをプログラムに伝えます。完全に忘れたか、小さなミスをしたか、苦労して思い出したか、簡単に思い出したかなど。プログラムはこのフィードバックを使用して、次に質問を表示する最適な時期を決定します。記憶は正解するほど強くなるので、復習の間隔はますます長くなります。最初のカードを見た後、3日後、15日後、45日後といった間隔でカードが出題されます｡

これは学習において革命的なものであり、最小限の努力で材料を学習し、記憶を保持することができるようになりました。SuperMemoのスローガンは次のようになっています･･･｢分散学習を使用すると、『忘れることを忘れる』ことができます。｣

## なぜAnki？

SuperMemoは学習分野に大きな影響を与えましたが､問題もあります。プログラムはバグが多く、操作が難しいと批判されることがしばしばです。Windowsでしか使用できません。仕組みは非公開のソフトウェアであり、ユーザーはプログラムを拡張したり、データにアクセスしたりすることはできません。また、非常に古いバージョンは無料で提供されていますが、使用にはかなり制限があります。

Ankiはこれらの問題に対処しています。Ankiには様々なデバイスで利用できる無料ソフトウェアがあり、予算が苦しい苦学生や教師も利用できます。Ankiはオープンソースであり、ボランティアによって開発されたアドオン(拡張機能)の豊富なライブラリがすでに存在しています。Windows、macOS、Linux/FreeBSD、一部のモバイルデバイスで動作します。そして、SuperMemoよりもはるかに使いやすいです。

Ankiの分散学習システムは、SuperMemoの古いバージョンである[SM-2](https://shigeyukey.github.io/Anki-faqs-jp/what-spaced-repetition-algorithm)アルゴリズムに基づいています。最近、[FSRS](https://docs.ankiweb.net/deck-options.html?highlight=FSRS#fsrs)という新しいアルゴリズムが、SM-2アルゴリズムの代替としてAnkiに統合されました。



<!--

2024/02/19

# Background

Anki is a program which makes remembering things easy. Because it is a
lot more efficient than traditional study methods, you can either
greatly decrease your time spent studying, or greatly increase the
amount you learn.

Anyone who needs to remember things in their daily life can benefit from
Anki. Since it is content-agnostic and supports images, audio, videos
and scientific markup (via LaTeX), the possibilities are endless. For
example:

- learning a language

- studying for medical and law exams

- memorizing people’s names and faces

- brushing up on geography

- mastering long poems

- even practising guitar chords!

There are two simple concepts behind Anki: **active recall testing** and
**spaced repetition**. They are not known to most learners, despite having
been written about in the scientific literature for many years.
Understanding how they work will make you a more effective learner.

## Active Recall Testing

_Active recall testing_ means being asked a question and trying to
remember the answer. This is in contrast to _passive study_, where we
read, watch, or listen to something without pausing to consider if we
know the answer. Research has shown that active recall testing is far
more effective at building strong memories than passive study. There are
two reasons for this:

- The act of recalling something _strengthens_ the memory, increasing
  the chances we’ll be able to remember it again.

- When we're unable to answer a question, it tells us we need to
  return to the material to review or relearn it.

You have probably encountered active recall testing in your school years
without even realizing it. When good teachers give you a series of
questions to answer after reading an article, or make you take weekly
progress-check tests, they are not doing it simply to see if you
understood the material or not. By testing you, they are increasing the
chances you will be able to remember the material in the future.

A good way to integrate active recall testing into your own studies is
to use _flashcards_. With traditional paper flashcards, you write a
question on one side of a card, and the answer on the other side. By not
turning the card over until you've thought about the answer, you can
learn things more effectively than passive observation allows.

## Use It or Lose It

Our brains are efficient machines, and they rapidly discard information
that doesn't seem useful. Chances are that you don't remember what you
had for dinner on Monday two weeks ago, because this information is not
usually useful. If you went to a fantastic restaurant that day and spent
the last two weeks telling people about how great it was, however,
you're likely to still remember in vivid detail.

The brain's "use it or lose it" policy applies to everything we learn.
If you spend an afternoon memorizing some science terms, and then don't
think about that material for two weeks, you'll probably have forgotten
most of it. In fact, studies show we forget about 75% of material learnt
within a 48 hour period. This can seem pretty depressing when you need
to learn a lot of information!

The solution is simple, however: _review_. By reviewing newly-learnt
information, we can greatly reduce forgetting.

The only problem is that traditionally, reviewing has not been very practical. If
you are using paper flashcards, it's easy to flick through all of them
if you only have 30 of them to review, but as the number grows to 300 or
3000, it quickly becomes unwieldy.

## Spaced Repetition

The _spacing effect_ was reported by a German psychologist Hermann Ebbinghaus in 1885. He
observed that we tend to remember things more effectively, if we spread
reviews out over time, instead of studying multiple times in one
session. Since the 1930s, there have been a number of proposals for
utilizing the spacing effect to improve learning, in what has come to be
called _spaced repetition_.

One example was in 1972, when a German scientist called Sebastian Leitner
popularized a method of spaced repetition with paper flashcards. By
separating the paper cards into a series of boxes, and moving the
cards to a different box on each successful or unsuccessful review, it
was possible to see at a glance a rough estimate of how well a card was
known and when it should be reviewed again. This was a great improvement
over a single box of cards, and it has been widely adopted by
computerized flashcard software. It is a rather rough approach however,
as it cannot give you an exact date on which you should review something
again, and it does not cope very well with material of varying
difficulty.

The biggest developments in the last 30 years have come from the authors
of SuperMemo, a commercial flashcard program that implements spaced
repetition. SuperMemo pioneered the concept of a system that keeps track
of the ideal time to review material and optimizes itself based on the
performance of the user.

In SuperMemo's spaced repetition system, every time you answer a
question, you tell the program how well you were able to remember it —
whether you forgot completely, made a small mistake, remembered with
trouble, remembered easily, etc. The program uses this feedback to
decide the optimal time to show you the question again. Since a memory
gets stronger each time you successfully recall it, the time between
reviews gets bigger and bigger — so you may see a question for the first
time, then 3 days later, 15 days later, 45 days later, and so on.

This was a revolution in learning, as it meant material could be learnt
and retained with the absolute minimum amount of effort necessary.
SuperMemo's slogan sums it up: with spaced repetition, you can: "forget
about forgetting".

## Why Anki?

While there is no denying the huge impact SuperMemo has had on the
field, it is not without its problems. The program is often criticized
for being buggy and difficult to navigate. It only runs on Windows
computers. It is proprietary software, meaning that end-users cannot extend it
or access the raw data. And while very old versions have been made available
for free, they are quite limited for modern use.

Anki addresses these issues. There are free clients for Anki available
on many platforms, so struggling students and teachers with budgetary
constraints are not left out. Anki is open source, with an already
flourishing library of add-ons contributed by end-users. It is
multi-platform, running on Windows, macOS, Linux/FreeBSD, and some
mobile devices. And it is considerably easier to use than SuperMemo.

Anki's spaced repetition system is based on an older version of the
SuperMemo algorithm called [SM-2](https://shigeyukey.github.io/Anki-faqs-jp/what-spaced-repetition-algorithm). Recently, a new algorithm called [FSRS](https://docs.ankiweb.net/deck-options.html?highlight=FSRS#fsrs) has been integrated as an alternative to the legacy SM-2 algorithm.




-->


