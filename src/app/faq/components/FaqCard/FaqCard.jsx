import styles from './FaqCard.module.css'

const FaqCard = ({ card }) => {
  return (
    <div className={styles.faqCard}>
      <h3>{ card?.title}</h3>
      <p>{ card?.body}</p>
    </div>
  )
}

export default FaqCard
