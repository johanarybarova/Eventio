import type { FC } from 'react'

import { Aside, Figure, Q, FigCap, Hr } from './styled'

export const AsideCover: FC = () => (
  <Aside>
    <Figure>
      <Q>Great, kid. Don’t get&nbsp;cocky.</Q>
      <Hr />
      <FigCap>Han Solo</FigCap>
    </Figure>
  </Aside>
)
