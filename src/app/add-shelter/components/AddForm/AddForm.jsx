'use client'

import styles from './AddForm.module.css'

// import { useRouter } from 'next/navigation'
// import axios from 'axios'

const AddForm = ({ formData, setFormData, handleSubmit }) => {
  // const [error, setError] = useState(null)
  // const router = useRouter()

  const handleChange = (e) => {
    const key = e.target.id
    let value = e.target.value

    if (value === 'on' && formData[key] === true) {
      value = false
    } else if (value === 'on') {
      value = true
    }

    setFormData({ ...formData, [key]: value })
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
          onChange={(e) => handleChange(e)}
          value={formData?.services?.water}
        />
        <label htmlFor='electricity'>Electricity</label>
        <input
          id='electricity'
          type='checkbox'
          onChange={(e) => handleChange(e)}
          value={formData?.services?.electricity}
        />
        <label htmlFor='shower'>Shower</label>
        <input
          id='shower'
          type='checkbox'
          onChange={(e) => handleChange(e)}
          value={formData?.services?.shower}
        />
        <label htmlFor='trash'>Trash</label>
        <input
          id='trash'
          type='checkbox'
          onChange={(e) => handleChange(e)}
          value={formData?.services?.trash}
        />
        <label htmlFor='restaurant'>Restaurant</label>
        <input
          id='restaurant'
          type='checkbox'
          onChange={(e) => handleChange(e)}
          value={formData?.services?.restaurant}
        />
        <label htmlFor='gated'>Gated parking</label>
        <input
          id='gated'
          type='checkbox'
          onChange={(e) => handleChange(e)}
          value={formData?.services?.gated}
        />
        <label htmlFor='wifi'>Wifi</label>
        <input
          id='wifi'
          type='checkbox'
          onChange={(e) => handleChange(e)}
          value={formData?.services?.wifi}
        />
        <label htmlFor='shop'>Shop</label>
        <input
          id='shop'
          type='checkbox'
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
