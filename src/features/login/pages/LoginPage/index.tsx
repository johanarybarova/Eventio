import type { NextPage } from 'next'
import type { FormEvent } from 'react'
import { useState } from 'react'

import { Button } from '~/features/ui/components/Button'
import { Container } from '~/features/ui/components/Container'
import { Input } from '~/features/ui/components/Input'
import { LayoutEx } from '~/features/ui/components/LayoutEx'

import { Description, FormWrapper, Title, ErrorMessage } from './styled'

export const LoginPage: NextPage = () => {
  const [error, setError] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    alert('TODO')
  }

  return (
    <LayoutEx>
      <Container>
        <FormWrapper>
          <Title>Sign in to Eventio.</Title>
          {error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : (
            <Description>Enter your details below.</Description>
          )}
          <form onSubmit={onSubmit}>
            <Input label="Email" type="email" name="email" error={error} />
            <Input
              label="Password"
              type="password"
              name="password"
              error={error}
            />
            <p>
              <Button
                accent="primary"
                size="medium"
                margin="medium"
                type="submit"
              >
                Sign In
              </Button>
            </p>

            <p>
              <Button
                margin="small"
                size="small"
                accent="attention"
                onClick={() => setError(Date.now().toString())}
              >
                Trigger Error
              </Button>
            </p>
          </form>
        </FormWrapper>
      </Container>
    </LayoutEx>
  )
}
