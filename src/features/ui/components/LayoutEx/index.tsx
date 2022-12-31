import type { ReactNode, FC } from 'react'

import { Header } from '~/features/ui/components/Header'

import { AsideCover } from './parts/AsideCover'
import { Layout, Main } from './styled'

type Props = {
  children: NonNullable<ReactNode>
  topRight: ReactNode
}

export const LayoutEx: FC<Props> = ({ children, topRight }) => (
  <Layout>
    <Header absolute topRightComponent={topRight} />
    <AsideCover />
    <Main>{children}</Main>
  </Layout>
)
