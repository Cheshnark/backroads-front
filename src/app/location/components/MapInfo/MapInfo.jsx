import styles from './MapInfo.module.css'

import { Map, MapPin } from 'lucide-react'

const MapInfo = ({ location }) => {
  return (
    <div className={`${styles.mapInfo} flex flex-col gap-2`}>
      <div className='flex gap-2'>
        <Map />
        <p><span>{location.coordinates[0]} - {location.coordinates[1]}</span> (lat, long)</p>
      </div>
      <div className='flex gap-2'>
        <MapPin />
        <p>{location.address}</p>
      </div>
    </div>
  )
}

export default MapInfo
