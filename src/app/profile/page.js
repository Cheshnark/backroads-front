'use client'

import styles from './page.module.css'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { PencilLine, Check, X } from 'lucide-react'

import useAuthStore from '@/stores/AuthStore'
import BikeAvatar from './components/BikeAvatar/BikeAvatar'
import ProfileMedia from './components/ProfileMedia/ProfileMedia'
import ProfileShelters from './components/ProfileShelters/ProfileShelters'

const Profile = () => {
  const [profile, setProfile] = useState(null)
  const [showPicker, setShowPicker] = useState(false)
  const [showEditdescription, setShowEditDescription] = useState(false)
  const [tempDescription, setTempDescription] = useState(null)
  const [tempSocial, setTempSocial] = useState({
    website: null,
    facebook: null,
    instagram: null,
    twitter: null,
    youtube: null
  })
  const [clicked, setCliked] = useState({
    id: 111,
    img: '/images/profile/cycle01.png',
    text: 'Mop'
  })
  const { session } = useAuthStore()

  const bikesArr = [
    {
      id: 111,
      img: '/images/profile/cycle01.png',
      text: 'Mop'
    },
    {
      id: 112,
      img: '/images/profile/cycle02.png',
      text: 'Scooter'
    },
    {
      id: 113,
      img: '/images/profile/cycle03.png',
      text: 'Electric'
    },
    {
      id: 114,
      img: '/images/profile/cycle04.png',
      text: 'Sport'
    },
    {
      id: 115,
      img: '/images/profile/cycle05.png',
      text: 'Cross'
    },
    {
      id: 116,
      img: '/images/profile/cycle06.png',
      text: 'Touring'
    },
    {
      id: 117,
      img: '/images/profile/cycle07.png',
      text: 'Chopper'
    },
    {
      id: 118,
      img: '/images/profile/cycle08.png',
      text: 'Bobber'
    },
    {
      id: 119,
      img: '/images/profile/cycle09.png',
      text: 'Cafe Racer'
    }
  ]

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get(`http://127.0.0.1:8000/api/user/profiles/${session?.data?.id}`)
      const data = await res.data

      setProfile(data.data)
    }

    fetchProfile()
  }, [])

  const handleSubmit = () => {
    console.log(tempDescription)
    console.log(tempSocial)
    console.log(clicked)
  }

  return (
    <main className={styles.profile}>
      <div className={styles.profileContainer}>
        <h2 className='font-berkshire'>Profile</h2>
        <div className='md:flex md:items-baseline gap-4 mt-2'>
          {profile &&
            <section className={`${styles.profileInfo} flex flex-col gap-4`}>
              <div className={styles.profileAvatar}>
                <img onClick={() => setShowPicker(!showPicker)} src={clicked?.img} alt={clicked?.text} />
                {showPicker && <BikeAvatar bikesArr={bikesArr} clicked={clicked} setCliked={setCliked} setShowPicker={setShowPicker} />}
              </div>
              <div>
                <h3 className='font-rubik'><span className='font-berkshire'>User name: </span>{profile?.name}</h3>
                <h4 className='font-rubik'><span className='font-berkshire'>Email: </span>{profile?.email}</h4>
              </div>
              <div className={styles.profileDescription}>
                <div className='flex items-center gap-2'>
                  <h4 className='font-berkshire'>Description</h4>
                  {!showEditdescription
                    ? (
                      <PencilLine onClick={() => setShowEditDescription(true)} />)
                    : (
                      <div className='flex items-center gap-2'>
                        <Check onClick={() => setShowEditDescription(false)} />
                        <X onClick={() => {
                          setTempDescription(null)
                          setShowEditDescription(false)
                        }} />
                      </div>)}
                </div>
                {!showEditdescription
                  ? (
                    <p>{tempDescription || profile?.description}</p>)
                  : (
                    <textarea onChange={(e) => setTempDescription(e.target.value)} cols="30" rows="10" value={tempDescription || profile?.description} />)}
              </div>
              <ProfileMedia tempSocial={tempSocial} setTempSocial={setTempSocial} />
              <button onClick={handleSubmit}>Update</button>
            </section>}
          <div className={`${styles.rigthColumn} flex flex-col gap-4`}>
            <hr className='md:hidden' />
            <ProfileShelters />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Profile
