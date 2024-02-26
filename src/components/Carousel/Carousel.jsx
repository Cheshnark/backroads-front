'use client'

import styles from './Carousel.module.css'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

const Carousel = () => {
  const slides = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ]

  return (
    <section className={styles.carousel}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>Slide 1</SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Carousel
