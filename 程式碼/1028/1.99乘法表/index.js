const table99 = document.getElementById('table99')

let display = '<tbody>'

for (let i = 1; i < 10; i++) {
  display += '<tr>'
  for (let j = 1; j < 10; j++) {
    display += '<td>'

    display += i
    display += 'x'
    display += j
    display += '='
    display += i * j

    display += '</td>'
  }
  display += '</tr>'
}

display += '</tbody>'

table99.innerHTML = display
