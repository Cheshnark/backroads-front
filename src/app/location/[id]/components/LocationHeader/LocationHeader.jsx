import styles from './LocationHeader.module.css'

import { Flame } from 'lucide-react'

import { iterateScore } from '@/utils/iterateScore'

const LocationHeader = ({ location }) => {
  return (
    <header className={styles.header}>
      <div className={styles.item01}>
        <h2 className='font-berkshire'>{location?.title}</h2>
      </div>
      <div className={styles.item02}>
        <Flame />
      </div>
      <div className={`${styles.item03} flex`}>
        {iterateScore(location?.score)}
      </div>
      <div className={styles.item04}>
        <p>{location?.locationType}</p>
      </div>
    </header>
  )
}

export default LocationHeader
