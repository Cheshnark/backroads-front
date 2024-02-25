'use client'

import styles from './SignOut.module.css'
import { LogOut } from 'lucide-react'
import useAuthStore from '@/stores/AuthStore'

export default function SignOut () {
  const { logout } = useAuthStore()

  const handleSignOut = async () => {
    logout()
      .then((user) => {
        console.log('Logout successful', user)
        window.location.href = 'https://app.amplipod.io/login'
      })
      .catch((error) => {
        console.log('Logout failed', error)
      })
  }

  return (
    <button className={styles.buttonOut} onClick={handleSignOut}>
      <span className={styles.icon}><LogOut /></span>
      Logout
    </button>
  )
}
