import { format } from 'date-fns'
import type { FC } from 'react'

import { Article, Count, Description, Name, Title, EditButton } from './styled'

import type { Event } from '../../../../types'

type Props = {
  event: Event
  isRow?: boolean
}

export const EventCard: FC<Props> = ({ event, isRow }) => (
  <Article isRow={Boolean(isRow)}>
    <time>{format(new Date(event.startsAt), 'LLLL d, y – p')}</time>
    <Title>{event.title}</Title>

    <Name>
      {event.owner.firstName} {event.owner.lastName}
    </Name>

    <Description>{event.description}</Description>

    <Count>
      {event.attendees.length} <span>of</span> {event.capacity}
    </Count>
    <EditButton type="button" accent="primary" size="small">
      Edit
    </EditButton>
  </Article>
)
