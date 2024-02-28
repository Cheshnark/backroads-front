'use client'

import styles from './AddMap.module.css'
import 'leaflet/dist/leaflet.css'

import { useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'

const AddMap = ({ position, setPosition }) => {
  const [listenerSetup, setListenerSetup] = useState(null)
  const mapRef = useRef(null)
  if (mapRef.current && !listenerSetup) {
    mapRef.current.on('click', (e) => {
      setPosition(e.latlng)
    })
    setListenerSetup(true)
  } else if (!listenerSetup) {
    setTimeout(() => {
      setListenerSetup(false)
    }, 100)
  }

  const customIcon = new Icon({
    iconUrl: '/images/location01.webp',
    iconSize: [38, 38]
  })

  return (
    <section className={styles.addMap}>
      <MapContainer center={position} zoom={13} ref={mapRef}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <h4>{`${position.lat}, ${position.lng}`}</h4>
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  )
}

export default AddMap
