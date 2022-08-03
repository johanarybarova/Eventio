import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { Anchor } from './styled'

export const SignIn: FC = () => (
  <Link href={Routes.LOGIN}>
    <Anchor href=" ">
      Already have an account?&ensp;<b>sign in</b>
    </Anchor>
  </Link>
)
