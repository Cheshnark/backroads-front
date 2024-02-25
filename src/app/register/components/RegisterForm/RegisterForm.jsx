'use client'

import styles from './RegisterForm.module.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const RegisterForm = () => {
  const [data, setData] = useState()
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      userName: '',
      password: ''
    }
  })
  const processForm = data => setData(data)

  return (
    <form onSubmit={handleSubmit(processForm)} className={`${styles.registerForm} flex flex-col gap-4`}>
      <input
        {...register('email', { required: 'Email is required' })}
        type='text'
        placeholder='Email'
      />
      {errors.email?.message && <p className={styles.registerError}>{errors.email.message}</p>}
      <input
        {...register('userName', { required: 'User name is required' })}
        type='text'
        placeholder='User Name'
      />
      {errors.userName?.message && <p className={styles.registerError}>{errors.userName.message}</p>}
      <input
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must have at least 8 characters'
          }
        })}
        type='text'
        placeholder='Password'
      />
      {errors.password?.message && <p className={styles.registerError}>{errors.password.message}</p>}
      <button>Sign In</button>

      <div className='flex-1 rounded-lg bg-cyan-600 p-8 text-white'>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </form>
  )
}

export default RegisterForm
