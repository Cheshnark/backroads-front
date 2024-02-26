'use client'

import styles from './AddComment.module.css'

import { Star } from 'lucide-react'

const AddComment = (e) => {
  const handleSubmit = (e) => {

  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.addComment}>
      <h3 className='font-berkshire'>Help other riders</h3>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <div>
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <button></button>
      </div>
    </form>
  )
}

export default AddComment
