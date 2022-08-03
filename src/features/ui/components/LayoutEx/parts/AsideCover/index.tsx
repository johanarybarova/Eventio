import Image from 'next/image'
import type { FC } from 'react'

import asideImage from './assets/background.jpeg'
import { Aside, Figure, Q, FigCap, Hr } from './styled'

export const AsideCover: FC = () => (
  <Aside>
    <Image
      src={asideImage}
      alt="Stormtroopers"
      objectFit="cover"
      layout="fill"
      objectPosition="right"
      placeholder="blur"
      priority
      aria-hidden="true"
    />
    <Figure>
      <Q>Great, kid. Don’t get&nbsp;cocky.</Q>
      <Hr />
      <FigCap>Han Solo</FigCap>
    </Figure>
  </Aside>
)
