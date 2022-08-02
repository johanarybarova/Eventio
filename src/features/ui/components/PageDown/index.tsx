import Link from 'next/link'
import type { FC, ReactNode } from 'react'

import { Button } from '~/features/ui/components/Button'
import { Container } from '~/features/ui/components/Container'
import { LayoutEx } from '~/features/ui/components/LayoutEx'

import { HeadImage } from './parts/HeadImage'
import { Description, H1 } from './styled'

type Props = {
  children: NonNullable<ReactNode>
}

export const PageDown: FC<Props> = ({ children }) => (
  <LayoutEx>
    <HeadImage />
    <div>
      <Container>
        <H1>{children}</H1>
        <Description>
          Seems like Darth Vader just hits our website and drops it down. Please
          press the refresh button and everything should be fine again.{' '}
        </Description>

        <Link href="/" passHref>
          <Button size="medium" as="a">
            Refresh
          </Button>
        </Link>
      </Container>
    </div>
  </LayoutEx>
)
