/* eslint-disable camelcase */
import { persist } from 'zustand/middleware'
import { create } from 'zustand'
import axios from 'axios'

const useAuthStore = create()(
  persist(
    (set) => ({
      session: localStorage.getItem('user') && typeof window !== 'undefined' ? localStorage.getItem('user') : null,
      setSession: (session) => set({ session }),
      login: async (loginJson) => {
        try {
          const res = await axios.post('http://127.0.0.1:8000/api/login', loginJson, {
            headers: {
              'Content-Type': 'application/json'
            }
          })

          const data = await res.data
          if (!data) {
            return Promise.resolve({ error: 'Login error' })
          }

          set({ session: data })

          return Promise.resolve(data)
        } catch (error) {
          console.error('Error during login request:', error)
          return { error: 'Wrong credentials' }
        }
      },
      register: async (registerJson) => {
        try {
          const res = await axios.post('http://127.0.0.1:8000/api/register', registerJson, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const data = await res.data

          if (!data) {
            return Promise.resolve({ error: 'Register error' })
          }

          set({ session: data })

          return Promise.resolve(data)
        } catch (error) {
          console.error('Error during sign up request:', error)
          return { error: 'Error during sign up, try again later' }
        }
      },
      logout: async (logoutJson) => {
        const res = await axios.post('http://127.0.0.1:8000/api/logout', logoutJson, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await res.data

        if (!data) {
          return Promise.resolve({ error: 'Logout error' })
        }

        set({ session: null })

        return Promise.resolve(data)
      }
    }),
    { name: 'user' }
  )
)

export default useAuthStore
