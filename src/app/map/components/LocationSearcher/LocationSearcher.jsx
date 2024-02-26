'use client'

import axios from 'axios'
import styles from './LocationSearcher.module.css'

const LocationSearcher = () => {
  const getCoordinates = async (address) => {
    const res = await axios.get(`https://geocode.maps.co/search?q=${address}&api_key=${process.env.NEXT_PUBLIC_GEOCODING_KEY}`)
    const data = await res.data

    console.log(data)
  }

  return (
    <div className={styles.locationSearcher}>
      <button onClick={() => getCoordinates('lavapies')}>Clicky</button>
    </div>
  )
}

export default LocationSearcher
