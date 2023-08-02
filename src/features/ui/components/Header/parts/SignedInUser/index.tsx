import { useSession } from 'next-auth/react'

import { ArrowIcon } from './parts/ArrowIcon'
import { StyledUser, Circle, Initials, MyName } from './styled'


export const SignedInUser = () => {
  const { data: session } = useSession()

  return (
    <StyledUser>
      <Circle>
        <Initials>TW</Initials>
      </Circle>
      <MyName>{session?.user?.email}</MyName>
      <button type="button">
        <ArrowIcon />
      </button>
    </StyledUser>
  )
}
