'use client'

import styles from './BikeAvatar.module.css'

const BikeAvatar = ({ bikesArr, clicked, setCliked, setShowPicker }) => {
  const handleClick = (e) => {
    const bike = bikesArr.find((element) => {
      return element.text === e.target.value
    })

    setCliked(bike)
    setTimeout(() => {
      setShowPicker(false)
    }, 5)
  }

  return (
    <section className={`${styles.profileBike} flex flex-col gap-2`}>
      <h3 className='font-berkshire'>Avatar</h3>
      <div className='grid grid-cols-2 md:grid-cols-3'>
        {bikesArr.map(bike => (
          <div onClick={(e) => handleClick(e)} key={bike.id} className={`${styles.bikeCard} flex flex-col items-center ${clicked?.text === bike.text && 'bg-bikerRed'}`}>
            <input type='radio' id={bike.text} value={bike.text} className='hidden' />
            <label htmlFor={bike.text} className='flex flex-col items-center w-full'>
              <img src={bike.img} alt={bike.text} />
              <p>{bike.text}</p>
            </label>
          </div>
        ))}
      </div>
      <hr className='md:hidden' />
    </section>
  )
}

export default BikeAvatar
