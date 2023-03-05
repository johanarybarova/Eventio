import type { NextPage } from 'next'

import { EventsList } from '~/features/events/components/EventsList'
import { Container } from '~/features/ui/components/Container'
import { SignedInUser } from '~/features/ui/components/Header/parts/SignedInUser'
import { LayoutIn } from '~/features/ui/components/LayoutIn'
import { ScreenReaderOnly } from '~/features/ui/components/ScreenReaderOnly'

import { CreateKnob } from '../../components/EventsList/parts/CreateKnob'

export const DashboardPage: NextPage = () => {

  return (
    <LayoutIn
      headerActionComponent={<SignedInUser />}
    >
      <Container>
        <h1 className={ScreenReaderOnly()}>Dashboard</h1>
        <section>
          <h2 className={ScreenReaderOnly()}>Events List</h2>
          <EventsList />
          <CreateKnob />
        </section>
      </Container>
    </LayoutIn>
  )
}
