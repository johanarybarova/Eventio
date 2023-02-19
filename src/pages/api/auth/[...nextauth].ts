import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

import type { User } from '~/features/events/types'
import { api } from '~/pages/api/client'

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialProvider({
      type: 'credentials',
      credentials: {},
      
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials, _req) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        try {
          const response = await api.post('auth/native', {
            json: {
              email,
              password,
            },
          })

          if (response.status !== 200) {
            return null
          }

          const user: User = await response.json()
          console.log(user)
          return user
        } catch (error) {
          console.log(error)
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
}

export default NextAuth(authOptions)
