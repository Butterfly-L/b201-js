const desk = document.getElementById('desk')

// suit:'h', 'd', 's', 'c'
// point: 1~13
// displayPoint: 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'
function createCard(suit, point) {
  return {
    suit: suit,
    point: point,
    display: function () {
      switch (this.point) {
        case 1:
          displayPoint = 'A'
          break
        case 11:
          displayPoint = 'J'
          break
        case 12:
          displayPoint = 'Q'
          break
        case 13:
          displayPoint = 'K'
          break
        default:
          displayPoint = this.point
          break
      }

      return Poker.getCardImage(100, this.suit, displayPoint)
    }
  }
}

const card = createCard('s', 1)
document.getElementById('desk').appendChild(card.display())