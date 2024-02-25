import styles from './Footer.module.css'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const year = (new Date()).getFullYear()
  const user = true

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} footer-container flex flex-col sm:flex-row gap-8 sm:gap-6 md:gap-12 justify-center lg:justify-between items-start`}>
        <h2 className='font-berkshire'>Backroads</h2>
        <div className={styles.navigation}>
          <h3>Navigation</h3>
          <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/map'>Map</Link></li>
            <li><Link href='/honor-code'>Honor Code</Link></li>
            <li><Link href='/faq'>FAQ</Link></li>
            {user
              ? (
                <li><Link href='/profile'>Profile</Link></li >)
              : (
                <li><Link href='/login'>Login</Link></li >)}
          </ul >
        </div >
        <div>
          <h3>Contact</h3>
          <ul className='flex flex-col gap-4'>
            <li className='flex items-center gap-2'>
              <app-phone class='contact-icon' />
              555-589-258
            </li>
            <li className='flex items-center gap-2'>
              <app-mail class='contact-icon' />
              backroads@br-app.com
            </li>
            <li className='flex items-start gap-2'>
              <app-map-pin class='contact-icon' />
              1234 Sample Street <br />
              Austin Texas 78704
            </li>
          </ul>
        </div>
        <div className='social-media flex flex-col justify-start'>
          <h3>Social Media</h3>
          <ul className='flex gap-4'>
            <li><a href='https://www.instagram.com/backroadsculture/' target='_blank' rel='noreferrer'><Facebook /></a></li>
            <li><a href='https://www.instagram.com/backroadsculture/' target='_blank' rel='noreferrer'><Twitter /></a></li>
            <li><a href='https://www.instagram.com/backroadsculture/' target='_blank' rel='noreferrer'><Linkedin /></a></li>
            <li><a href='https://www.instagram.com/backroadsculture/' target='_blank' rel='noreferrer'><Instagram /></a></li>
          </ul>
        </div>
      </div >
      <div className={`${styles.copyrightContainer} flex justify-center`}>
        <p>Backroads ©{year}</p>
      </div>
    </footer >
  )
}

export default Footer
