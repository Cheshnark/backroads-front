import styles from './Body.module.css'

const Body = ({ location }) => {
  return (
    <div className={styles.body}>
      <h3 className='font-berkshire'>Info</h3>
      <p className={styles.bodyParagraph}>{location.body}</p>
      <div className={styles.bodyPLusInfo}>
        <div className='flex gap-2'>
          <h4>Price:</h4>
          <p>{location.price}</p>
        </div>
        <div className='flex gap-2'>
          <h4>Open/Close:</h4>
          <p>{location.openingHours}</p>
        </div>
      </div>
    </div>
  )
}

export default Body
