import type { FC } from 'react'

import { Article, Count, Description, Name, Title, EditButton } from './styled'

type Props = {
  isRow: boolean
}

export const EventCard: FC<Props> = ({ isRow }) => (
  <Article isRow={Boolean(isRow)}>
    <time>July 4, 2022 – 5:20 PM</time>
    <Title>How to stay calm</Title>
    <Name>John Watts</Name>
    <Description>
      I will show you how to stay calm when angry in a second
    </Description>
    <Count>
      5 <span>of</span> 15
    </Count>
    <EditButton type="button" accent="primary" size="small">
      Edit
    </EditButton>
  </Article>
)
