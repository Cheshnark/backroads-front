import { iterateScore } from '@/utils/iterateScore'
import styles from './LocationList.module.css'

const LocationList = () => {
  const locations = [
    {
      id: 1,
      title: 'Panes',
      score: 4.2,
      locationType: 'castle',
      body: 'Panes entre panes panotes panosos.'
    },
    {
      id: 2,
      title: 'Panes',
      score: 3.2,
      locationType: 'castle',
      body: 'Panes entre panes panotes panosos.'
    },
    {
      id: 3,
      title: 'Panes',
      score: 4.8,
      locationType: 'castle',
      body: 'Panes entre panes panotes panosos.'
    }
  ]

  return (
    <section className={`${styles.locationList} hidden md:flex flex-col gap-4`}>
      {locations.map(location => (
        <article key={location.id} className={styles.locationCard}>
          <header className='flex justify-between items-end mb-2'>
            <h3 className='font-berkshire text-3xl'>{location.title}</h3>
            <p className='text-sm'>- {location.locationType}</p>
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
