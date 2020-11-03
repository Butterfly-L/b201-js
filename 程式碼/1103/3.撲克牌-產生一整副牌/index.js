const desk = document.getElementById('desk')
// 全域常數，代表整副要使用的撲克牌
const cards = []

// suit:'h', 'd', 's', 'c'
// point(number): 1~13
// displayPoint: 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
function createCard(suit, point) {
  const displayPoints = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ]

  return {
    suit: suit,
    point: point,
    display: Poker.getCardImage(100, suit, displayPoints[point - 1]),
  }
}

// 產生一整副牌
function initCards() {
  const suits = ['h', 'd', 's', 'c']
  const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < points.length; j++) {
      cards.push(createCard(suits[i], points[j]))
    }
  }

  console.log(cards)
}

// 測試
initCards()

desk.appendChild(cards[7].display)
