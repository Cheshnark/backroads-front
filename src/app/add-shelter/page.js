import styles from './page.module.css'

import AddMap from './components/AddMap/AddMap'
import AddForm from './components/AddForm/AddForm'

const AddShelter = () => {
  return (
    <main className={styles.addShelter}>
      <h2 className='font-berkshire'>Add a Shelter</h2>
      <div className='flex gap-2'>
        <AddMap />
        <AddForm />
      </div>
    </main>
  )
}

export default AddShelter
