// 先統一得到目前的網頁上的要使用的DOM元素物件
const targetText = document.getElementById("target");
const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");

addButton.addEventListener("click", function () {
  // 1. 得到目前網頁上的數字是多少
  // 用一元正號(+)，先轉為數字再運算
  // 2. 將目前的數字+1，然後呈現出來
  targetText.innerHTML = +targetText.innerHTML + 1;
});

subButton.addEventListener("click", function () {
  targetText.innerHTML = +targetText.innerHTML - 1;
});
