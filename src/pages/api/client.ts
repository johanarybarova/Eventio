import ky from 'ky'

const apiUrl = process.env.NEXT_PUBLIC_API_URL
const apiKey = process.env.NEXT_PUBLIC_API_KEY

const api = ky.create({
  prefixUrl: apiUrl,
  headers: { APIKey: apiKey },
})

export { api }
