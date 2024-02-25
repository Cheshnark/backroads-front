'use client'

import styles from './RegisterForm.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      username: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')

    }),
    onSubmit: values => {
      const registerJson = {
        data: {
          attributes: {
            email: values.email,
            name: values.username,
            password: values.password,
            password_confirmation: values.confirmPassword,
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
        id='username'
        type='text'
        placeholder='User name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
      {formik.touched.username && formik.errors.username
        ? (
          <div>{formik.errors.username}</div>)
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
      <input
        id='confirmPassword'
        type='password'
        placeholder='Confirm Password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword
        ? (
          <div>{formik.errors.confirmPassword}</div>)
        : null}
      <button>Sign In</button>
    </form>
  )
}

export default RegisterForm
