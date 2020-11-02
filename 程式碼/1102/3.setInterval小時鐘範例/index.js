const clock = document.getElementById('clock')

// setInverval是每x微秒，執行一次回調函式中的程式碼
setInterval(function () {
  // 轉換為本地的(台灣時間字串
  clock.innerHTML = new Date().toLocaleTimeString()
}, 1000)