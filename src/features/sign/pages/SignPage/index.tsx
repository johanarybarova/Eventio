import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import type { FormEvent } from 'react'
import { useState } from 'react'

import { Routes } from '~/features/core/constants/routes'
import { Button } from '~/features/ui/components/Button'
import { Container } from '~/features/ui/components/Container'
import { Input } from '~/features/ui/components/Input'
import { LayoutEx } from '~/features/ui/components/LayoutEx'

import { Sign } from './parts/Sign'
import { Description, FormWrapper, Title, ErrorMessage } from './styled'

export const SignPage: NextPage = () => {
  const [error, setError] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    alert('TODO')
  }

  const { pathname } = useRouter()
  let up: Boolean = pathname === Routes.SIGN_UP

  return (
    <LayoutEx topRight={<Sign up={up} />}>
      <Container>
        <FormWrapper>
          <Title>
            {up === false
              ? 'Sign in to Eventio.'
              : 'Get started absolutely free.'}
          </Title>
          {error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : (
            <Description>Enter your details below.</Description>
          )}
          <form onSubmit={onSubmit}>
            {up === true ? (
              <>
                {' '}
                <Input
                  label="First name"
                  type="text"
                  name="fname"
                  error={error}
                />
                <Input
                  label="Last name"
                  type="text"
                  name="lname"
                  error={error}
                />
              </>
            ) : (
              <> </>
            )}
            <Input label="Email" type="email" name="email" error={error} />{' '}
            <Input
              label="Password"
              type="password"
              name="password"
              error={error}
            />
            {up === true ? (
              <Input
                label="Repeat password"
                type="password"
                name="Repeat password"
                error={error}
              />
            ) : (
              <> </>
            )}
            <p>
              <Button
                accent="primary"
                size="medium"
                margin="medium"
                type="submit"
                css={{ marginTop: '4rem' }}
              >
                Sign {up === true ? 'up' : 'in'}
              </Button>
            </p>
            <p>
              <Button
                css={{ marginTop: '1rem' }}
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
