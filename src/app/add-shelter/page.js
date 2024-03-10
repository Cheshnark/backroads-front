'use client'

import styles from './page.module.css'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import dynamic from 'next/dynamic'

import AddForm from './components/AddForm/AddForm'
import { reverseGeocode } from '@/utils/geocode'
import useAuthStore from '@/stores/AuthStore'

const DynamicAddMap = dynamic(() => import('./components/AddMap/AddMap'), {
  ssr: false,
  loading: () => <div className={styles.mapLoading}><p>Loading Map...</p></div>
})

const AddShelter = () => {
  const [position, setPosition] = useState({ lat: 55.62557303452915, lng: 37.54526138305665 })
  const [error, setError] = useState(null)
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
  const router = useRouter()
  const { session } = useAuthStore()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const lat = position.lat
    const lng = position.lng
    const address = await reverseGeocode(lat, lng)

    const addJson = {
      userId: session.data.attributes.id,
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

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/location/locations', addJson, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.data
      if (!data) {
        setError({ message: 'Fetch failed, try again later' })
      }

      router.push('/map')
    } catch (error) {
      setError({ message: 'Error creating shelter, try again later' })
    }
  }

  return (
    <main className={styles.addShelter}>
      <h2 className='font-berkshire'>Add a Shelter</h2>
      <div className='flex flex-col sm:flex-row gap-4'>
        <DynamicAddMap position={position} setPosition={setPosition} />
        <AddForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
      </div>
      {error && <p className={styles.error}>{error.message}</p>}
    </main>
  )
}

export default AddShelter
