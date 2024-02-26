/* eslint-disable new-cap */
'use client'

import styles from './MapLeaf.module.css'
import 'leaflet/dist/leaflet.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { Icon, divIcon, point } from 'leaflet'

const MapLeaf = () => {
  const markers = [
    {
      id: 1,
      geocode: [40.4168, -3.7038],
      popUp: 'Hello, jello!'
    },
    {
      id: 2,
      geocode: [40.4168, -3.20],
      popUp: 'Hello, jello hello!'
    },
    {
      id: 3,
      geocode: [40.4168, -3.90],
      popUp: 'Hello, jello mello!'
    }
  ]

  const customIcon = new Icon({
    iconUrl: '/images/bonfire01.webp',
    iconSize: [38, 38]
  })

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="clusterIcon">${cluster.getChildCount()}</div>`,
      iconSize: point(33, 33, true)
    })
  }

  return (
    <section className={styles.mapLeaf}>
      <MapContainer
        center={[40.4168, -3.7038]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
          {markers.map(marker => (
            <Marker key={marker.id} position={marker.geocode} icon={customIcon}>
              <Popup>
                <h4>{marker.popUp}</h4>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </section>
  )
}

export default MapLeaf
