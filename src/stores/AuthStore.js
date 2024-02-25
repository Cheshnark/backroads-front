/* eslint-disable camelcase */
import { persist } from 'zustand/middleware'
import { create } from 'zustand'
import axios from 'axios'

const useAuthStore = create()(
  persist(
    (set) => ({
      session: localStorage.getItem('user'),
      setSession: (session) => set({ session }),
      login: async (loginJson) => {
        const res = await axios.post('http://127.0.0.1:8000/api/login', loginJson, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const data = await res.data
        if (!data) {
          return Promise.resolve('Login error')
        }

        set({ session: data })

        return Promise.resolve(data)
      },
      register: async (registerJson) => {
        const res = await axios.post('http://127.0.0.1:8000/api/register', registerJson, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await res.data

        if (!data) {
          return Promise.resolve('Register error')
        }

        set({ session: data })

        return Promise.resolve(data)
      },
      logout: async (logoutJson) => {
        const res = await axios.post('http://127.0.0.1:8000/api/logout', logoutJson, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await res.data

        if (!data) {
          return Promise.resolve('Logout error')
        }

        set({ session: null })

        return Promise.resolve(data)
      }
    }),
    { name: 'user' }
  )
)

export default useAuthStore
