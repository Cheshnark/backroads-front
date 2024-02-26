import styles from './LocationHeader.module.css'

import { FlameKindling } from 'lucide-react'

import { iterateScore } from '@/utils/iterateScore'

const LocationHeader = ({ location }) => {
  return (
    <header className={styles.header}>
      <div>
        <h2 className='font-berkshire'>{location?.title}</h2>
      </div>
      <div>
        <FlameKindling />
      </div>
      <div>
        {iterateScore(location?.score)}
      </div>
      <div>
        <p>{location.locationType}</p>
      </div>
    </header>
  )
}

export default LocationHeader
