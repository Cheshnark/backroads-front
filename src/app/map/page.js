import styles from './page.module.css'

import MapLeaf from './components/MapLeaf/MapLeaf'
import LocationList from './components/LocationList/LocationList'
import LocationSearcher from './components/LocationSearcher/LocationSearcher'

const Map = () => {
  return (
    <main className={styles.map}>
      <h2 className='font-berkshire mb-6 text-center'>Map</h2>
      <div className={`${styles.mapContainer} md:flex gap-4`}>
        <LocationList />
        <MapLeaf />
      </div>
      <LocationSearcher />
    </main>
  )
}

export default Map
