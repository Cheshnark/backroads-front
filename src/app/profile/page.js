'use client'

import styles from './page.module.css'

import axios from 'axios'
import useAuthStore from '@/stores/AuthStore'
import { useEffect, useState } from 'react'

const Profile = () => {
  const [profile, setProfile] = useState(null)
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
      <h2 className='font-berkshire'>Profile</h2>
      <div>
        {profile &&
          <section>
            <div>
              <h3 className='font-rubik'>User name: {profile?.name}</h3>
              <h4>Email: {profile?.email}</h4>
            </div>
            <div>
              <h4 className='font-berkshire'>Description</h4>
              <p>{profile?.description}</p>
            </div>
            <div className={styles.profileSocial}>
              <p><span>Web: </span>{profile?.website}</p>
              <p><span>Facebook: </span>{profile?.facebook}</p>
              <p><span>Instagram: </span>{profile?.instagram}</p>
              <p><span>Twitter: </span>{profile?.twitter}</p>
              <p><span>Youtube: </span>{profile?.youtube}</p>
            </div>
          </section>}
        <div>
          <section className={styles.profileBike}>

          </section>
          <section className={styles.profileShelters}>

          </section>
        </div>
      </div>
    </main>
  )
}

export default Profile
