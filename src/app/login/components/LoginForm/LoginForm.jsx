'use client'

import styles from './LoginForm.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import useAuthStore from '@/stores/AuthStore'

const LoginForm = () => {
  const [error, setError] = useState(null)
  const router = useRouter()
  const { login } = useAuthStore()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Required')

    }),
    onSubmit: async values => {
      const loginJson = {
        data: {
          attributes: {
            email: values.email,
            password: values.password,
            device_name: 'Mackauly'
          }
        }
      }

      const result = await login(loginJson)
      if (result.error) {
        console.log()
        setError(result.error)
      } else {
        router.push('/')
      }
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className={`${styles.registerForm} flex flex-col gap-4`}>
      <input
        id='email'
        type='email'
        placeholder='Email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email
        ? (
          <div>{formik.errors.email}</div>)
        : null}
      <input
        id='password'
        type='password'
        placeholder='Password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password
        ? (
          <div>{formik.errors.password}</div>)
        : null}
      <button type='submit'>Sign In</button>
      {error && <p className={styles.loginError}>{error}</p>}
    </form>
  )
}

export default LoginForm
