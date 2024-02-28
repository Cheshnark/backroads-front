'use client'

import styles from './page.module.css'

import axios from 'axios'
import { useEffect, useState } from 'react'

import useAuthStore from '@/stores/AuthStore'
import BikeAvatar from './components/BikeAvatar/BikeAvatar'
import ProfileMedia from './components/ProfileMedia/ProfileMedia'
import ProfileShelters from './components/ProfileShelters/ProfileShelters'

const Profile = () => {
  const [profile, setProfile] = useState(null)
  const [clicked, setCliked] = useState(null)
  const { session } = useAuthStore()

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get(`http://127.0.0.1:8000/api/user/profiles/${session?.data?.id}`)
      const data = await res.data

      setProfile(data.data)
    }

    fetchProfile()
  }, [])

  return (
    <main className={styles.profile}>
      <div className={styles.profileContainer}>
        <h2 className='font-berkshire'>Profile</h2>
        <div>
          {profile &&
            <section className={`${styles.profileInfo} flex flex-col gap-4`}>
              <div>
                <h3 className='font-rubik'><span className='font-berkshire'>User name: </span>{profile?.name}</h3>
                <h4 className='font-rubik'><span className='font-berkshire'>Email: </span>{profile?.email}</h4>
              </div>
              <div>
                <h4 className='font-berkshire'>Description</h4>
                <p>{profile?.description}</p>
              </div>
              <ProfileMedia />
            </section>}
          <div>
            <hr />
            <BikeAvatar profile={profile} clicked={clicked} setCliked={setCliked} />
            <ProfileShelters />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Profile
