'use client'

import styles from './NavBar.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

import useAuthStore from '@/stores/AuthStore'
// import { useGetFromStore } from '@/hooks/zustandHooks'
import DrawerComponent from '../DrawerComponent/DrawerComponent'

const NavBar = () => {
  // const session = useGetFromStore(useAuthStore, (state) => state.session)
  const [showDrawer, setShowDrawer] = useState(false)
  const { session } = useAuthStore()

  return (
    <nav className={styles.navBar}>
      <h1 className='font-berkshire'><Link href='/'>Backroads</Link></h1>
      <Menu className={styles.menuIcon} onClick={() => setShowDrawer(true)} />
      <ul>
        <li><Link href='/map'>Map</Link></li>
        <li><Link href='/honor-code'>Honor Code</Link></li >
        <li><Link href='/faq'>FAQ</Link></li >
        {session
          ? (
            <li><Link href='/profile'>Profile</Link></li >)
          : (
            <li><Link href='/login'>Login</Link></li >)}
      </ul >
      {showDrawer &&
        <DrawerComponent session={session} showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      }
    </nav >
  )
}

export default NavBar
