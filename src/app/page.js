import styles from './page.module.css'
import Link from 'next/link'

// import Carousel from '@/components/Carousel/Carousel'

const Home = () => {
  return (
    <main className={styles.main}>
      <section className={`${styles.frontContainer} flex flex--col justify-center items-end`}>
        <div className={`${styles.cards} flex flex-col sm:flex-row justify-center gap-4`}>
        </div>
      </section>
      <section className={`${styles.shelterContainer} flex flex-col justify-center items-center`}>
        <h2 className='font-berkshire'>Shelters</h2>
        {/* <Carousel /> */}
      </section>
      <section className={`${styles.honorContainer} flex justify-center items-center`}>
        <div className={`${styles.cards} flex justify-center relative`}>
          <div className={`${styles.honorText}`}>
            <h2 className='font-berkshire'>Honor Code</h2>
            <p>Check our traveler honor code. We may be wild and stuff, but we are not chaos marauders, there&apos;s honor in our way.</p>
            <button><Link href={'/honor-code'}>Check it</Link></button>
        </div>
      </div>
    </section>
    </main >
  )
}

export default Home
