//---for迴圈的語法
const a = [1, 2, 3, 4, 5]

for (let i = 0; i < a.length; i++) {
  // 對陣列元素作某些事
  a[i] = a[i] * 2
}

console.log(a)

//---forEach的語法
const b = [1, 2, 3, 4, 5]
// 回調(回呼)callback函式
b.forEach(function (value, index, array) {
  // 對陣列元素作某些事
  array[index] = value * 2
})

console.log(b)

//---map的語法
const c = [1, 2, 3, 4, 5]
// 回調(回呼)callback函式
const d = c.map(function (value, index, array) {
  // 對陣列元素作某些事
  return value * 2
})

console.log(d)

// --- map示範使用簡潔的連鎖語法
// 要先對陣列中的成員*2，再除以10，再結合成字串
const e = [1, 2, 3, 4, 5]
// 回調(回呼)callback函式
const f = e
  .map((v) => v * 2)
  .map((v) => v / 10)
  .join(',')

console.log(f)
