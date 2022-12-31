import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { Anchor } from './styled'

type Props = {
  isUp?: boolean,
  isDown?: boolean,

}

export const Sign: FC<Props> = ({ isUp, isDown }) => {

  let signlink = ''
  let textlink = ''
  let textlinksign = ''

  if ( isUp === true ) {
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
      <Anchor isDown={isDown} href={signlink}>
        {textlink}&ensp;<b>{textlinksign}</b>
      </Anchor>
    </Link>
  )
}
