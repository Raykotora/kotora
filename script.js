// 「機内持ち込み」ボタンで出す選択肢と、小虎の返事です。
const welcomeReplies = [
  {
    choice: "記録する？",
    reply: "これはあとで資源になる荷物やな。短く残しとこ。"
  },
  {
    choice: "解析する？",
    reply: "これは今すぐほどくより、まず一行で置こか。"
  },
  {
    choice: "お茶を飲む？",
    reply: "これは今日は白湯に預けてええ荷物や。"
  },
  {
    choice: "モフモフする？",
    reply: "今は処理より休憩やな。腹毛で一回止まろ。"
  },
  {
    choice: "ちょっと聞いてや案件？",
    reply: "これは機内持ち込みやな。短く話そ。"
  }
];

// 「預け入れ荷物」ボタンで出す選択肢と、小虎の返事です。
const tableReplies = [
  {
    choice: "小虎と話す",
    reply: "これは今すぐ少しだけ話して整理する荷物や。"
  },
  {
    choice: "Notionにまとめる",
    reply: "これは一覧化して後で見返す荷物や。"
  },
  {
    choice: "Obsidianでコンテキストにする",
    reply: "これは神経につなぐ荷物や。リンクで残そ。"
  },
  {
    choice: "手書きでメモする",
    reply: "これは手で書いた方が身体に入る荷物や。"
  },
  {
    choice: "身体をまず動かす",
    reply: "これは頭で扱う前に、身体へ戻す荷物や。"
  }
];

// 「今日は置いていく」ボタンで出す選択肢と、小虎の返事です。
const leaveReplies = [
  {
    choice: "今日は持たない",
    reply: "これは今日の荷物やないな。置いていこ。"
  },
  {
    choice: "白湯に預ける",
    reply: "答え出さんでええ。白湯に預けよ。"
  },
  {
    choice: "寝かせる",
    reply: "これは一晩寝かせた方がええ荷物や。"
  },
  {
    choice: "身体に戻す",
    reply: "頭で持つより、まず身体に戻そ。"
  },
  {
    choice: "明日の自分に渡す",
    reply: "今日の自分が全部持たんでええ。明日に渡そ。"
  }
];

// HTMLの部品をJavaScriptから使えるように取り出しています。
const messageInput = document.querySelector("#message");
const speech = document.querySelector("#speech");
const welcomeButton = document.querySelector("#welcomeButton");
const tableButton = document.querySelector("#tableButton");
const leaveButton = document.querySelector("#leaveButton");

// 配列の中から、ランダムで1つ選ぶための関数です。
function pickRandomReply(replies) {
  const randomIndex = Math.floor(Math.random() * replies.length);
  return replies[randomIndex];
}

// 入力欄に何か入っていた時だけ、返事の下に小さく表示します。
function addEchoText() {
  const userMessage = messageInput.value.trim();

  if (!userMessage) {
    return;
  }

  const echo = document.createElement("span");
  echo.className = "echo";
  echo.textContent = `今の一言：「${userMessage}」`;
  speech.append(echo);
}

// 小虎の返答エリアに、選択肢と返事を表示する関数です。
function showReply(replyData) {
  const choice = document.createElement("span");
  choice.className = "choice";
  choice.textContent = replyData.choice;

  const reply = document.createTextNode(replyData.reply);

  speech.replaceChildren(choice, reply);
  addEchoText();
}

// 1つ目のボタンを押した時の動きです。
welcomeButton.addEventListener("click", () => {
  const replyData = pickRandomReply(welcomeReplies);
  showReply(replyData);
});

// 2つ目のボタンを押した時の動きです。
tableButton.addEventListener("click", () => {
  const replyData = pickRandomReply(tableReplies);
  showReply(replyData);
});

// 3つ目のボタンを押した時の動きです。
leaveButton.addEventListener("click", () => {
  const replyData = pickRandomReply(leaveReplies);
  showReply(replyData);
});
