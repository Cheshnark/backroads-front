'use client'

import styles from './page.module.css'

import { useState } from 'react'

import AddMap from './components/AddMap/AddMap'
import AddForm from './components/AddForm/AddForm'

const AddShelter = () => {
  const [position, setPosition] = useState([55.62799595426723, 37.52929687500001])
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

  const handleSubmit = (e) => {
    e.preventDefault()

    const addJson = {
      userId: '',
      coordinates: [],
      title: '',
      body: '',
      locationType: '',
      address: '',
      services: {
        water: false,
        electricity: false,
        shower: false,
        trash: false,
        restaurant: false,
        gated: false,
        wifi: false,
        shop: false
      },
      price: false,
      openingHours: '',
      images: []
    }

    console.log(formData)
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
