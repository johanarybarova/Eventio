import type { ReactNode, FC } from 'react'

import { Header } from '~/features/ui/components/Header'

import { Layout, VerticalCenter } from './styled'

type Props = {
  children: NonNullable<ReactNode>
  headerActionComponent?: ReactNode
}

export const LayoutIn: FC<Props> = ({ children, headerActionComponent }) => (
  <Layout>
    <Header actionComponent={headerActionComponent} />
    <VerticalCenter as="main">{children}</VerticalCenter>
  </Layout>
)
