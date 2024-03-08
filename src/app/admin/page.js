import styles from './page.module.css'

import TableContainer from './components/TableContainer/TableContainer'
import { getUsers } from './utils/adminAxios'

const Admin = async () => {
  const usersArr = await getUsers()

  return (
    <main className={styles.admin}>
      <div className={`${styles.adminContainer} flex flex-col`}>
        <h2 className='font-berkshire'>Admin</h2>
        <TableContainer usersArr={usersArr} />
      </div>
    </main>
  )
}

export default Admin
