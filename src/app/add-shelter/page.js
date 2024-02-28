'use client'

import styles from './page.module.css'

import { useState } from 'react'

import AddMap from './components/AddMap/AddMap'
import AddForm from './components/AddForm/AddForm'
import { reverseGeocode } from '@/utils/geocode'

const AddShelter = () => {
  const [position, setPosition] = useState({ lat: 55.62557303452915, lng: 37.54526138305665 })
  const [formData, setFormData] = useState({
    userId: '',
    coordinates: [],
    title: '',
    body: '',
    locationType: '',
    address: '',
    water: false,
    electricity: false,
    shower: false,
    trash: false,
    restaurant: false,
    gated: false,
    wifi: false,
    shop: false,
    price: false,
    openingHours: '',
    images: []
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const lat = position.lat
    const lng = position.lng
    const address = await reverseGeocode(lat, lng)

    const addJson = {
      userId: '',
      coordinates: [lat, lng],
      title: formData.title,
      body: formData.body,
      locationType: formData.locationType,
      address,
      services: {
        water: formData.water,
        electricity: formData.electricity,
        shower: formData.shower,
        trash: formData.trash,
        restaurant: formData.restaurant,
        gated: formData.gated,
        wifi: formData.wifi,
        shop: formData.shop
      },
      price: formData.price,
      openingHours: formData.openingHours,
      images: []
    }

    console.log(addJson)
  }

  return (
    <main className={styles.addShelter}>
      <h2 className='font-berkshire'>Add a Shelter</h2>
      <div className='flex gap-4'>
        <AddMap position={position} setPosition={setPosition} />
        <AddForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
      </div>
    </main>
  )
}

export default AddShelter
