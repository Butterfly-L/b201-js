document.getElementById("target").addEventListener("click", function () {
  // 1. 得到目前網頁上的數字是多少
  // 用一元正號(+)，先轉為數字再運算
  const nowNumber = +document.getElementById("target").innerHTML;
  //console.log(typeof nowNumber);

  // 2. 將目前的數字+1，然後呈現出來
  document.getElementById("target").innerHTML = nowNumber + 1;
});
