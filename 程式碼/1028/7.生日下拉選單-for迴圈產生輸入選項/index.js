const year = document.getElementById('year')
const month = document.getElementById('month')
const day = document.getElementById('day')

let yearOptions = ''
for (let i = 1910; i < 2011; i++) {
  yearOptions += `<option value ="${i}">${i}</option>`
}

year.innerHTML = yearOptions

let monthOptions = ''
for (let i = 1; i < 13; i++) {
  monthOptions += `<option value ="${i}">${i}</option>`
}

month.innerHTML = monthOptions

let dayOptions = ''
for (let i = 1; i < 32; i++) {
  dayOptions += `<option value ="${i}">${i}</option>`
}

day.innerHTML = dayOptions
