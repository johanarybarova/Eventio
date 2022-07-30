import type { FC, ReactNode } from 'react'

import { SignIn } from './parts/SignIn'
import { StyledHeader, StyledLogo } from './styled'

type Props = {
  actionComponent?: ReactNode
  value?: true
}

export const Header: FC<Props> = ({ actionComponent, value }) => (
  <StyledHeader isAbsolute={value}>
    <StyledLogo />
    {actionComponent ?? <SignIn />}
  </StyledHeader>
)
