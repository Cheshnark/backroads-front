import styles from './page.module.css'

import Link from 'next/link'

const NotFound = () => {
  return (
    <main className={styles.notFound}>
      <div className={styles.notFoundContainer}>
        <h2 className='font-berkshire'>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </main>
  )
}

export default NotFound
