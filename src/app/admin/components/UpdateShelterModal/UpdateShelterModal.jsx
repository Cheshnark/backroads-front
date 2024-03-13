import styles from './UpdateShelterModal.module.css'

import { useState } from 'react'
import { X } from 'lucide-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const UpdateShelterModal = ({ setShowUpdateShelter, updateShelter, filteredShelter }) => {
  const [updateError, setUpdateError] = useState(null)

  const handleClick = (e) => {
    if (e.target.className === 'UpdateShelterModal_background__8Cjk8') {
      setShowUpdateShelter(false)
    }
  }

  const formik = useFormik({
    initialValues: {
      title: filteredShelter?.title || '',
      body: filteredShelter?.body || '',
      locationType: filteredShelter?.locationType || '',
      address: filteredShelter?.address || '',
      price: filteredShelter?.price || 0,
      openingHours: filteredShelter?.openingHours || '',
      score: filteredShelter?.score || 0
    },
    validationSchema: Yup.object({
      title: Yup.string(),
      body: Yup.string(),
      locationType: Yup.string(),
      address: Yup.string(),
      price: Yup.number(),
      openingHours: Yup.string(),
      score: Yup.number().min(0).max(5)

    }),
    onSubmit: values => {
      const updated = updateShelter(filteredShelter.id, values)

      if (!updated) {
        setUpdateError('Error updating shelter')
      }
    }
  })

  return (
    <div className={styles.background} onClick={handleClick}>
      <article className={styles.container}>
        <header>
          <div className={styles.i}>
            <X onClick={() => setShowUpdateShelter(false)} />
          </div>
          <h2 className='font-berkshire'>Update Shelter</h2>
        </header>
        <form onSubmit={formik.handleSubmit} className={`${styles.registerForm} flex flex-col gap-4`}>
          <div className='grid grid-cols-2'>
            <label htmlFor='title'>Title</label>
            <input
              id='title'
              type='title'
              placeholder='Title'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title
              ? (
                <div>{formik.errors.title}</div>)
              : null}
          </div>
          <div className='grid grid-cols-2'>
            <label htmlFor='body'>Body</label>
            <input
              id='body'
              type='body'
              placeholder='Body'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.body}
            />
            {formik.touched.body && formik.errors.body
              ? (
                <div>{formik.errors.body}</div>)
              : null}
          </div>
          <div className='grid grid-cols-2'>
            <label htmlFor='locationType'>Location Type</label>
            <input
              id='locationType'
              type='locationType'
              placeholder='Location Type'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.locationType}
            />
            {formik.touched.locationType && formik.errors.locationType
              ? (
                <div>{formik.errors.locationType}</div>)
              : null}
          </div>
          <div className='grid grid-cols-2'>
            <label htmlFor='address'>Address</label>
            <input
              id='address'
              type='address'
              placeholder='Address'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address
              ? (
                <div>{formik.errors.address}</div>)
              : null}
          </div>
          <div className='grid grid-cols-2'>
            <label htmlFor='price'>Price</label>
            <input
              id='price'
              type='price'
              placeholder='Price'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price
              ? (
                <div>{formik.errors.price}</div>)
              : null}

          </div>
          <div className='grid grid-cols-2'>
            <label htmlFor='openingHours'>Opening Hours</label>
            <input
              id='openingHours'
              type='openingHours'
              placeholder='Opening Hours'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.openingHours}
            />
            {formik.touched.openingHours && formik.errors.openingHours
              ? (
                <div>{formik.errors.openingHours}</div>)
              : null}
          </div>
          <div className='grid grid-cols-2'>
            <label htmlFor='score'>Score</label>
            <input
              id='score'
              type='score'
              placeholder='Score'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.score}
            />
            {formik.touched.score && formik.errors.score
              ? (
                <div>{formik.errors.score}</div>)
              : null}
          </div>
          <div className={`${styles.shelterButtons} flex justify-end gap-2`}>
            <button className={styles.cancel} onClick={() => setShowUpdateShelter(false)}>Cancel</button>
            <button type='submit'>Update</button>
          </div>
          {updateError && <p className={styles.loginError}>{updateError}</p>}
        </form>
        {updateError && <div className={styles.errorMessage}><p>{updateError}</p></div>}
      </article>
    </div>
  )
}

export default UpdateShelterModal
