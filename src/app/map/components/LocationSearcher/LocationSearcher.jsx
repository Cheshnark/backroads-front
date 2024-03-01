'use client'

import styles from './LocationSearcher.module.css'

import { useState } from 'react'
import axios from 'axios'

import { getCoordinates } from '@/utils/geocode'

const LocationSearcher = () => {
  const [locations, setLocations] = useState([])
  const [query, setQuery] = useState('')

  const handleClick = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/location/locations?q=${query}`)
    let data = []
    if (!query) {
      data = await res.data.data
    } else {
      data = await res.data
    }

    setLocations(data)

    const finalLocation = locations[0]?.address
    const coordinates = await getCoordinates(finalLocation)

    console.log(coordinates[0].lat, coordinates[1].lat)
  }

  return (
    <div className={styles.locationSearcher}>
      <input type='text' placeholder='Search shelters' onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())} />
      <button onClick={handleClick}>Clicky</button>

      <ol>
        {locations?.map(location => (
          <li key={location.id} className='text-slate-800'>{location.title}</li>
        ))}
      </ol>
    </div>
  )
}

export default LocationSearcher
