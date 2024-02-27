'use client'

import styles from './AddForm.module.css'

import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import axios from 'axios'

const AddForm = () => {
  // const [error, setError] = useState(null)
  // const router = useRouter()
  const [formData, setFormData] = useState({
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
  })

  const handleChange = (e) => {
    const key = e.target.id
    const value = e.target.value

    setFormData({ ...formData, [key]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={`${styles.addForm} flex flex-col gap-4`}>
      <input
        id='title'
        type='text'
        placeholder='Location Name'
        onChange={(e) => handleChange(e)}
        value={formData?.title}
      />
      <input
        id='locationType'
        type='text'
        placeholder='Location Type'
        onChange={(e) => handleChange(e)}
        value={formData?.locationType}
      />
      <textarea
        id='body'
        type='text'
        placeholder='Description'
        onChange={(e) => handleChange(e)}
        value={formData?.body}
      />
      <input
        id='price'
        type='number'
        placeholder='Price'
        onChange={(e) => handleChange(e)}
        value={formData?.price}
      />
      <input
        id='openingHours'
        type='text'
        placeholder='Opens/Closes...'
        onChange={(e) => handleChange(e)}
        value={formData?.openingHours}
      />
      <hr />
      <h3 className='font-berkshire'>Services</h3>
      <div className='grid grid-cols-2 gap-y-2'>
        <label htmlFor='water'>Water</label>
        <input
          id='water'
          type='checkbox'
          placeholder='Opens/Closes...'
          onChange={(e) => handleChange(e)}
          value={formData?.services?.water}
        />
        <label htmlFor='electricity'>Electricity</label>
        <input
          id='electricity'
          type='checkbox'
          placeholder='Opens/Closes...'
          onChange={(e) => handleChange(e)}
          value={formData?.services?.electricity}
        />
        <label htmlFor='shower'>Shower</label>
        <input
          id='shower'
          type='checkbox'
          placeholder='Opens/Closes...'
          onChange={(e) => handleChange(e)}
          value={formData?.services?.shower}
        />
        <label htmlFor='trash'>Trash</label>
        <input
          id='trash'
          type='checkbox'
          placeholder='Opens/Closes...'
          onChange={(e) => handleChange(e)}
          value={formData?.services?.trash}
        />
        <label htmlFor='restaurant'>Restaurant</label>
        <input
          id='restaurant'
          type='checkbox'
          placeholder='Opens/Closes...'
          onChange={(e) => handleChange(e)}
          value={formData?.services?.restaurant}
        />
        <label htmlFor='gated'>Gated parking</label>
        <input
          id='gated'
          type='checkbox'
          placeholder='Opens/Closes...'
          onChange={(e) => handleChange(e)}
          value={formData?.services?.gated}
        />
        <label htmlFor='wifi'>Wifi</label>
        <input
          id='wifi'
          type='checkbox'
          placeholder='Opens/Closes...'
          onChange={(e) => handleChange(e)}
          value={formData?.services?.wifi}
        />
        <label htmlFor='shop'>Shop</label>
        <input
          id='shop'
          type='checkbox'
          placeholder='Opens/Closes...'
          onChange={(e) => handleChange(e)}
          value={formData?.services?.shop}
        />
      </div>
      <hr />
      {/* <h3 className='font-berkshire'>Add some pictures</h3>
      <input type='file' /> */}
      <button type='submit'>Publish</button>
      {/* {error && <p className={styles.registerError}>{error}</p>} */}
    </form>
  )
}

export default AddForm
