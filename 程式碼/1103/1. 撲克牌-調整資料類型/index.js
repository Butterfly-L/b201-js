const desk = document.getElementById('desk')

// suit:'h', 'd', 's', 'c'
// point(number): 1~13
// displayPoint: 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
function createCard(suit, point) {
  return {
    suit: suit,
    point: point,
    display: function () {
      console.log(suit, point)
      let displayPoint = point + ''

      if (this.point === 1) displayPoint = 'A'
      if (this.point === 11) displayPoint = 'J'
      if (this.point === 12) displayPoint = 'Q'
      if (this.point === 13) displayPoint = 'K'

      // poker函式庫產生卡片圖形的參數
      // 參考：https://tairraos.github.io/Poker.JS/#chinese-version-readme

      console.log(suit, displayPoint)

      return Poker.getCardImage(100, this.suit, displayPoint)
    },
  }
}

const card = createCard('s', 11)
console.log(card.display())
desk.appendChild(card.display())
