import styles from './page.module.css'

import TableContainer from './components/TableContainer/TableContainer'
import { getShelters, getUsers } from './utils/adminAxios'

const Admin = async () => {
  const usersArr = await getUsers()
  const sheltersArr = await getShelters()

  return (
    <main className={styles.admin}>
      <div className={`${styles.adminContainer} flex flex-col`}>
        <h2 className='font-berkshire'>Admin</h2>
        <TableContainer usersArr={usersArr} sheltersArr={sheltersArr} />
      </div>
    </main>
  )
}

export default Admin
