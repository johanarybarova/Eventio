import type { ReactNode, FC } from 'react'

import { Header } from '~/features/ui/components/Header'

import { Aside } from './parts/Aside'

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutEx: FC<Props> = ({ children }) => (
  <>
    <Header />
    <Aside />
    <main>{children}</main>
  </>
)
