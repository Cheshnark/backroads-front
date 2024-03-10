'use client'

import styles from './page.module.css'

import { useState } from 'react'
import dynamic from 'next/dynamic'

import LocationList from './components/LocationList/LocationList'
import LocationSearcher from './components/LocationSearcher/LocationSearcher'

const DynamicMapLeaf = dynamic(() => import('./components/MapLeaf/MapLeaf'), {
  ssr: false,
  loading: () => <div className={styles.mapLoading}><p>Loading Map...</p></div>
})

const Map = () => {
  const [locations, setLocations] = useState(null)
  const [coordinates, setCoordinates] = useState([40.4168, -3.7038])

  return (
    <main className={styles.map}>
      <h2 className='font-berkshire mb-6 text-center'>Map</h2>
      <div className={`${styles.mapContainer} md:flex gap-4`}>
        <div className={`${styles.leftCol} flex flex-col`}>
          <LocationSearcher locations={locations} setLocations={setLocations} setCoordinates={setCoordinates} />
          <LocationList locations={locations} />
        </div>
        <DynamicMapLeaf locations={locations} coordinates={coordinates} />
      </div>
    </main>
  )
}

export default Map
