const sum = function (a, b) {
  return a + b
}

// 第一步改寫
const sum2 = (a, b) => {
  return a + b
}

// 只有在單行回傳時才能省略{}與return
const sum3 = (a, b) => a + b

//-------
const increment = function (x) {
  return x + 5
}

// 如果傳入參數只有一個，可以省略圓括號()
const increment2 = x => x + 5


//-------
const func1 = (x) => x + 1
// 上面的寫法相當於下面這行
// const func1 = (x) => { return x + 1 }
const func2 = (x) => { x + 1 }