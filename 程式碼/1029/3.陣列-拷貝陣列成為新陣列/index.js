const a = [1, 2, 3]
const b = a //指向同一個陣列
//b[0] = 999 //同時會影響到a陣列

// 利用展開運算符，先展開a陣列中的成員，然後建立一個新陣列
// 拷貝(copy)或是克隆(clone) 陣列
// c陣列變為全新的陣列
const c = [...a]
c[0] = 9999

// 利用for迴圈要拷貝a陣列為一個全新的d陣列
const d = []
for (let i = 0; i < a.length; i++) {
  d.push(a[i])
}
