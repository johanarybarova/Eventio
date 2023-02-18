import ky from 'ky'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, _req) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        // Set up the request body
        const body = {
          email,
          password,
        }

        // Set up the request headers
        const headers = {
          'Content-Type': 'application/json',
          apiKey: process.env.NEXT_PUBLIC_API_KEY,
        }

        // Send the POST request to the /auth/native endpoint
        const response = await ky.post(
          'https://testproject-api-v2.strv.com/auth/native',
          {
            body: JSON.stringify(body),
            headers,
          }
        )

        // Check the response status to see if the request was successful
        if (response.status !== 200) {
          return null
        }

        // If the request was successful, return the user object
        const user = await response.json()
        console.log(user)
        return user
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
}

export default NextAuth(authOptions)
