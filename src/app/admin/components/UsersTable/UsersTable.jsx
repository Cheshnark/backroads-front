import styles from './UsersTable.module.css'

import { Trash, ShieldAlert } from 'lucide-react'

const UsersTable = ({ users, updateUser, deleteUser, error }) => {
  return (
    <section className={`${styles.usersTable}`}>
      <div className='flex items-center gap-8'>
        <h3 className='font-berkshire'>Users</h3>
        {error && <p className={styles.error}>{error}</p> }
      </div>
      <table className={`${styles.tableContainer}`}>
        <tbody className='flex flex-col gap-2'>
          <tr className={`${styles.tableHeaders} grid grid-cols-4`}>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
          {users && users?.map(user => (
            <tr key={user.id} className='grid grid-cols-4'>
              <td>{user?.attributes.email}</td>
              <td>{user?.attributes.name}</td>
              <td>{user?.type}</td>
              <td className='flex items-center gap-2'>
                <ShieldAlert onClick={() => updateUser(user.id, user.type)} className={styles.userIcon} />
                <Trash onClick={() => deleteUser(user.id)} className={styles.userIcon} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default UsersTable
