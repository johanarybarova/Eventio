import type { FC, ReactNode } from 'react'

import { SignIn } from './parts/SignIn'
import { StyledHeader, StyledLogo } from './styled'

type Props = {
  actionComponent?: ReactNode
  absolute?: true
}

export const Header: FC<Props> = ({ actionComponent, absolute }) => (
  <StyledHeader isAbsolute={absolute}>
    <StyledLogo />
    {actionComponent ?? <SignIn />}
  </StyledHeader>
)
