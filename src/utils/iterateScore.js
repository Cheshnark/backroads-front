import { Star } from 'lucide-react'

export const iterateScore = (score, id) => {
  const roundScore = Math.round(score)
  const roundLeft = 5 - roundScore
  const starArr = []
  const randomNum = Math.round(Math.random() * 100000)

  for (let i = 0; i < roundScore; i++) {
    starArr.push(<Star key={id + randomNum} fill='#161320' />)
  }

  for (let i = 0; i < roundLeft; i++) {
    starArr.push(<Star key={id + randomNum} />)
  }

  return starArr
}

// Tengo que ver por qué concho salen quinientos millones de estrellas u_u
