import { isAfter, isBefore } from 'date-fns'
import { useMemo } from 'react'
import { useQuery } from 'react-query'

import { api } from '~/pages/api/client'

import { FilterType } from '../context/filterEvents'
import type { Event } from '../types'

const { ALL, FUTURE, PAST } = FilterType

const sorts = {
  asc: (a: Event, b: Event) => (a.startsAt < b.startsAt ? -1 : 1),
  desc: (a: Event, b: Event) => (a.startsAt > b.startsAt ? -1 : 1),
}

const filters = {
  future: (event: Event) => isAfter(new Date(event.startsAt), new Date()),
  past: (event: Event) => isBefore(new Date(event.startsAt), new Date()),
}

const listOrders = {
  [ALL]: (events: Event[]) => [...events].sort(sorts.asc),
  [FUTURE]: (events: Event[]) => events.filter(filters.future).sort(sorts.asc),
  [PAST]: (events: Event[]) => events.filter(filters.past).sort(sorts.desc),
}

const earlyData: Event[] = []

const useEvents = (filter: FilterType) => {
  const result = useQuery<Event[], Error>('queryevents', async () => {
    const response = await api.get('events')

    if (!response.ok) {
      throw new Error(`Failed to load events`)
    }

    const out: Event[] = await response.json()

    return out
  })

  const { data = earlyData } = result

  const listOrder = listOrders[filter]
  const events = useMemo(() => listOrder(data), [data, listOrder])

  return { ...result, events }
}

export { useEvents }
