import styles from './LocationList.module.css'
import { Star } from 'lucide-react'

const LocationList = () => {
  const locations = [
    {
      id: 1,
      title: 'Panes',
      locationType: 'castle',
      body: 'Panes entre panes panotes panosos.'
    },
    {
      id: 2,
      title: 'Panes',
      locationType: 'castle',
      body: 'Panes entre panes panotes panosos.'
    },
    {
      id: 3,
      title: 'Panes',
      locationType: 'castle',
      body: 'Panes entre panes panotes panosos.'
    }
  ]

  return (
    <section className={`${styles.locationList} hidden md:flex flex-col gap-4`}>
      {locations.map(location => (
        <article key={location.id} className={styles.locationCard}>
          <header className='flex justify-between'>
            <h3 className='font-berkshire'>{location.title}</h3>
            <p>-{location.locationType}</p>
          </header>
          <p>{location.body}</p>
          <div className='flex '>
            <Star className='bg-black' />
            <Star />
            <Star />
          </div>
        </article>
      ))}
    </section>
  )
}

export default LocationList
