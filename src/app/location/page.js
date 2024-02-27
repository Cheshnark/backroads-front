import styles from './page.module.css'

import ImageSwiper from './components/ImageSwiper/ImageSwiper'
import Commodities from '../../components/Commodities/Commodities'
import Body from './components/Body/Body'
import AddComment from './components/AddComment/AddComment'
import CommentSwiper from './components/CommentSwiper/CommentSwiper'
import LocationHeader from './components/LocationHeader/LocationHeader'
import LocationMap from './components/LocationMap/LocationMap'
import MapInfo from './components/MapInfo/MapInfo'

const Location = () => {
  const location = {
    coordinates: [-3.4589, 30.5489],
    title: 'Panes',
    score: 3.5,
    locationType: 'Camp site',
    body: 'Lorem ipsum ipsum sum. Lorem ipsum ipsum sum. Lorem ipsum ipsum sum. Lorem ipsum ipsum sum. Lorem ipsum ipsum sum. Lorem ipsum ipsum sum. Lorem ipsum ipsum sum.',
    address: 'Casa del mazapán, C/ de la Piruleta',
    price: '15€',
    openingHours: 'Mazo de tiempo',
    services: {
      water: true,
      electricity: true,
      shower: true,
      restaurant: true,
      gated: true,
      wifi: true,
      shop: true,
      trash: true
    }
  }

  const comments = [
    {
      user: {
        avatar: 'https://mariskalrock.com/wp-content/uploads/2020/07/lemmy-kilmister-motorhead.jpg',
        name: 'Lemmy'
      },
      date: '26/04/25',
      score: 4.5,
      body: 'Buena mierda, te ponen unas magdalenas para mojar en el whiskey cojonudas. Y la dueña te hace unas lentejas que se te va la olla, buenos vicios al Crash Bandicoot con su hijo.'
    },
    {
      user: {
        avatar: 'https://mariskalrock.com/wp-content/uploads/2020/07/lemmy-kilmister-motorhead.jpg',
        name: 'Lemmy'
      },
      date: '26/04/25',
      score: 4.5,
      body: 'Buena mierda, te ponen unas magdalenas para mojar en el whiskey cojonudas. Y la dueña te hace unas lentejas que se te va la olla, buenos vicios al Crash Bandicoot con su hijo.'
    }
  ]

  return (
    <main className={styles.location}>
      <LocationHeader location={location} />
      <ImageSwiper images={location.images} />
      <hr />
      <Commodities services={location.services} locationPage={true} />
      <Body location={location} />
      <LocationMap location={location} />
      <MapInfo location={location} />
      <hr />
      <section className={styles.comments}>
        <AddComment />
        <hr />
        <CommentSwiper comments={comments} />
      </section>
    </main>
  )
}

export default Location
