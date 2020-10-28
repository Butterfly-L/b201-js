const name = document.getElementById('name')
const phone = document.getElementById('phone')
const address = document.getElementById('address')
const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const send = document.getElementById('send')

send.addEventListener('click', function () {
  //相當於 if(name.value === "")
  //利用空白字串是假家族的情況來判斷
  if (!name.value) alert('姓名沒填')

  if (password.value !== password2.value) alert('兩次輸入的密碼不同')
})
