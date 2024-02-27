'use client'

import styles from './ImageSwiper.module.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules'

const ImageSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const slides = [
    {
      id: 1, src: '/images/home01.webp', alt: 'First'
    },
    {
      id: 2, src: '/images/home02.webp', alt: 'Second'
    },
    {
      id: 3, src: '/images/login01.webp', alt: 'Third'
    }
  ]

  return (
    <section className={`${styles.carousel} container`}>
      <Swiper
        pagination={{ type: 'fraction' }}
        spaceBetween={16}
        slidesPerView={1}
        modules={[Navigation, Pagination, Thumbs]}
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        className='h-96 w-full rounded-lg'
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className='flex h-full w-full items-center justify-center'>
              <img src={slide.src} alt={slide.alt} className='block h-full' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, FreeMode, Thumbs]}
        className='thumbs mt-3 h-32 w-full'
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className='flex h-full w-full items-center justify-center'>
              <img src={slide.src} alt={slide.alt} className='block h-full' />
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </section>
  )
}

export default ImageSwiper
