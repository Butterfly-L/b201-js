// 先統一得到目前的網頁上的要使用的DOM元素物件
const targetText = document.getElementById("target");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const apply = document.getElementById("apply");

apply.addEventListener("click", function () {
  let color = "#";
  color = color + (+one.value).toString(16);
  color = color + (+two.value).toString(16);
  color = color + (+three.value).toString(16);

  targetText.style.color = color;
});
