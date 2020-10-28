const year = document.getElementById('year')
const month = document.getElementById('month')
const day = document.getElementById('day')

let yearOptions = ''
// 1910-2010
for (let i = 1910; i < 2011; i++) {
  yearOptions += `<option value ="${i}">${i}</option>`
}

year.innerHTML = yearOptions

let monthOptions = ''
// 1-12
for (let i = 1; i < 13; i++) {
  monthOptions += `<option value ="${i}">${i}</option>`
}

month.innerHTML = monthOptions

let dayOptions = ''
// 1-31
for (let i = 1; i < 32; i++) {
  dayOptions += `<option value ="${i}">${i}</option>`
}

day.innerHTML = dayOptions
