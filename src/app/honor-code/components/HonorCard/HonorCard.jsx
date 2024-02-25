import styles from './HonorCard.module.css'

const HonorCard = ({ card }) => {
  return (
    <div className={styles.honorCard}>
      <h3>{card?.title}</h3>
      <p>{card?.body}</p>
    </div>
  )
}

export default HonorCard
