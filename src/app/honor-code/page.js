import styles from './page.module.css'

import HonorCard from './components/HonorCard/HonorCard'

const HonorCode = () => {
  const honorCards = [
    {
      title: 'Parking ',
      body: 'Utilize designated spots responsibly, ensuring motorcycles are parked securely and upright to prevent any potential damage. Minimize noise disturbances and respect surrounding vehicles and pedestrians. Dispose of any trash appropriately and adhere to posted guidelines for a tidy and organized parking area. By following these principles, contribute to a positive atmosphere for all motorcycle enthusiasts and maintain the integrity of the parking facility.'
    },
    {
      title: 'Camping ',
      body: 'Respect nature by leaving no trace, disposing of waste properly, and minimizing impact on ecosystems. Follow fire safety guidelines, respect quiet hours, and camp only in designated areas. Be prepared with proper gear and knowledge of emergency procedures. Respect wildlife and fellow campers, and share your outdoor skills responsibly. Leave a positive impact by leaving the camping area better than you found it.'
    },
    {
      title: 'Environment ',
      body: 'Prioritize eco-conscious choices by selecting fuel-efficient motorcycles and maintaining them responsibly. Respect designated off-road areas to minimize ecological impact and preserve natural habitats. Contribute to environmental conservation efforts by properly disposing of waste and participating in community clean-up initiatives. Share knowledge about sustainable riding practices with fellow enthusiasts to foster a culture of environmental stewardship within the motorcycle community. Together, let&apos;s ride responsibly and safeguard our planet&apos;s beauty for generations to come.'
    },
    {
      title: 'Honor between punks ',
      body: 'Within our community, we uphold principles of diversity, DIY ethics, and solidarity, steadfastly rejecting all forms of discrimination, championing enthusiastic consent, actively advocating for meaningful social change, and nurturing a culture of integrity and authenticity grounded in mutual respect, accountability, and collective empowerment, ensuring that punk remains a beacon of rebellion and unity for generations to come.'
    }
  ]

  return (
    <main className={styles.main}>
      <section className={`${styles.frontContainer} flex justify-center items-end`}>
        <div className={styles.cardContainer}>
          <h2 className='font-berkshire'>Honor Code</h2>
          <p>Check our traveler honor code. We may be wild and stuff, but we are not chaos marauders, there&apos;s honor in our way.</p>
        </div>
      </section>
      <section className={`${styles.codeContainer} flex flex-col justify-center items-center`}>
        <div className={styles.codeTitle}>
          <h2 className='font-berkshire'>Think before you act</h2>
          <p>No one wants to ride along an asshole, don&apos;t be someone you wouldn&apos;t like to ride along with. Vibe, chill, drink, smoke, raise hell, but don&apos;t be an asshole. Even helmet is more optional than being an asshole. Though maybe not wearing helmet is an alpha asshole movement too.</p>
        </div>
        <div className={`${styles.honorCardsContainer} flex flex-col md:grid md:grid-cols-2 items-center md:items-start gap-8`}>
          {honorCards.map(card => (
            <HonorCard key={card.id} card={card} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default HonorCode
