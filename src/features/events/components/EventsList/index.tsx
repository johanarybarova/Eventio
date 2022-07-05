import type { FC } from 'react'

import { EventCard } from './parts/EventCard'
import { NavFilter } from './parts/NavFilter'
import { NavView } from './parts/NavView'

export const EventsList: FC = () => (
  <>
    <nav>
      <NavFilter onChange={(filterType) => alert(filterType)} />
      <NavView onChange={(viewType) => alert(viewType)} />
    </nav>
    <ul>
      <li>
        <EventCard />
      </li>
      <li>
        <EventCard />
      </li>
      <li>
        <EventCard />
      </li>
    </ul>
  </>
)
