import styles from './page.module.css'

import MapLeaf from './components/MapLeaf/MapLeaf'
import LocationList from './components/LocationList/LocationList'
import LocationSearcher from './components/LocationSearcher/LocationSearcher'
import axios from 'axios'

const Map = async () => {
  const res = await axios.get('http://127.0.0.1:8000/api/location/locations/')
  const locations = await res.data.data

  return (
    <main className={styles.map}>
      <h2 className='font-berkshire mb-6 text-center'>Map</h2>
      <div className={`${styles.mapContainer} md:flex gap-4`}>
        <LocationList />
        <MapLeaf locations={locations} />
      </div>
      <LocationSearcher />
    </main>
  )
}

export default Map
