const a = [7, 8, 9]

console.log('a', a)

console.log('typeof a =>', typeof a)

// 判斷是不是一個陣列
console.log('Array.isArray(a) =>', Array.isArray(a))

// 得到成員個數
console.log('a.length =>', a.length)

// 清空陣列的語法
a.length = 0

console.log('a', a)

// ----

const x = [1, 2, 3]
const y = [99, 88, 77]

// 串聯陣列用的語法
const z = [...x, ...y]
