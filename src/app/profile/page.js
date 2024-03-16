'use client'

import styles from './page.module.css'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { PencilLine, Check, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

import useAuthStore from '@/stores/AuthStore'
import BikeAvatar from './components/BikeAvatar/BikeAvatar'
import ProfileMedia from './components/ProfileMedia/ProfileMedia'
import ProfileShelters from './components/ProfileShelters/ProfileShelters'

const Profile = () => {
  const [profile, setProfile] = useState(null)
  const [showPicker, setShowPicker] = useState(false)
  const [showEditdescription, setShowEditDescription] = useState(false)
  const [tempDescription, setTempDescription] = useState(null)
  const [error, setError] = useState(null)
  const [tempSocial, setTempSocial] = useState({
    website: null,
    facebook: null,
    instagram: null,
    twitter: null,
    youtube: null
  })
  const [clicked, setClicked] = useState({
    id: null,
    img: '/images/profile/cycle01.png',
    text: null
  })
  const router = useRouter()
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
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/user/profiles/${session?.data?.id}`)
      const data = await res.data

      setProfile(data.data)
      setClicked({ ...clicked, img: data.data.profile_img })
    }

    fetchProfile()
  }, [])

  useEffect(() => {
    if (session === null) {
      router.push('/')
    }
  }, [session])

  const handleSubmit = async () => {
    const profileJson = {
      description: tempDescription || profile.description,
      profileImg: clicked.img || profile?.profile_img,
      website: tempSocial.website || profile.website,
      facebook: tempSocial.facebook || profile.facebook,
      instagram: tempSocial.instagram || profile.instagram,
      twitter: tempSocial.twitter || profile.twitter,
      youtube: tempSocial.youtube || profile.youtube
    }

    try {
      const res = await axios.patch(`${process.env.NEXT_PUBLIC_URL}/api/user/profiles/${profile.id}`, profileJson, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.data
      if (!data) {
        setError({ message: 'Fetch failed, try again later' })
      }

      router.push('/')
    } catch (error) {
      setError({ message: 'Error updating profile, try again later' })
    }
  }

  return (
    <main className={styles.profile}>
      <div className={styles.profileContainer}>
        <h2 className='font-berkshire'>Profile</h2>
        <div className='md:flex md:items-baseline gap-4 mt-2'>
          {profile &&
            <section className={`${styles.profileInfo} flex flex-col gap-4`}>
              <div className={styles.profileAvatar}>
                <img onClick={() => setShowPicker(!showPicker)} src={clicked?.img || bikesArr[0].img} alt={clicked?.text} />
                {showPicker && <BikeAvatar bikesArr={bikesArr} clicked={clicked} setClicked={setClicked} setShowPicker={setShowPicker} />}
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
              <ProfileMedia profile={profile} tempSocial={tempSocial} setTempSocial={setTempSocial} />
              <button onClick={handleSubmit}>Update</button>
              {error && <p className={styles.error}>{error.message}</p>}
            </section>}
          <div className={`${styles.rigthColumn} flex flex-col gap-4`}>
            <hr className='md:hidden' />
            <ProfileShelters profile={profile} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Profile
