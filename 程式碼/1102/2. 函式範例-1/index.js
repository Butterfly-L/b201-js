function check(value) {
  if (value) return '有填寫'
  // 錯誤寫法，有return 代表函式結束了，不會再往下執行
  if (value > 10) return '值大於10'
}


console.log(check(8))
console.log(check(11))
console.log(check()) // 函式必有return值，沒寫會自動return undefined