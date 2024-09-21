# フィールド置換

<!-- toc -->

## 基本的な置換

最も基本的なテンプレートは次のようになります：

    {{Front}}

中括弧内にテキストを配置すると、Ankiはその名前のフィールドを探し、フィールドの実際の内容でテキストを置き換えます。

フィールド名は大文字と小文字を区別します。`Front`というフィールドがある場合、`{{front}}`と書いても正しく動作しません。

テンプレートはフィールドのリストに限定されません。テンプレートに任意のテキストを含めることもできます。例えば、首都を学習していて、「Country」というフィールドを持つノートタイプを作成した場合、次のような表テンプレートを作成するかもしれません：

    {{Country}}の首都はどこですか？

デフォルトの裏テンプレートは次のようになります：

    {{FrontSide}}

    <hr id=answer>

    {{Back}}

これは「表側のテキストを表示し、その後に区切り線を表示し、次に裏フィールドを表示する」という意味です。

'id=answer' の部分は、質問と回答の間の区切りがどこにあるかをAnkiに伝えます。これにより、長いカードで「回答を表示」ボタンを押したときに、Ankiが自動的に回答が始まる場所までスクロールすることができます（特に小さな画面のモバイルデバイスで便利です）。回答の最初に水平線を表示したくない場合は、段落やdivなどの別のHTML要素を使用することもできます。

## 改行

カードテンプレートはウェブページのようなもので、新しい行を作成するには特別なコマンドが必要です。例えば、テンプレートに次のように書いた場合：

    one
    two

プ復習では実際には次のように表示されます：

    one two

新しい行を追加するには、行の末尾に&lt;br&gt;コードを追加する必要があります。次のように：

    one<br>
    two

brコードは「(行) br(eak)」を意味します。

フィールドにも同じことが当てはまります。2つのフィールドを表示し、それぞれを別の行に表示したい場合は、次のようにします：

    {{Field 1}}<br>
    {{Field 2}}

## 個別フィールドのテキスト読み上げ

この機能を使用するには、Anki 2.1.20、AnkiMobile 2.0.56、または AnkiDroid 2.17 が必要です。

US 英語の音声で Front フィールドを読み上げるには、カードテンプレートに次のように記述します：

    {{tts en_US:Front}}

Windows、macOS、および iOS では、Anki は OS に組み込まれている音声を使用します。Linux では、組み込みの音声はありませんが、[このアドオン](https://ankiweb.net/shared/info/391644525)などのアドオンによって音声を提供できます。

利用可能なすべての言語/音声のリストを表示するには、カードテンプレートに次のように記述します：

    {{tts-voices:}}

選択した言語をサポートする音声が複数ある場合、希望する音声をリストで指定でき、Anki は最初に利用可能な音声を選択します。例えば：

    {{tts ja_JP voices=Apple_Otoya,Microsoft_Haruka:Field}}

これは、Apple デバイスでは Otoya を、Windows PC では Haruka を使用します。

一部の TTS 実装では、異なる速度を指定することも可能です：

    {{tts fr_FR speed=0.8:SomeField}}

速度と音声はどちらもオプションですが、言語は必須です。

Mac では、利用可能な音声をカスタマイズできます：

- システム環境設定を開きます。

- アクセシビリティをクリックします。

- スピーチをクリックします。

- システム音声のドロップダウンをクリックし、カスタマイズを選択します。

音声によっては他のものよりも良い音がするものもあるので、好みのものを選ぶために試してみてください。Siri の音声は Apple のアプリでのみ使用できることに注意してください。新しい音声をインストールした後、Anki を再起動する必要があります。

Windows では、Cortana などの一部の音声は選択できません。これは、Microsoft がこれらの音声を他のアプリケーションに提供していないためです。

クロズノートタイプでは、`cloze-only` フィルターを使用して、Anki に省略された部分のみを読み上げさせることができます。例えば：

    {{tts en_US:cloze-only:Text}}

`cloze-only` フィルターは Anki 2.1.29+、AnkiMobile 2.0.65+、および AnkiDroid 2.17+ でサポートされています。

## 複数のフィールドと静的テキストの音声読み上げ

この機能を使用するには、Anki 2.1.50+、AnkiMobile 2.0.84+、または AnkiDroid 2.17+ が必要です。

テンプレートに含まれる複数のフィールドや静的テキストを TTS に読み上げさせたい場合、次のように記述できます：

```
[anki:tts lang=en_US] このテキストは読み上げられるべきです。ここに {{Field1}} と {{Field2}} があります[/anki:tts]

これはテンプレート上の他のテキストです。タグの外にあるため、読み上げられるべきではありません。
```

## 特殊フィールド

テンプレートに含めることができる特殊フィールドがいくつかあります：

    ノートのタグ: {{Tags}}

    ノートの種類: {{Type}}

    カードのデッキ: {{Deck}}

    カードのサブデッキ: {{Subdeck}}

    カードのフラグ: {{CardFlag}}

    カードの種類（「正面」など）: {{Card}}

    表テンプレートの内容
    （裏テンプレートでのみ有効）: {{FrontSide}}

FrontSide はカードの表側にあった音声を自動的に再生しません。カードの表と裏の両方で同じ音声を自動的に再生したい場合は、裏側にも音声フィールドを手動で含める必要があります。

他のフィールドと同様に、特殊フィールド名は大文字と小文字を区別します。例えば、`{{tags}}` ではなく `{{Tags}}` を使用する必要があります。

## ヒントフィールド

カードの表または裏にフィールドを追加することができますが、それを明示的に表示するまで隠しておくことができます。これを「ヒントフィールド」と呼びます。ヒントを追加する前に、Ankiで質問に答えるのを簡単にするほど、実際にその質問に遭遇したときに覚えている可能性が低くなることを覚えておいてください。進める前に、<https://super-memory.com/articles/20rules.htm> にある「最小情報の原則」について読んでください。

まず、まだ追加していない場合は、ヒントを保存するフィールドを追加する必要があります。これを行う方法がわからない場合は、[フィールド](../editing.md#フィールドのカスタマイズ)セクションを参照してください。

MyFieldというフィールドを作成したと仮定すると、次のようにテンプレートに追加することで、Ankiにそのフィールドをカードに含めるがデフォルトでは隠すように指示できます：

    {{hint:MyField}}

これにより、「ヒントを表示」というラベルのリンクが表示されます。クリックすると、そのフィールドの内容がカードに表示されます。（MyFieldが空の場合、何も表示されません。）

質問にヒントを表示してから回答を表示すると、ヒントは再び隠されます。回答が表示されたときに常にヒントを表示したい場合は、裏テンプレートから `{{FrontSide}}` を削除し、表示したいフィールドを手動で追加する必要があります。

現在、音声に対してヒントフィールドを使用することはできません。音声はヒントリンクをクリックしたかどうかに関係なく再生されます。

外観や動作をカスタマイズしたい場合は、ヒントフィールドを自分で実装する必要があります。サポートは提供できませんが、以下のコードが開始点になるでしょう：

    {{#Back}}
    ﻿<a class=hint href="#"
    onclick="this.style.display='none';document.getElementById('hint4753594160').style.display='inline-block';return false;">
    Show Back</a><div id="hint4753594160" class=hint style="display: none">{{Back}}</div>
    {{/Back}}

## 辞書リンク

フィールド置換を使用して辞書リンクを作成することもできます。例えば、あなたが言語を学習していて、お気に入りのオンライン辞書が次のようなウェブURLを使用してテキストを検索できるとします：

    http://example.com/search?q=myword

テンプレートに次のように記述することで、自動リンクを追加できます：

    {{Expression}}

    <a href="http://example.com/search?q={{Expression}}">辞書で確認</a>

上記のテンプレートは、復習中にリンクをクリックすることで各ノートの表現を検索できるようにします。ただし、注意点があるので、次のセクションを参照してください。

## HTMLの除去

テンプレートと同様に、フィールドはHTMLで保存されます。上記の辞書リンクの例では、表現がフォーマットなしで「myword」という単語を含んでいる場合、HTMLも同じく「myword」になります。しかし、フィールドにフォーマットを含めると、追加のHTMLが含まれます。例えば、「myword」が太字の場合、実際のHTMLは「&lt;b&gt;myword&lt;/b&gt;」になります。

これは、辞書リンクのようなものに問題を引き起こす可能性があります。上記の例では、辞書リンクは次のようになります：

    <a href="http://example.com/search?q=<b>myword</b>">辞書で確認</a>

リンク内の余分な文字は辞書サイトを混乱させる可能性があり、マッチしない可能性が高くなります。

これを解決するために、Ankiはフィールドが置換されるときにフォーマットを除去する機能を提供します。フィールド名の前にtext:を付けると、Ankiはフォーマットを含めません。したがって、フォーマットされたテキストでも機能する辞書リンクは次のようになります：

    <a href="http://example.com/search?q={{text:Expression}}">辞書で確認</a>

## 右から左へのテキスト

右から左に読む言語を使用している場合、テンプレートを次のように調整する必要があります：

    <div dir=rtl>{{FieldThatHasRTLTextInIt}}</div>

## ルビ文字

一部の言語では、文字の発音を表示するためにテキストの上に注釈を付けることが一般的です。これらの注釈は[ルビ文字](https://en.wikipedia.org/wiki/Ruby_character)として知られています。日本語では、これらは[ふりがな](https://en.wikipedia.org/wiki/Furigana)として知られています。

Ankiでは、次の構文を使用してルビ文字を表示できます：

    Text[Ruby]

上記のテキストが MyField に書かれているとします。デフォルトでは、単に `{{MyField}}` を使用すると、フィールドはそのまま表示されます。ルビ文字をテキストの上に適切に配置するには、テンプレートで `furigana` フィルターを次のように使用します：

    {{furigana:MyField}}

いくつかの例を示します：

<!-- prettier-ignore -->
| 生のテキスト       | 表示されたテキスト                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------- |
| `Text[Ruby]`        | <ruby><rb>Text</rb><rt>Ruby</rt></ruby>                                                   |
| `日本語[にほんご]`  | <ruby><rb>日本語</rb><rt>にほんご</rt></ruby>                                             |
| `世[よ]の 中[なか]` | <ruby><rb>世</rb><rt>よ</rt></ruby>の<ruby><rb>中</rb><rt>なか</rt></ruby>                |
| `世[よ]の中[なか]`  | <ruby><rb>世</rb><rt>よ</rt></ruby><ruby><rb>の中</rb><rt>なか</rt></ruby> _(誤り!)_     |

3番目の例では、中文字の前にスペースがあることに注意してください。これは、ルビテキストがその文字にのみ適用されることを指定するために必要です。スペースがない場合、ルビテキストはの文字の上に誤って配置されます。4番目の例で示されているように。

### 追加のルビ文字フィルター

`furigana` フィルターに加えて、`kana` および `kanji` フィルターを使用してルビテキストの特定の部分のみを表示することもできます。`kana` フィルターはルビテキストのみを表示し、`kanji` フィルターはルビテキストを完全に削除します。

<!-- prettier-ignore -->
| 生のテキスト       | フィールドフィルター       | 表示されたテキスト                             |
| ------------------ | ---------------------- | --------------------------------------------- |
| `日本語[にほんご]` | `{{furigana:MyField}}` | <ruby><rb>日本語</rb><rt>にほんご</rt></ruby> |
| `日本語[にほんご]` | `{{kana:MyField}}`     | にほんご                                      |
| `日本語[にほんご]` | `{{kanji:MyField}}`    | 日本語                                        |

これらの名前は再び日本語から借用されています。
[kana](https://en.wikipedia.org/wiki/Kana) という用語は、単語の発音を説明するために使用される音節文字を表し、[kanji](https://en.wikipedia.org/wiki/Kanji) という用語はその漢字を表します。

## メディアと LaTeX

Anki はテンプレートをメディア参照のためにスキャンしません。なぜなら、それは遅いからです。これは、テンプレートにメディアを含めることに影響を与えます。

### 静的な音声/画像

すべてのカードで同じ画像や音声（例：各カードの上部に会社のロゴ）を含めたい場合：

1. ファイル名をアンダースコアで始まるように変更します。例："\_logo.jpg"。アンダースコアは、そのファイルがテンプレートによって使用され、デッキを共有する際にエクスポートされるべきであることを Anki に伝えます。

2. 表または裏のテンプレートにメディアへの参照を追加します。例：

### フィールド参照

フィールドへのメディア参照はサポートされていません。復習中に表示されるかもしれませんし、されないかもしれません。また、未使用メディアのチェック、インポート/エクスポートなどの際には機能しません。機能しない例：

    <img src="{{Expression}}.jpg">

    [sound:{{Word}}]

    [latex]{{Field 1}}[/latex]

代わりに、メディア参照をフィールドに含めるべきです。詳細については、[インポートセクション](../importing/text-files.md#メディアのインポート)を参照してください。

## 答えの確認

この機能についての[ビデオ](http://www.youtube.com/watch?v=5tYObQ3ocrw&yt:cc=on)をYouTubeで見ることができます。

答えを確認する最も簡単な方法は、カード追加画面の左上にある「Basic」をクリックし、「Basic (type in the answer)」を選択することです。

共有デッキをダウンロードして、そのデッキで答えを入力して確認したい場合は、そのカードテンプレートを変更できます。テンプレートが次のようになっている場合：

    {{Native Word}}

    {{FrontSide}}

    <hr id=answer>

    {{Foreign Word}}

外国語の単語を入力して正しいかどうかを確認するには、フロントテンプレートを次のように編集する必要があります：

    {{Native Word}}
    {{type:Foreign Word}}

比較したいフィールドの前に `type:` を追加したことに注意してください。FrontSide がカードの裏側にあるため、入力ボックスも裏側に表示されます。

復習時に、Ankiはテキストボックスを表示し、そこに答えを入力できます。<kbd>Enter</kbd>キーを押すか答えを表示すると、Ankiはどの部分が正解でどの部分が間違っているかを表示します。テキストボックスのフォントサイズは、そのフィールドに対して設定したサイズ（編集時に「フィールド」ボタンを介して）になります。

この機能はカードの回答方法を変更しないため、覚えていたかどうかを決定するのはあなた次第です。

カードには1つの入力比較のみを使用できます。上記のテキストを複数回追加しても機能しません。また、単一行のみをサポートするため、複数行で構成されるフィールドとの比較には適していません。

Ankiは、提供された部分と正解の部分が揃うように、答えの比較には等幅フォントを使用します。答えの比較に使用するフォントを上書きしたい場合は、スタイリングセクションの下部に次のように記述できます：

    code#typeans { font-family: "myfontname"; }

これにより、答えの比較に使用される次のHTMLに影響を与えます：

    <code id=typeans>...</code>

上級ユーザーは、CSSクラス 'typeGood'、'typeBad'、'typeMissed' を使用してデフォルトのタイプアンサーの色を上書きできます。AnkiMobileは 'typeGood' と 'typeBad' をサポートしていますが、'typeMissed' はサポートしていません。

入力ボックスのサイズを上書きしたいが、フィールドダイアログでフォントを変更したくない場合は、`!important` を使用してデフォルトのインラインスタイルを上書きできます。例えば：

    #typeans { font-size: 50px !important; }

クロズ削除カードに対しても答えを入力することが可能です。これを行うには、`{{type:cloze:Text}}` を表と裏のテンプレートの両方に追加します。裏側は次のようになります：

    {{cloze:Text}}
    {{type:cloze:Text}}
    {{Extra}}

クロズタイプはFrontSideを使用しないため、クロズノートタイプではこれを両面に追加する必要があります。

複数のセクションが省略されている場合、テキストボックス内の答えをカンマで区切ることができます。

入力ボックスはブラウザの「プレビュー」ダイアログには表示されません。カードタイプウィンドウで復習またはプレビューを見ると表示されます。

入力ボックスは [ankiweb.net](../syncing.md) でカードを復習する際には表示されません。