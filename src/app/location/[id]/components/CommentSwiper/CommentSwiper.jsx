'use client'

import styles from './CommentSwiper.module.css'
import 'swiper/css'
import 'swiper/css/navigation'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { v4 } from 'uuid'

import { iterateScore } from '@/utils/iterateScore'
import { useEffect } from 'react'

const CommentSwiper = ({ comments }) => {
  useEffect(() => {
    console.log(comments)
  }, [comments])
  return (
    <>
      <div className={`${styles.commentSwiper} container md:hidden`}>
        <h3 className='font-berkshire mb-6'>Other riders opinions</h3>
        <Swiper
          pagination={{ type: 'fraction' }}
          spaceBetween={12}
          slidesPerView={1}
          breakpoints={{
            768: {
              spaceBetween: 16,
              slidesPerView: 2
            },
            1280: {
              slidesPerView: 3
            }
          }}
          modules={[Navigation, Pagination]}
          className='h-full w-full'
        >
          {comments.map(comment => (
            <SwiperSlide key={v4()}>
              <article className={`${styles.commentCard} flex flex-col`}>
                <header className={`${styles.commentHeader} flex justify-between items-center`}>
                  <div className='flex gap-2'>
                    <img src={comment.user.avatar} alt='User avatar' />
                    <div>
                      <h4>{comment.user.name}</h4>
                      <p>{comment.date}</p>
                    </div>
                  </div>
                  <div className='flex'>
                    {iterateScore(comment.score)}
                  </div>
                </header>
                <p>{comment.body}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={`${styles.commentSwiper} hidden md:block`}>
        <h3 className='font-berkshire mb-6'>Other riders opinions</h3>
        <div className={`${styles.commentGrid} grid grid-cols-2 justify-center gap-6`}>
          {comments.map(comment => (
            <article key={v4()} className={`${styles.commentCard} flex flex-col`}>
              <header className={`${styles.commentHeader} flex justify-between`}>
                <div className='flex gap-2'>
                  <img src={comment.user.avatar} alt='User avatar' />
                  <div>
                    <h4>{comment.user.name}</h4>
                    <p>{comment.date}</p>
                  </div>
                </div>
                <div className='flex'>
                  {iterateScore(comment.score)}
                </div>
              </header>
              <p>{comment.body}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}

export default CommentSwiper
