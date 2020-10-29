const user = document.getElementById('user')
const computer = document.getElementById('computer')
const result = document.getElementById('result')

const scissors = document.getElementById('scissors')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')

// 剪刀=1，石頭=2，布=3
// 陣列索引值是從0開始
const stateList = ['剪刀', '石頭', '布']
let userState = 0
let comState = 0

//剪刀
scissors.addEventListener('click', function () {
  userState = 1
  user.innerHTML = '你出了-' + stateList[userState - 1]
  //電腦部份
  comState = Math.floor(Math.random() * (3 - 1 + 1)) + 1
  computer.innerHTML = '電腦出了-' + stateList[comState - 1]
})

rock.addEventListener('click', function () {
  userState = 2
  user.innerHTML = '你出了-' + stateList[userState - 1]
  //電腦部份
  comState = Math.floor(Math.random() * (3 - 1 + 1)) + 1
  computer.innerHTML = '電腦出了-' + stateList[comState - 1]
})

paper.addEventListener('click', function () {
  userState = 3
  user.innerHTML = '你出了-' + stateList[userState - 1]
  //電腦部份
  comState = Math.floor(Math.random() * (3 - 1 + 1)) + 1
  computer.innerHTML = '電腦出了-' + stateList[comState - 1]
})
