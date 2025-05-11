const loadingElement = document.getElementById("loading");

// 進捗状況確認
let progress = 0;

// 10秒ごとに数値加算、テキスト更新
const intervalId = setInterval(() => {
  progress++;
  loadingElement.textContent = progress + "%";

  // 100%に到達後ローディング終了しフェードアウト
  if (progress >= 100) {
    clearInterval(intervalId);
    loadingElement.classList.add("fade-out");
  }
}, 10);
