const dice = document.getElementById('dice')
const point = document.getElementById('point')
const start = document.getElementById('start')

// 注意：陣列索引值是從0開始，例如：'one'是對應到索引值0
const pointTextList = ['one', 'two', 'three', 'four', 'five', 'six']

start.addEventListener('click', function () {
  // 產生1到6的隨機整數值
  const p = Math.floor(Math.random() * 6) + 1

  //在網頁上呈現點數
  point.innerHTML = p + '點'

  // 在網頁上呈現對應的圖示
  dice.innerHTML = `<i class="fas fa-dice-${pointTextList[p - 1]}"></i>`
})
