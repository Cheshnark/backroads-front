'use client'

import styles from './SignOut.module.css'
import { PowerOff } from 'lucide-react'
import useAuthStore from '@/stores/AuthStore'

export default function SignOut () {
  const { logout, session } = useAuthStore()

  const handleSignOut = async () => {
    const logoutJson = {
      data: {
        attributes: {
          id: session.data.attributes.id,
          email: session.data.attributes.email,
          device_name: 'Mackauly'
        },
        meta: {
          token: session.meta
        }
      }
    }

    logout(logoutJson)
      .then((user) => {
        console.log('Logout successful', user)
        window.location.href = 'https://backroads-front.vercel.app/'
      })
      .catch((error) => {
        console.log('Logout failed', error)
      })
  }

  return (
    <button className={styles.buttonOut} onClick={handleSignOut}>
      <span className={styles.icon}><PowerOff /></span>
    </button>
  )
}
