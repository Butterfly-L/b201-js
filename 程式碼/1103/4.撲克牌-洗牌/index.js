const desk = document.getElementById('desk')
// 全域變數，代表整副要使用的撲克牌
let cards = []

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

// 洗牌的演算法
// 傳入一個陣列，洗好後回傳陣列
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))

    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

// 產生一整副牌
function initCards() {
  const tempCards = []
  const suits = ['h', 'd', 's', 'c']
  const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < points.length; j++) {
      tempCards.push(createCard(suits[i], points[j]))
    }
  }

  // 指定目前的牌(全域變數)
  cards = shuffle(tempCards)
}

// 測試
initCards()

console.log(cards)

desk.appendChild(cards[7].display)
