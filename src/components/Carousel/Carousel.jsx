'use client'

import styles from './Carousel.module.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules'
import { useRouter } from 'next/navigation'

import Commodities from '@/components/Commodities/Commodities'

const Carousel = () => {
  const router = useRouter()
  const slides = [
    {
      id: 1,
      img: '/images/card01.webp',
      url: 'https://backroads-front.vercel.app/location/9b884080-36f6-42da-95ef-12a82fe22493',
      title: 'Titulcia',
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
      img: '/images/card02.webp',
      url: 'https://backroads-front.vercel.app/location/9b884590-cff0-4816-9d89-4f53b21304e5',
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
      img: '/images/card03.webp',
      url: 'https://backroads-front.vercel.app/location/9b8847ba-7d6c-4976-be8e-5b5ac939aa03',
      title: 'Restaurante Taekwon',
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
      id: 4,
      img: '/images/card04.webp',
      url: 'https://backroads-front.vercel.app/location/9b884850-0e01-49b0-bde3-b7e3e9ef31f2',
      title: 'La Parrilla',
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
      img: '/images/card05.webp',
      url: 'https://backroads-front.vercel.app/location/9b8846c8-12d9-493c-9a2e-bd5b02ad476f',
      title: 'Aguilar',
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

  const handleClick = (url) => {
    router.push(url)
  }

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
          <SwiperSlide key={slide.id} onClick={() => handleClick(slide.url)}>
            <div className={`${styles.cardContainer} flex flex-col h-full w-full items-start justify-center`}>
              <img src={slide.img} alt={slide.alt} className='block' />
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
