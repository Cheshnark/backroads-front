import styles from './ProfileShelters.module.css'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { FlameKindling } from 'lucide-react'

import { iterateScore } from '@/utils/iterateScore'

const ProfileShelters = ({ profile }) => {
  const [shelters, setShelters] = useState(null)

  useEffect(() => {
    const fetchShelters = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/locations/${profile?.user_id}/locations`)
        const data = await res.data

        setShelters(data)
      } catch (error) {
        console.log('Error fetching')
      }
    }

    fetchShelters()
  }, [profile])

  return (
    <section className={styles.profileShelters}>
      <h3 className='font-berkshire'>Your shelters</h3>
      <div className={`${styles.shelterCardsContainer} flex flex-col gap-2 w-full`}>
        {shelters?.map(shelter => (
          <Link href={`/location/${shelter.id}`} key={shelter.id}>
            <div className={`${styles.shelterCard} flex justify-between`}>
              <div className='flex flex-col gap-2'>
                <h3 className='font-berkshire flex items-center'><FlameKindling />{shelter.title}</h3>
                <div className='flex'>
                  {iterateScore(shelter.score, shelter.id)}
                </div>
              </div>
              <p>- {shelter.location_type}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ProfileShelters
