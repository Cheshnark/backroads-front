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
  const [hasChanged, setHasChanged] = useState(false)
  const locationId = useParams().id
  const [comments, setComments] = useState([
    {
      user: {
        avatar: 'https://mariskalrock.com/wp-content/uploads/2020/07/lemmy-kilmister-motorhead.jpg',
        name: 'Lemmy'
      },
      date: '26/04/25',
      score: 4.5,
      body: 'If you see me walkin\' down the line. With my favorite honky tonk in mind, Well, I\'ll be here around suppertime. With my can of dinner and a bunch of fine. Beer drinkers and hell raisers, yeah. Uh-huh-huh, baby, don\'t you wanna come with me? The crowd gets loud when the band gets right, Steel guitar cryin\' through the night.'
    },
    {
      user: {
        avatar: 'https://images.genius.com/316c7d518540fae6c8d72292954d7d61.1000x1000x1.jpg',
        name: 'Ren'
      },
      date: '26/04/25',
      score: 2.5,
      body: 'I don\'t feel safe in these halls. There are bruises on the walls. There are bodies in the floors, and they breathe so loudly. I wish I could move. Get up and walk right out this tomb. Do our saviours die too soon? For my sins surround me.'
    }
  ])

  useEffect(() => {
    const fetchLocation = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/location/locations/${locationId}`)
      const data = await res.data

      setLocation(data.data)
    }

    fetchLocation()
  }, [])

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
          <AddComment setComments={setComments} setHasChanged={setHasChanged} hasChanged={hasChanged} />
          <p className={`${styles.addCommentText} hidden sm:block`}>Notice that you’re not naming lines with this syntax, just areas. When you use this syntax the lines on either end of the areas are actually getting named automatically. If the name of your grid area is foo. Notice that you’re not naming lines with this syntax, just areas. When you use this syntax the lines on either end of the areas are actually getting named automatically. If the name of your grid area is foo</p>
        </div>
        <hr />
        <CommentSwiper comments={comments} setComments={setComments} hasChanged={hasChanged} />
      </section>
    </main>
  )
}

export default Location
