import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { Anchor } from './styled'

type Props = {
  up?: Boolean
}

export const Sign: FC<Props> = ({ up }) => {

  let signlink = ''
  let textlink = ''
  let textlinksign = ''

  if ( up === true ) {
    signlink = Routes.SIGN_IN
    textlink = 'Already have an account?'
    textlinksign = 'sign in'
  } else {
    signlink = Routes.SIGN_UP
    textlink = 'Don’t have account?'
    textlinksign = 'sign up'
  }

  return (
    <Link href={signlink}>
      <Anchor href={signlink}>
        {textlink}&ensp;<b>{textlinksign}</b>
      </Anchor>
    </Link>
  )
}
