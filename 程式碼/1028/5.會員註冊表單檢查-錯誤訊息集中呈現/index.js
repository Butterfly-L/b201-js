const name = document.getElementById('name')
const phone = document.getElementById('phone')
const address = document.getElementById('address')
const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const send = document.getElementById('send')
const message = document.getElementById('message')

send.addEventListener('click', function () {
  let error = '錯誤：'
  //相當於 if(name.value === "")
  //利用空白字串是假家族的情況來判斷
  if (!name.value) error += ' 姓名沒填'
  if (!phone.value) error += ' 電話沒填'
  if (!address.value) error += ' 住址沒填'
  if (!username.value) error += ' 帳號沒填'
  if (!password.value) error += ' 密碼沒填'

  if (password.value !== password2.value) error += ' 兩次輸入的密碼不同'

  message.innerHTML = error
})
