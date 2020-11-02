const title = document.getElementById('title')
const data = document.getElementById('data')

// 原始資料
const csvData = `'學生姓名', '國文', '數學', '英文'
'陳小花', 90, 65, 77
'張大頭', 80, 75, 60
'陳一一', 60, 60, 60
'李一百', 100, 60, 85`

// 取代掉單引號為空字串(')
// global(g)代表全域，就是取代整個字串出現的
// ignore(i)忽略英文大小寫
const newData = csvData.replace(/'/g, '')
// 也可以用replaceAll
//const newData = csvData.replaceAll("'", '')

// 用分行符號`\n`來分隔字串為陣列
const dataArray = newData.split('\n')

console.log(dataArray)

// 分隔符號是`, `
const titleList = dataArray[0].split(', ')

// 產生要輸出到網頁上的資料
let titleDisplay = ''
for (let i = 0; i < titleList.length; i++){
  titleDisplay += `<th>${titleList[i]}</th>`
}

// 呈現標題在thead中
title.innerHTML = titleDisplay

// 建立學生資料的陣列
const students = []

for (let i = 1; i < dataArray.length; i++) {
  const temp = dataArray[i].split(', ')
  const student = {
    name: temp[0],
    chinese: temp[1],
    math: temp[2],
    english: temp[3]
  }
  students.push(student)
}

// 三個科目的總分，先宣告為變數
let totalChinese = 0
let totalMath = 0
let totalEnglish = 0 

// 產生要輸出到網頁上的資料
let studentDisplay = ''
for (let i = 0; i < students.length; i++) {
  studentDisplay += `<tr>
      <td>${students[i].name}</td>
      <td>${students[i].chinese}</td>
      <td>${students[i].math}</td>
      <td>${students[i].english}</td>
      </tr>`
  
  // 數字加總，注意原本的字串值要轉為數字
  totalChinese += +students[i].chinese
  totalMath += +students[i].math
  totalEnglish += +students[i].english
}

//console.log(totalChinese, totalMath, totalEnglish)

// 平均分數為總分除以學生個數(students.length)
// toFixed(0)代表不要有小數點的，小數點後四捨五入
let avgDisplay = `<tr>
  <td>各科平均</td>
  <td>${(totalChinese / students.length).toFixed(0)}</td>
  <td>${(totalMath / students.length).toFixed(0)}</td>
  <td>${(totalEnglish / students.length).toFixed(0)}</td>
  </tr>`


// 呈現資料在tbody中
data.innerHTML = studentDisplay + avgDisplay
