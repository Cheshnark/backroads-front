'use client'

import styles from './AddComment.module.css'

import { useState } from 'react'
import { format } from 'date-fns'
import { v4 } from 'uuid'

import useAuthStore from '@/stores/AuthStore'

const AddComment = ({ setComments }) => {
  const [rating, setRating] = useState(null)
  const [comment, setComment] = useState('')
  const [hover, setHover] = useState(null)
  const [error, setError] = useState(null)
  const totalStars = 5
  const { session } = useAuthStore()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newComment = {
      user: {
        id: session?.data?.attributes?.id,
        avatar: 'https://images.pexels.com/photos/1915149/pexels-photo-1915149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: session?.data?.attributes?.name
      },
      date: format(new Date(), 'dd/MM/yyyy'),
      score: rating,
      body: comment
    }

    if (comment.length < 25 || rating < 1) {
      setError({
        message: 'Comment must be 25 characters or longer. Oh, and rate it ;)'
      })
    } else {
      newComment.user.id && setComments(comments => [...comments, newComment])
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.addComment}>
      <textarea rows='5' value={comment} onChange={(e) => setComment(e.target.value)} />
      <div className='flex justify-between'>
        <div className='flex justify-start items-center gap-2'>
          {[...Array(totalStars)].map((star, index) => {
            const currentRating = index + 1
            return (
              <label key={v4()}>
                <input
                  key={star}
                  type='radio'
                  name='rating'
                  value={currentRating}
                  onChange={() => setRating(currentRating)}
                />
                <span
                  className={styles.star}
                  style={{
                    color:
                      currentRating <= (hover || rating) ? '#161320' : '#e4e5e9'
                  }}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                >
                  &#9733;
                </span>
              </label>
            )
          })}
        </div>
        <button>Publish</button>
      </div>
      {error &&
        <div className={styles.errorContainer}>
          <p>{error.message}</p>
        </div>}
    </form>
  )
}

export default AddComment
