import styles from './page.module.css'
import Link from 'next/link'

import LoginForm from './components/LoginForm/LoginForm'

const Register = () => {
  return (
    <main className={`${styles.register} md:flex`}>
      <div className='flex flex-col justify-center items-center md:w-6/12 p-12'>
        <div className={`${styles.registerFormContainer} flex flex-col gap-6 md:relative md:bottom-12 my-12`}>
          <div className='text-center'>
            <h2 className='font-berkshire text-4xl'>Login</h2>
          </div>
          <LoginForm />
        </div>
        <footer>
          <p>Don&apos;t have an account yet? <Link href="/register" className='font-bold hover:text-gray-700'>Sign up</Link></p>
        </footer>
      </div>
      <div className={`${styles.rightImage} hidden md:block w-6/12`}>
      </div>
    </main>
  )
}

export default Register
