import type { FC, ReactNode } from 'react'

import { SignIn } from './parts/SignIn'
import { StyledHeader, StyledLogo } from './styled'

type Props = {
  actionComponent?: ReactNode
}

export const Header: FC<Props> = ({ actionComponent }) => (
  <StyledHeader>
    <StyledLogo />
    {actionComponent ?? <SignIn />}
  </StyledHeader>
)
