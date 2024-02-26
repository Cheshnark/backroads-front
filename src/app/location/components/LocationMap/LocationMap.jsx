'use client'

import styles from './LocationMap.module.css'
import 'leaflet/dist/leaflet.css'

import { MapContainer, TileLayer } from 'react-leaflet'

const LocationMap = ({ location }) => {
  return (
    <div className={styles.locationMap}>
      <MapContainer
        center={location.coordinates}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
    </div>
  )
}

export default LocationMap
