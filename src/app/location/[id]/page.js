'use client'

import styles from './page.module.css'

import axios from 'axios'
import { useParams } from 'next/navigation'

import ImageSwiper from './components/ImageSwiper/ImageSwiper'
import Commodities from '@/components/Commodities/Commodities'
import Body from './components/Body/Body'
import AddComment from './components/AddComment/AddComment'
import CommentSwiper from './components/CommentSwiper/CommentSwiper'
import LocationHeader from './components/LocationHeader/LocationHeader'
import LocationMap from './components/LocationMap/LocationMap'
import MapInfo from './components/MapInfo/MapInfo'
import { useEffect, useState } from 'react'

const Location = () => {
  const [location, setLocation] = useState(null)
  const locationId = useParams().id

  useEffect(() => {
    const fetchLocation = async () => {
      const res = await axios.get(`http://127.0.0.1:8000/api/location/locations/${locationId}`)
      const data = await res.data

      setLocation(data.data)
    }

    fetchLocation()
  }, [])

  const comments = [
    {
      id: 1,
      user: {
        avatar: 'https://mariskalrock.com/wp-content/uploads/2020/07/lemmy-kilmister-motorhead.jpg',
        name: 'Lemmy'
      },
      date: '26/04/25',
      score: 4.5,
      body: 'Buena mierda, te ponen unas magdalenas para mojar en el whiskey cojonudas. Y la dueña te hace unas lentejas que se te va la olla, buenos vicios al Crash Bandicoot con su hijo.'
    },
    {
      id: 2,
      user: {
        avatar: 'https://mariskalrock.com/wp-content/uploads/2020/07/lemmy-kilmister-motorhead.jpg',
        name: 'Lemmy'
      },
      date: '26/04/25',
      score: 4.5,
      body: 'Buena mierda, te ponen unas magdalenas para mojar en el whiskey cojonudas. Y la dueña te hace unas lentejas que se te va la olla, buenos vicios al Crash Bandicoot con su hijo.'
    },
    {
      id: 3,
      user: {
        avatar: 'https://mariskalrock.com/wp-content/uploads/2020/07/lemmy-kilmister-motorhead.jpg',
        name: 'Lemmy'
      },
      date: '26/04/25',
      score: 4.5,
      body: 'Buena mierda, te ponen unas magdalenas para mojar en el whiskey cojonudas. Y la dueña te hace unas lentejas que se te va la olla, buenos vicios al Crash Bandicoot con su hijo.'
    }
  ]

  return (
    <main className={styles.location}>
      <LocationHeader location={location} />
      <ImageSwiper images={location?.images} />
      <hr />
      <section className={`${styles.info} sm:flex sm:justify-between`}>
        <div className={`${styles.infoBody} sm:flex sm:flex-col`}>
          <Commodities services={location?.services} locationPage={true} />
          <Body location={location} />
        </div>
        <div className={`${styles.infoMap} sm:flex sm:flex-col`}>
          <LocationMap location={location} />
          <MapInfo location={location} />
        </div>
      </section>
      <hr />
      <section className={styles.comments}>
        <h3 className='font-berkshire'>Help other riders</h3>
        <div className='sm:flex sm: justify-between sm:items-start'>
          <AddComment />
          <p className={`${styles.addCommentText} hidden sm:block`}>Notice that you’re not naming lines with this syntax, just areas. When you use this syntax the lines on either end of the areas are actually getting named automatically. If the name of your grid area is foo. Notice that you’re not naming lines with this syntax, just areas. When you use this syntax the lines on either end of the areas are actually getting named automatically. If the name of your grid area is foo</p>
        </div>
        <hr />
        <CommentSwiper comments={comments} />
      </section>
    </main>
  )
}

export default Location
