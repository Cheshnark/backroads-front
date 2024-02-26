import styles from './page.module.css'

import ImageSwiper from './components/ImageSwiper/ImageSwiper'
import Commodities from './components/Commodities/Commodities'
import Body from './components/Body/Body'
import AddComment from './components/AddComment/AddComment'
import CommentSwiper from './components/CommentSwiper/CommentSwiper'
import LocationHeader from './components/LocationHeader/LocationHeader'

const Location = () => {
  const location = {
    title: 'Panes',
    score: 3.5,
    locationType: 'Camp site',
    body: 'Lorem ipsum ipsum sum.',
    openingHours: 'Mazo de tiempo'
  }

  return (
    <main className={styles.location}>
      <LocationHeader location={location} />
      <ImageSwiper images={location.images} />
      <hr />
      <Commodities services={location.services} />
      <Body location={location} />
      <hr />
      <section className={styles.comments}>
        <AddComment />
        <hr />
        <CommentSwiper />
      </section>
    </main>
  )
}

export default Location
