'use client'

import styles from './BikeAvatar.module.css'

const BikeAvatar = ({ clicked, setCliked }) => {
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

  const handleClick = (e) => {
    setCliked(e.target.value)
  }

  return (
    <section className={`${styles.profileBike} flex flex-col gap-2`}>
      <h3 className='font-berkshire'>Avatar</h3>
      <div className='grid grid-cols-2 md:grid-cols-3'>
        {bikesArr.map(bike => (
          <div onClick={(e) => handleClick(e)} key={bike.id} className={`${styles.bikeCard} flex flex-col items-center ${clicked === bike.text && 'bg-bikerRed'}`}>
            <input type='radio' id={bike.text} value={bike.text} className='hidden' />
            <label htmlFor={bike.text} className='flex flex-col items-center w-full'>
              <img src={bike.img} alt={bike.text} />
              <p>{bike.text}</p>
            </label>
          </div>
        ))}
      </div>
      <hr />
    </section>
  )
}

export default BikeAvatar
