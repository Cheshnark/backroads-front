import styles from './Body.module.css'

const Body = ({ location }) => {
  return (
    <div className={styles.body}>
      <h3 className='font-berkshire'>Info</h3>
      <p>{location.body}</p>
      <div className='flex'>
        <h4>Price:</h4>
        <p>{location.price}</p>
      </div>
      <div className='flex'>
        <h4>Open/Close:</h4>
        <p>{location.openingHours}</p>
      </div>
    </div>
  )
}

export default Body
