import styles from './ProfileShelters.module.css'

import Link from 'next/link'
import { FlameKindling } from 'lucide-react'

import { iterateScore } from '@/utils/iterateScore'

const ProfileShelters = () => {
  const cards = [
    {
      title: 'Jamboide',
      locationType: 'city',
      score: 3.5
    },
    {
      title: 'Jamboide',
      locationType: 'city',
      score: 3.2
    },
    {
      title: 'Jamboide',
      locationType: 'city',
      score: 3.4
    },
    {
      title: 'Jamboide',
      locationType: 'city',
      score: 4.5
    },
    {
      title: 'Jamboide',
      locationType: 'city',
      score: 4.8
    },
    {
      title: 'Jamboide',
      locationType: 'city',
      score: 2.5
    },
    {
      title: 'Jamboide',
      locationType: 'city',
      score: 1.5
    }
  ]

  return (
    <section className={styles.profileShelters}>
      <h3 className='font-berkshire'>Your shelters</h3>
      <div className={`${styles.shelterCardsContainer} flex flex-col gap-2 w-full`}>
        {cards.map(card => (
          <Link href={'/location'} key={card.score}>
            <div className={`${styles.shelterCard} flex justify-between`}>
              <div className='flex flex-col gap-2'>
                <h3 className='font-berkshire flex items-center'><FlameKindling />{card.title}</h3>
                <div className='flex'>
                  {iterateScore(card.score)}
                </div>
              </div>
              <p>- {card.locationType}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ProfileShelters
