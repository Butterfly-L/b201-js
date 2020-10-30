const rand = Math.floor(Math.random() * 100) + 1

console.log(rand)

// 1-3 代表只有 3/100 =3% 機率
if (rand > 0 && rand < 4) {
  console.log('5星卡')
  // 這裡示範要抽不同的卡種，要先抽到5星卡再用另一個隨機數決定
  // 共有三種可能性
  const rand2 = Math.floor(Math.random() * 3) + 1
  console.log(rand2)
}

// 4-20 代表有 17/100 =17% 機率
if (rand > 3 && rand < 21) console.log('4星卡')

//  代表有 80/100 =80% 機率
if (rand > 20) console.log('3星卡')
