'use client'

import styles from './NavBar.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

// import useAuthStore from '@/stores/AuthStore'
// import { useGetFromStore } from '@/hooks/zustandHooks'
import DrawerComponent from '../DrawerComponent/DrawerComponent'

const NavBar = () => {
  // const session = useGetFromStore(useAuthStore, (state) => state.session)
  const user = true
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <nav className={styles.navBar}>
      <h1 className='font-berkshire'><Link href='/'>Backroads</Link></h1>
      <Menu className={styles.menuIcon} onClick={() => setShowDrawer(true)} />
      <ul>
        <li><Link href='/map'>Map</Link></li>
        <li><Link href='/honor-code'>Honor Code</Link></li >
        <li><Link href='/faq'>FAQ</Link></li >
        {user
          ? (
            <li><Link href='/profile'>Profile</Link></li >)
          : (
            <li><Link href='/login'>Login</Link></li >)}
        <li>{user}</li>
      </ul >
      {showDrawer &&
        <DrawerComponent user={user} showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      }
    </nav >
  )
}

export default NavBar
