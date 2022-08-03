import type { FC } from 'react'
import { useState } from 'react'

import { EventCard } from './parts/EventCard'
import { NavFilter } from './parts/NavFilter'
import { NavView } from './parts/NavView'
import { List, Nav } from './styled'
import { ViewType } from './types'

export const EventsList: FC = () => {
  const [view, setView] = useState<ViewType>(ViewType.GRID)
  return (
    <>
      <Nav>
        <NavFilter onChange={(filterType) => alert(filterType)} />
        <NavView activeView={view} onChange={setView} />
      </Nav>

      <List isView={Boolean(view === ViewType.GRID)}>
        {[...Array(10)].map((_, index) => (
          // Index should never be used as a key for dynamic data.
          // It is fine for static data like these, will be updated in the future.
          <li key={index}>
            <EventCard isRow={view === ViewType.LIST} />
          </li>
        ))}
      </List>
    </>
  )
}
