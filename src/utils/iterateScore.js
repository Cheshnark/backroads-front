import { Star } from 'lucide-react'

export const iterateScore = (score, id) => {
  const roundScore = Math.round(score)
  const roundLeft = 5 - roundScore
  const starArr = []

  for (let i = 0; i < roundScore; i++) {
    starArr.push(<Star key={i + id} fill='#161320' />)
  }

  for (let i = 0; i < roundLeft; i++) {
    starArr.push(<Star key={i + id} />)
  }

  return starArr
}
