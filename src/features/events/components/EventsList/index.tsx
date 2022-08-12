import ky from 'ky'
import type { FC } from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'

import { EventCard } from './parts/EventCard'
import { NavFilter } from './parts/NavFilter'
import { NavView } from './parts/NavView'
import { List, Nav } from './styled'
import { ViewType } from './types'

export const EventsList: FC = () => {
  const [view, setView] = useState<ViewType>(ViewType.GRID)

  const { data, isLoading } = useQuery('queryevents', async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const apiKey = process.env.NEXT_PUBLIC_API_KEY

    const data = await ky
      .get(`${apiUrl}events`, { headers: { APIKey: apiKey } })
      .json()

    return data
  })

  return (
    <>
      <Nav>
        <NavFilter onChange={(filterType) => alert(filterType)} />
        <NavView activeView={view} onChange={setView} />
      </Nav>
      {isLoading ? (
        <div> ...loading </div>
      ) : (
        <List isView={Boolean(view === ViewType.GRID)}>
          {data.map((event) => (
            <li key={event.id}>
              <EventCard event={event} isRow={view === ViewType.LIST} />
            </li>
          ))}
        </List>
      )}
    </>
  )
}
