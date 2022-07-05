import type { ReactNode, FC } from 'react'

import { Header } from '~/features/ui/components/Header'

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutIn: FC<Props> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)
