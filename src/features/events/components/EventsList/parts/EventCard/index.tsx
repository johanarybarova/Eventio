import type { FC } from 'react'

import { Button } from '~/features/ui/components/Button'

import { Article, Count, Description, Name, Title } from './styled'

type Props = {
  isRow: boolean
}

export const EventCard: FC<Props> = ({ isRow }) => (
  <Article isRow={Boolean(isRow)}>
    <time>July 4, 2022 – 5:20 PM</time>
    <Title>How to stay calm when angry</Title>
    <Name>John Watts</Name>
    <Description>
      I will show you how to stay calm when angry in a second
    </Description>
    <Count>
      5 <span>of</span> 15
    </Count>
    <Button accent="primary" size="small" type="button">
      Edit
    </Button>
  </Article>
)
