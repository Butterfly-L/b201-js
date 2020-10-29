const aArray = []
const bArray = [1, 2, 3]

// 陣列中有多少成員
console.log(aArray.length) //0
console.log(bArray.length) //3

// 陣列索引值是從0開始
// a陣列中的最先的空間分配給數字1入住
aArray[0] = 1

// a陣列中的第二間空間分配給數字2入住
aArray[1] = 2

// a陣列中的第三間空間分配給數字3入住
aArray[2] = 3

// a陣列中的第三間空間，用數字5取代掉原本的
aArray[2] = 5

console.log('typeof aArray', typeof aArray) // object
console.log('aArray', aArray) // [1,2,5]
console.log('aArray.length', aArray.length) //3
console.log('aArray[3]', aArray[3]) //undefined

// 符號共用
// 方括號`[]`可用於定義陣列，也可以用於存取陣列中的成員
console.log([0][0])

//和上面的相等
const a = [0]
console.log(a[0])
