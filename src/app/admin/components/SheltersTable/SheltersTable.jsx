import styles from './Shelters.module.css'

import { Trash, Pen } from 'lucide-react'

const SheltersTable = ({ shelters, onShowShelter, onDeleteShelter, error }) => {
  return (
    <section className={styles.sheltersTable}>
      <div className='flex items-center gap-8'>
        <h3 className='font-berkshire'>Shelters</h3>
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <table className={`${styles.tableContainer}`}>
        <tbody className='flex flex-col gap-2'>
          <tr className={`${styles.tableHeaders} grid grid-cols-4`}>
            <th>Title</th>
            <th>Type</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
          {shelters && shelters?.map(shelter => (
            <tr key={shelter.id} className='grid grid-cols-4'>
              <td>{shelter?.title}</td>
              <td>{shelter?.locationType}</td>
              <td>{shelter?.address}</td>
              <td className='flex items-center gap-2'>
                <Pen onClick={() => onShowShelter(shelter.id)} className={styles.userIcon} />
                <Trash onClick={() => onDeleteShelter(shelter.id)} className={styles.userIcon} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default SheltersTable
