const user = document.getElementById('user')
const computer = document.getElementById('computer')
const result = document.getElementById('result')

const scissors = document.getElementById('scissors')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')

// 剪刀=1，石頭=2，布=3
// 陣列索引值是從0開始
const stateList = ['剪刀', '石頭', '布']

// 視finalState的數值，0, 1, 2
const finalList = ['電腦win', '你win', '平手']

// 記錄目前使用者出了什麼拳
let userState = 0
// 記錄目前電腦出了什麼拳
let comState = 0

// 最後的結果，預設為0(電腦win)
let finalState = 0

function play(userStateNow) {
  userState = userStateNow
  user.innerHTML = '你出了-' + stateList[userState - 1]
  //電腦部份
  comState = Math.floor(Math.random() * 3) + 1
  computer.innerHTML = '電腦出了-' + stateList[comState - 1]

  //判斷最終的結果情況

  // 數字相同，代表平手
  if (userState === comState) finalState = 2

  // 下面三列是你win的情況(因為預設值是電腦win)
  if (userState === 2 && comState === 1) finalState = 1
  if (userState === 3 && comState === 2) finalState = 1
  if (userState === 1 && comState === 3) finalState = 1

  //console.log(userState, comState, finalState)

  // 呈現最終結果在網頁上
  result.innerHTML = '最後結果：' + finalList[finalState]

  // 重設所有的出拳與結果
  userState = 0
  comState = 0
  finalState = 0
}

//剪刀
scissors.addEventListener('click', function () {
  play(1)
})

rock.addEventListener('click', function () {
  play(2)
})

paper.addEventListener('click', function () {
  play(3)
})
