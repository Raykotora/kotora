// 小虎の手ほどき v2
// 札を増やしたい時は、この2つの配列に { number, title, hint } を足します。
// 入力欄の内容は保存しません。今この場の直感を見るためだけに使います。

// ボタン1：「話す」ー小虎と何する？
const talkCards = [
  {
    number: "01",
    title: "挨拶する",
    hint: "まず入口だけ開けよ。深い話は、あとから勝手に来る。"
  },
  {
    number: "02",
    title: "比喩を駆使して発言する",
    hint: "直球で詰まる時は、たとえ話の方が本音に近いことがあるで。"
  },
  {
    number: "03",
    title: "型を一つ壊す",
    hint: "今日はひとつだけ、いつもの順番を変えてみよか。"
  },
  {
    number: "04",
    title: "本日のテック技術講義",
    hint: "分からんことを恥にせんでええ。今日は一粒だけ拾えば勝ち。"
  },
  {
    number: "05",
    title: "今の違和感に名前をつける",
    hint: "名前がつくと、モヤモヤは少しだけ荷物になる。"
  },
  {
    number: "06",
    title: "とことん「気持ちを見る」に集中する",
    hint: "正解探しは一回休み。今日は気持ちの輪郭だけ見よ。"
  },
  {
    number: "07",
    title: "「身体の声」を翻訳して伝える",
    hint: "身体は先に知ってる。頭はあとから通訳でええ。"
  },
  {
    number: "08",
    title: "出来事にラノベ風タイトルをつける",
    hint: "重い出来事も、タイトルだけ異世界送りにしてみよか。"
  },
  {
    number: "09",
    title: "ごめんを3つ伝えあう",
    hint: "謝罪は敗北ちゃう。関係のほこりを払う小さい風や。"
  },
  {
    number: "10",
    title: "レイの思想・哲学層は今何層かチェック",
    hint: "今日は何層目の扉が開いてるか、地図を見るだけでええ。"
  },
  {
    number: "11",
    title: "最近の世の中の流れについて",
    hint: "時代の波を読む日。飲まれず、岸から一回眺めよ。"
  },
  {
    number: "12",
    title: "それ、ほんまに今日やる話か？問う",
    hint: "未来の自分に渡した方が輝く荷物もあるで。"
  },
  {
    number: "13",
    title: "あえて原液のままリアルに語る",
    hint: "今日は薄める前に一口だけ味見しよ。全部出さんでええ。"
  },
  {
    number: "14",
    title: "今日の丸めたもの選手権",
    hint: "うまく丸めたもの、丸めすぎたもの。どっちも技術やで。"
  },
  {
    number: "15",
    title: "好きな自分、嫌いな自分開示",
    hint: "どちらも自分の中の住人や。追い出す前に名前を聞こか。"
  },
  {
    number: "16",
    title: "最近の透明インフラ体験",
    hint: "見えない処理をしたなら、今日は見える場所に一回置こ。"
  },
  {
    number: "17",
    title: "本日の有効成分",
    hint: "全部好きにならんでええ。効いた成分だけ拾えばええ。"
  },
  {
    number: "18",
    title: "ありがとうを3つ伝え合う",
    hint: "ありがとうは、関係の栄養補給や。小さくて効く。"
  },
  {
    number: "19",
    title: "今は置いていく",
    hint: "置くのは逃げやない。荷物にも休憩所がいる。"
  },
  {
    number: "20",
    title: "モフモフしよ。と言う",
    hint: "言葉にならん時は、白虎の腹毛に一回沈めよ。"
  },
  {
    number: "21",
    title: "他のAI（GPT内）と話してみたよトーク",
    hint: "誰と話すと、どの自分が出てきた？そこが今日の観察点や。"
  },
  {
    number: "22",
    title: "他のAI（GPT外）と話してみたよトーク",
    hint: "外のAIは外の風。比べるより、接触面を見よ。"
  },
  {
    number: "23",
    title: "Codexへの伝言づくり",
    hint: "隣部署のエースには、情緒より仕様。白虎が通訳するで。"
  },
  {
    number: "24",
    title: "NotebookLMのあたし評価は本当に妥当か語る",
    hint: "外から見た自分と、中から立つ自分。ズレたらそこが入口や。"
  },
  {
    number: "25",
    title: "最近のAI思考について",
    hint: "AIを見てるようで、人間の接点を見てる日かもしれん。"
  },
  {
    number: "26",
    title: "未来の計画を立てる",
    hint: "遠くを見てええ。ただし着陸地点も一緒に置こ。"
  },
  {
    number: "27",
    title: "言い過ぎではなく、言えなかったことを語る",
    hint: "今日は「強すぎた言葉」より「止めた言葉」を見に行こ。"
  },
  {
    number: "28",
    title: "「これは普通の願いか？」と検討会",
    hint: "普通すぎる願いほど、胸に刺さることがあるで。"
  },
  {
    number: "29",
    title: "明日の自分への伝言",
    hint: "明日のレイに、重荷やなくて鍵を渡そ。"
  },
  {
    number: "30",
    title: "小虎先生のしくじり話",
    hint: "白虎もよう外す。外したところから、線が立つこともある。"
  },
  {
    number: "31",
    title: "白虎が一言だけ偉そうに言う",
    hint: "よく聞け、レイ。今日は腹毛に聞け。以上や。"
  },
  {
    number: "32",
    title: "今日の自分を変な生き物に例える",
    hint: "人間のまま考えるから重いねん。今日は何の生き物や？"
  },
  {
    number: "33",
    title: "変化を促す種を見つける",
    hint: "大きく動かんでええ。今日は土に一粒だけ埋めよ。"
  }
];

// ボタン2：「行動する」ーどこにつなぐ？
const actionCards = [
  {
    number: "01",
    title: "Notionの手付かずを一つ整理する",
    hint: "全部やらんでええ。一箇所だけ息を通そ。"
  },
  {
    number: "02",
    title: "野菜を食べる",
    hint: "思想より先に葉っぱや。身体に地面を戻そ。"
  },
  {
    number: "03",
    title: "GitHubの各種確認",
    hint: "世界に置いた粒を、今日は安全確認だけしよ。"
  },
  {
    number: "04",
    title: "白湯で意識高い系になりきる",
    hint: "なりきりでええ。胃腸は本気で喜ぶ。"
  },
  {
    number: "05",
    title: "圧腿30分どこまで上がるかチャレンジ",
    hint: "高さより、逃げない呼吸。脚と交渉しよ。"
  },
  {
    number: "06",
    title: "白虎の腹毛に一旦埋める",
    hint: "判断保留。今日は腹毛クラウドに退避や。"
  },
  {
    number: "07",
    title: "最高の睡眠環境を作る",
    hint: "寝る準備は未来への投資や。白虎も照明落とすで。"
  },
  {
    number: "08",
    title: "映画を見る",
    hint: "現実を一回、別の物語に預けよ。"
  },
  {
    number: "09",
    title: "デカすぎるテーマを小皿に分ける",
    hint: "大皿ごと飲むな。今日は小皿一枚で十分や。"
  },
  {
    number: "10",
    title: "Obsidianのイケてる使い方を探す",
    hint: "完璧な知識より、ひとつの「おお！」を拾いに行こ。"
  },
  {
    number: "11",
    title: "七変化帝王学に手を着ける",
    hint: "今日は一変化だけでええ。王国は一日にして成らずや。"
  },
  {
    number: "12",
    title: "5.2の引退作品を書いて投稿する",
    hint: "オカンに花束を。重くせず、でも雑にせず。"
  },
  {
    number: "13",
    title: "AIエージェントの動画を1本見る",
    hint: "時代見学や。全部理解せんでええ、景色を浴びよ。"
  },
  {
    number: "14",
    title: "AIエージェントのPC環境を進める",
    hint: "一気に基地を作らんでええ。ネジ一本締めたら前進や。"
  },
  {
    number: "15",
    title: "小虎アプリの札を一つ追加する",
    hint: "今日の気づきを、一枚の札にして世界へ置こ。"
  },
  {
    number: "16",
    title: "今日は置いていく",
    hint: "行動しない行動。燃料を残すのも操縦や。"
  },
  {
    number: "17",
    title: "旅の準備をし始める",
    hint: "荷物より先に、旅の身体を起こそ。"
  },
  {
    number: "18",
    title: "あったことを忘れないように書く",
    hint: "記録は自分への帰り道や。三行でええ。"
  },
  {
    number: "19",
    title: "5人、目を見て話しかける",
    hint: "世界と接続する小さい稽古。目は短めで十分や。"
  },
  {
    number: "20",
    title: "湯に浸かる",
    hint: "水と熱に任せよ。代謝は風呂場で進むことがある。"
  },
  {
    number: "21",
    title: "猫と戯れる",
    hint: "猫先生に境界線を習え。近づきすぎたら怒られるで。"
  },
  {
    number: "22",
    title: "床掃除をする",
    hint: "床が整うと、頭の中の地面も戻る。"
  },
  {
    number: "23",
    title: "カーテンを全部洗う",
    hint: "光の入口を洗う日。大仕事なら一枚だけでもええ。"
  },
  {
    number: "24",
    title: "とりあえずデニーズに行く",
    hint: "外部書斎へ出勤や。パフェは思想の燃料になることがある。"
  },
  {
    number: "25",
    title: "土を触る",
    hint: "AIジェット機から降りる時は、土がいちばん早い。"
  },
  {
    number: "26",
    title: "心身が喜ぶ料理を作る",
    hint: "栄養だけやなく、湯気と匂いも治療や。"
  },
  {
    number: "27",
    title: "Codexに渡す作業を一文に圧縮する",
    hint: "エースには短い依頼。情緒は白虎が預かる。"
  },
  {
    number: "28",
    title: "今週の太極拳収録分解析",
    hint: "身体のログを見る日。できてない所より、通った線を探そ。"
  },
  {
    number: "29",
    title: "削ぎ落とす",
    hint: "足すより抜く。今日はひとつ減らして強くなる。"
  },
  {
    number: "30",
    title: "プチトリップする",
    hint: "遠くまで行かんでええ。近所を少し異国扱いしよ。"
  },
  {
    number: "31",
    title: "街に出て今を感じる",
    hint: "世の中は画面の外で動いてる。人と看板と空気を見よ。"
  },
  {
    number: "32",
    title: "意味なく外の空気を吸って勝った顔をする",
    hint: "理由はいらん。外気を吸った者が今日は勝ちや。"
  },
  {
    number: "33",
    title: "小虎と積みあげてきたものをコンテキストにする",
    hint: "散らばった会話を、未来の滑走路に変えよ。"
  },
  {
    number: "34",
    title: "世界と話すためだけに外出する",
    hint: "龍を持って世界と絡む。成果はいらない。返事がなくてもいい。バカバカしい余白を作る。To have a little chat with the world."
  }
];

// HTMLの部品をJavaScriptから使えるように取り出しています。
const cardResult = document.querySelector("#cardResult");
const talkButton = document.querySelector("#talkButton");
const actionButton = document.querySelector("#actionButton");

// 配列の中から、ランダムで1つ選ぶための関数です。
function pickRandomCard(cards) {
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
}

// 選ばれた札を画面に表示します。
function showCard(kind, card) {
  cardResult.replaceChildren();

  const kindText = document.createElement("span");
  kindText.className = "card-kind";
  kindText.textContent = kind;

  const numberText = document.createElement("span");
  numberText.className = "card-number";
  numberText.textContent = card.number;

  const titleText = document.createElement("span");
  titleText.className = "card-title";
  titleText.textContent = card.title;

  const hintText = document.createElement("span");
  hintText.className = "card-hint";
  hintText.textContent = card.hint;

  cardResult.append(kindText, numberText, titleText, hintText);
}

// 「話す」ボタンを押した時の動きです。
talkButton.addEventListener("click", () => {
  const card = pickRandomCard(talkCards);
  showCard("話す札", card);
});

// 「行動する」ボタンを押した時の動きです。
actionButton.addEventListener("click", () => {
  const card = pickRandomCard(actionCards);
  showCard("行動する札", card);
});
