// 先統一得到目前的網頁上的要使用的DOM元素物件
const moneyInput = document.getElementById("moneyInput");
const usd2twd = document.getElementById("usd2twd");
const twd2usd = document.getElementById("twd2usd");
const moneyText = document.getElementById("moneyText");

//(1 USD 美金 = 28.53 TWD 新台幣)
// moneyInput=美金, moneyText=新台幣
usd2twd.addEventListener("click", function () {
  //轉為數字
  const money = +moneyInput.value;
  moneyText.innerHTML = (28.53 * money).toFixed(0);
});

// moneyInput=新台幣, moneyText=美金
twd2usd.addEventListener("click", function () {
  //轉為數字
  const money = +moneyInput.value;
  moneyText.innerHTML = (money / 28.53).toFixed(2);
});
