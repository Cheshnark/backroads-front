'use client'

import styles from './AddComment.module.css'

import { Star } from 'lucide-react'

const AddComment = (e) => {
  const handleSubmit = (e) => {

  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.addComment}>
      <h3 className='font-berkshire'>Help other riders</h3>
      <textarea name='' id='' rows='5' />
      <div className='flex justify-between items-center gap-2'>
        <div className='flex gap-2'>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <button>Publish</button>
      </div>
    </form>
  )
}

export default AddComment
