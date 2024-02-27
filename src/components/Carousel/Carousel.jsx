'use client'

import styles from './Carousel.module.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules'

import Commodities from '@/app/location/components/Commodities/Commodities'

const Carousel = () => {
  // const slides = [
  //   {
  //     id: 1, src: '/images/home01.webp', alt: 'First'
  //   },
  //   {
  //     id: 2, src: '/images/home02.webp', alt: 'Second'
  //   },
  //   {
  //     id: 3, src: '/images/login01.webp', alt: 'Third'
  //   }
  // ]

  const slides = [
    {
      id: 1,
      img: '/images/home01.webp',
      title: 'Panes',
      body: 'Lorem ipsum ipsum sum, tracia batracia antracia en el Ganges, ranges tranges trajes. Lorem ipsum ipsum sum, tracia batracia antracia en el Ganges, ranges tranges trajes. Lorem ipsum ipsum sum, tracia batracia antracia en el Ganges, ranges tranges trajes.',
      services: {
        water: true,
        shower: true,
        trash: true,
        wifi: true,
        shop: true
      }
    },
    {
      id: 2,
      img: '/images/home02.webp',
      title: 'Siberia',
      body: 'Lorem ipsum ipsum sum, tracia batracia antracia en el Ganges, ranges tranges trajes. Lorem ipsum ipsum sum, tracia batracia antracia en el Ganges, ranges tranges trajes. Lorem ipsum ipsum sum, tracia batracia antracia en el Ganges, ranges tranges trajes.',
      services: {
        water: true,
        shower: true,
        trash: true,
        wifi: true,
        shop: true
      }
    },
    {
      id: 3,
      img: '/images/login01.webp',
      title: 'Tulcia',
      body: 'Lorem ipsum ipsum sum, tracia batracia antracia en el Ganges, ranges tranges trajes. Lorem ipsum ipsum sum, tracia batracia antracia en el Ganges, ranges tranges trajes. Lorem ipsum ipsum sum, tracia batracia antracia en el Ganges, ranges tranges trajes.',
      services: {
        water: true,
        shower: true,
        trash: true,
        wifi: true,
        shop: true
      }
    }
    ,
    {
      id: 4,
      img: '/images/login01.webp',
      title: 'Tulcia',
      body: 'Lorem ipsum ipsum sum, tracia batracia antracia en el Ganges, ranges tranges trajes. Lorem ipsum ipsum sum, tracia batracia antracia en el Ganges, ranges tranges trajes. Lorem ipsum ipsum sum, tracia batracia antracia en el Ganges, ranges tranges trajes.',
      services: {
        water: true,
        shower: true,
        trash: true,
        wifi: true,
        shop: true
      }
    },
    {
      id: 5,
      img: '/images/login01.webp',
      title: 'Tulcia',
      body: 'Lorem ipsum ipsum sum, tracia batracia antracia en el Ganges, ranges tranges trajes. Lorem ipsum ipsum sum, tracia batracia antracia en el Ganges, ranges tranges trajes. Lorem ipsum ipsum sum, tracia batracia antracia en el Ganges, ranges tranges trajes.',
      services: {
        water: true,
        shower: true,
        trash: true,
        wifi: true,
        shop: true
      }
    }
  ]

  return (
    <section className={`${styles.carousel} container px-4 md:px-8`}>
      <Swiper
        navigation
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
        modules={[Navigation, Pagination, Thumbs, FreeMode]}
        freeMode={true}
        className='h-full w-full'
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className={`${styles.cardContainer} flex flex-col h-full w-full items-start justify-center`}>
              <img src={slide.img} alt={slide.alt} className='block h-full' />
              <div className='flex flex-col'>
                <h4 className='font-berkshire'>{slide.title}</h4>
                <p>{slide.body}</p>
              </div>
              <Commodities services={slide.services} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Carousel
