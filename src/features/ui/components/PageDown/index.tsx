import Link from 'next/link'
import type { FC } from 'react'

import { Button } from '~/features/ui/components/Button'
import { Container } from '~/features/ui/components/Container'
import { LayoutEx } from '~/features/ui/components/LayoutEx'

import { HeadImage } from './parts/HeadImage'
import { Description, H1 } from './styled'

type Props = {
  message: string
}

export const PageDown: FC<Props> = ({ message }) => (
  <LayoutEx>
    <HeadImage />
    <div>
      <Container>
        <H1>{message}</H1>
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
