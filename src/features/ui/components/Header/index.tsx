import type { FC, ReactNode } from 'react'

import { StyledHeader, StyledLogo } from './styled'

type Props = {
  actionComponent?: ReactNode
  topRightComponent?: ReactNode
  absolute?: true
}

export const Header: FC<Props> = ({
  actionComponent,
  topRightComponent,
  absolute,
}) => (
  <StyledHeader isAbsolute={absolute}>
    <StyledLogo />
    {actionComponent ?? topRightComponent}
  </StyledHeader>
)
