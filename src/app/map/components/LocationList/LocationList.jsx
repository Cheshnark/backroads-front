import styles from './LocationList.module.css'

import Link from 'next/link'

import { iterateScore } from '@/utils/iterateScore'

const LocationList = ({ locations }) => {
  return (
    <section className={`${styles.locationList} hidden md:flex flex-col gap-4`}>
      {locations?.map(location => (
        <article key={location.id} className={styles.locationCard}>
          <header className='flex justify-between items-end mb-2'>
            <Link href={`/location/${location.id}`}><h3 className='font-berkshire text-3xl'>{location.title}</h3></Link>
            <p className='text-sm'>- {location.location_type}</p>
          </header>
          <p>{location.body}</p>
          <div className='flex mt-4'>
            {iterateScore(location.score)}
          </div>
        </article>
      ))}
    </section>
  )
}

export default LocationList
