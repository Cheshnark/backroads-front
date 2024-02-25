/* eslint-disable camelcase */
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { persist } from 'zustand/middleware'
import { create } from 'zustand'

const supabase = createClientComponentClient()

const useAuthStore = create()(
  persist(
    (set) => ({
      session: false,
      setSession: (session) => set({ session }),
      login: async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        })
        if (error) return Promise.reject(error)

        set({ session: true })
        return Promise.resolve(data.user)
      },
      register: async (email, password) => {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${location.origin}/login`
          }
        })
        if (error) return Promise.reject(error)

        return Promise.resolve(data.user)
      },
      checkEmail: async (email) => {
        const { data, error } = await supabase
          .from('profiles')
          .select('id_profile')
          .eq('email', email)
        console.log(data)
        if (error) return true
        if (data.length > 0) { return true } else { return false }
      },
      logout: async () => {
        const { data, error } = await supabase.auth.signOut()
        if (error) return Promise.reject(error)
        localStorage.removeItem('global')
        set({ session: false })
        return Promise.resolve(data)
      }
    }),
    { name: 'global' }
  )
)

export default useAuthStore
