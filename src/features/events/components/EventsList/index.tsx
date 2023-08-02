import type { FC } from 'react'

import { EventCard } from './parts/EventCard'
import { NavFilter } from './parts/NavFilter'
import { NavView } from './parts/NavView'
import { List, Nav } from './styled'

import { useFilterContext } from '../../context/filterEvents'
import { useViewContext, ViewType } from '../../context/viewEvents'
import { useEvents } from '../../hooks/useEvents'

type Props = {
  isProfile?: boolean
}

export const EventsList: FC<Props> = ({ isProfile }) => {
  const { filter, setFilter } = useFilterContext()
  const { view, setView } = useViewContext()
  const { events, isLoading, error } = useEvents(filter)

  if (error) {
    throw error
  }

  return (
    <>
      <Nav>
        {isProfile === true ? (
          <h2>My events</h2>
        ) : (
          <NavFilter activeFilter={filter} onChange={setFilter} />
        )}
        <NavView activeView={view} onChange={setView} />
      </Nav>
      {isLoading ? (
        <div> ...loading </div>
      ) : (
        <List isView={Boolean(view === ViewType.GRID)}>
          {events?.map((event) => (
            <li key={event.id}>
              <EventCard event={event} isRow={view === ViewType.LIST} />
            </li>
          ))}
        </List>
      )}
    </>
  )
}
