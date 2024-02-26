import styles from './LocationMap.module.css'

import { MapContainer, TileLayer } from 'react-leaflet'
import { Map, MapPin } from 'lucide-react'

const LocationMap = ({ location }) => {
  return (
    <section className={styles.locationMap}>
      <MapContainer
        center={location.coordinates}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
      <div>
        <Map />
        <p>{location.coordinates[0]} - {location.coordinates[1]} (lat, long)</p>
      </div>
      <div>
        <MapPin />
        <p>{location.address}</p>
      </div>
    </section>
  )
}

export default LocationMap
