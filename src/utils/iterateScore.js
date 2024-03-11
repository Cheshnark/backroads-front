import { Star } from 'lucide-react'
import { v4 } from 'uuid'

export const iterateScore = (score) => {
  const roundScore = Math.round(score)
  const roundLeft = 5 - roundScore
  const starArr = []

  for (let i = 0; i < roundScore; i++) {
    starArr.push(<Star key={v4()} fill='#161320' />)
  }

  for (let i = 0; i < roundLeft; i++) {
    starArr.push(<Star key={v4()} />)
  }

  return starArr
}
