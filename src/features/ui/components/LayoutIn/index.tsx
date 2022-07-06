import type { ReactNode, FC } from 'react'

import { Header } from '~/features/ui/components/Header'

import { Layout, VerticalCenter } from './styled'

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutIn: FC<Props> = ({ children }) => (
  <Layout>
    <Header />
    <VerticalCenter>{children}</VerticalCenter>
  </Layout>
)
