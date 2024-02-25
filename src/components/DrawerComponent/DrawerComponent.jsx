/* eslint-disable react/prop-types */

import styles from './DrawerComponent.module.css'
import Link from 'next/link'
import { X } from 'lucide-react'

// import SignOut from '../SignOut/SignOut'

const DrawerComponent = ({ user, setShowDrawer }) => {
  const handleClick = (e) => {
    if (e.target.tagName === 'ASIDE') {
      setShowDrawer(false)
    }
  }

  return (
    <aside className={styles.drawerBackground} onClick={(e) => handleClick(e)}>
      <div className={styles.drawerContainer}>
        <X className={styles.xIcon} onClick={() => setShowDrawer(false)} />
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/map'>Map</Link></li >
          <li><Link href='/honor-code'>Honor Code</Link ></li >
          <li><Link href='/faq' > FAQ</Link></li >
          {user
            ? (
              <li><Link href='/profile'>Profile</Link ></li >)
            : (
              <li><Link href='/login'>Login</Link ></li >)}
        </ul >
      </div >
    </aside >
  )
}

export default DrawerComponent
