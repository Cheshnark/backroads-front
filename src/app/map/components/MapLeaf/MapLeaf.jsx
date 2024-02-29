/* eslint-disable new-cap */
'use client'

import styles from './MapLeaf.module.css'
import 'leaflet/dist/leaflet.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { Icon, divIcon, point } from 'leaflet'
import Link from 'next/link'

import { iterateScore } from '@/utils/iterateScore'

const MapLeaf = ({ locations }) => {
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
          {locations.map(location => (
            <Marker key={location.id} position={location.coordinates} icon={customIcon}>
              <Popup>
                <div className={styles.mapPopUp}>
                  <div className='flex justify-between items-center'>
                    <Link href={`/location/${location.id}`}><h4 className='font-berkshire'>{location.title}</h4></Link>
                    <p className='font-rubik'>- {location.locationType}</p>
                  </div>
                  <p className='font-rubik'>{location.body}</p>
                  <div className='flex'>
                    {iterateScore(location.score, location.id)}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </section>
  )
}

export default MapLeaf
