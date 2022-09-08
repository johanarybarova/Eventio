import type { FC } from 'react'
import { useState } from 'react'

import { EventCard } from './parts/EventCard'
import { NavFilter } from './parts/NavFilter'
import { NavView } from './parts/NavView'
import { List, Nav } from './styled'
import { ViewType } from './types'

import { useEvents } from '../../hooks/useEvents'

export const EventsList: FC = () => {
  const [view, setView] = useState<ViewType>(ViewType.GRID)
  const { data, isLoading } = useEvents()
  
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
          {data?.map((event) => (
            <li key={event.id}>
              <EventCard event={event} isRow={view === ViewType.LIST} />
            </li>
          ))}
        </List>
      )}
    </>
  )
}
