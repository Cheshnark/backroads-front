/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import './globals.css'
import { Berkshire_Swash, Rubik } from 'next/font/google'

import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/NavBar'

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-berkshire'
})

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-rubik'
})

export const metadata = {
  title: 'Amplipod',
  description: 'Convert your podcasts to text files and boost your SEO.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={`${berkshire.variable} ${rubik.variable}`}>
          <div className='mainHr'>
            <hr />
          </div>
          <div className='mainContainer'>
            <NavBar />
            <div className='innerContainer'>
              {children}
              <Footer />
            </div>
          </div>
      </body>
    </html>
  )
}
