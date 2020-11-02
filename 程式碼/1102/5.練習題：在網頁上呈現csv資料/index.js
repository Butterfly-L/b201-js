const title = document.getElementById('title')
const data = document.getElementById('data')

// 原始資料
const csvData = `'學生姓名', '國文', '數學', '英文'
'陳小花', 90, 65, 77
'張大頭', 80, 75, 60
'李一百', 100, 60, 85`

// 取代掉單引號為空字串(')
// global(g)代表全域，就是取代整個字串出現的
// ignore(i)忽略英文大小寫
const newData = csvData.replace(/'/g, '')

// 用分行符號`\n`來分隔字串為陣列
const dataArray = newData.split('\n')

// 分隔符號是`, `
const titleList = dataArray[0].split(', ')

// 產生要輸出到網頁上的資料
let titleDisplay = ''
for (let i = 0; i < titleList.length; i++){
  titleDisplay += `<th>${titleList[i]}</th>`
}

// 呈現標題在thead中
title.innerHTML = `<th>${titleDisplay}</th>`