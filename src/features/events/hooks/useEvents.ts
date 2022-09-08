import { useQuery } from 'react-query'

import { api } from '~/features/api/client'

import type { Event } from '../types'

const useEvents = () => {
  const result = useQuery<Event[]>('queryevents', async () => {
    const data: Event[] = await api.get('events').json()

    return data
  })

  return { ...result }
}

export { useEvents }
