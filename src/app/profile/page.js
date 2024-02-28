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
      <h1 className='font-berkshire'>Profile</h1>
      <div>
        {profile &&
          <section>
            <div>
              <h3 >{profile?.name}</h3>
            </div>
            <div className={styles.profileSocial}>
              <h3>{profile?.email}</h3>
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
