import styles from './Commodities.module.css'

import { Utensils, Droplet, Zap, Warehouse, Wifi, ShoppingBasket, ShowerHead, Trash2 } from 'lucide-react'

const Commodities = ({ services, locationPage }) => {
  return (
    <section className={`${styles.commodities} flex flex-wrap items-center gap-2`}>
      {locationPage && <h3 className='font-berkshire'>Services: </h3>}
      <div className='flex flex-wrap gap-2'>
        {services?.water && <div className={styles.commoditiesIcons}><Droplet /></div>}
        {services?.electricity && <div className={styles.commoditiesIcons}><Zap /></div>}
        {services?.shower && <div className={styles.commoditiesIcons}><ShowerHead /></div>}
        {services?.trash && <div className={styles.commoditiesIcons}><Trash2 /></div>}
        {services?.restaurant && <div className={styles.commoditiesIcons}><Utensils /></div>}
        {services?.gated && <div className={styles.commoditiesIcons}><Warehouse /></div>}
        {services?.wifi && <div className={styles.commoditiesIcons}><Wifi /></div>}
        {services?.shop && <div className={styles.commoditiesIcons}><ShoppingBasket /></div>}
      </div>
    </section>
  )
}

export default Commodities
