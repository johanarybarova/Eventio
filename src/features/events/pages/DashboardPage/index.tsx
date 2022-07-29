import type { NextPage } from 'next'

import { EventsList } from '~/features/events/components/EventsList'
import { LayoutIn } from '~/features/ui/components/LayoutIn'

import { CreateKnob } from '../../components/EventsList/parts/Create'

export const DashboardPage: NextPage = () => (
  <LayoutIn>
    <h1>Dashboard</h1>
    <section>
      <h2>Events List</h2>
      <EventsList />
      <CreateKnob />
    </section>
  </LayoutIn>
)
