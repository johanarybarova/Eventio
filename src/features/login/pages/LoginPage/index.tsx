import type { NextPage } from 'next'
import type { FormEvent } from 'react'

import { Input } from '~/features/ui/components/Input'
import { LayoutEx } from '~/features/ui/components/LayoutEx'

export const LoginPage: NextPage = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    alert('TODO')
  }

  return (
    <LayoutEx>
      <h1>Sign in to Eventio.</h1>
      <p>Enter your details below.</p>
      <form onSubmit={onSubmit}>
        <Input label="Email" type="email" name="email" />
        <Input label="Password" type="password" name="password" />
        <button type="submit">Sign In</button>
      </form>
    </LayoutEx>
  )
}
