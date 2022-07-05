import type { NextPage } from 'next'

import { EventsList } from '~/features/events/components/EventsList'
import { LayoutIn } from '~/features/ui/components/LayoutIn'

import { CreateButton } from '../../components/EventsList/parts/CreateButton'

export const DashboardPage: NextPage = () => (
  <LayoutIn>
    <h1>Dashboard</h1>
    <section>
      <h2>Events List</h2>
      <EventsList />
      <CreateButton />
    </section>
  </LayoutIn>
)
