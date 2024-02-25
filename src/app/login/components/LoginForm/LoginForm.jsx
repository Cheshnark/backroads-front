'use client'

import styles from './LoginForm.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const router = useRouter()

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
    onSubmit: values => {
      const registerJson = {
        data: {
          attributes: {
            email: values.email,
            password: values.password,
            device_name: 'Mackauly'
          }
        }
      }

      console.log(registerJson)

      router.push('/')
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
      <button>Sign In</button>
    </form>
  )
}

export default LoginForm
