'use client'

import styles from './LocationSearcher.module.css'

import { useState } from 'react'
import axios from 'axios'
const LocationSearcher = ({ setLocations, setCoordinates }) => {
  const [query, setQuery] = useState('')

  const handleClick = async (e) => {
    e.preventDefault()

    const res = await axios.get(`http://127.0.0.1:8000/api/location/locations?q=${query}`)
    let data = []
    if (!query) {
      data = await res.data.data
    } else {
      data = await res.data
    }

    setLocations(data)

    const finalLocation = data[0].coordinates
    setCoordinates(finalLocation)
  }

  return (
    <form className={`${styles.locationSearcher} flex items-center`}>
      <input type='text' placeholder='Search shelters' onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())} />
      <button onClick={(e) => handleClick(e)}>Search</button>
    </form>
  )
}

export default LocationSearcher
