import type { NextPage } from 'next'
import Link from 'next/link'
import type { FormEvent } from 'react'

import { Routes } from '~/features/core/constants/routes'
import { Button } from '~/features/ui/components/Button'
import { Input } from '~/features/ui/components/Input'
import { LayoutIn } from '~/features/ui/components/LayoutIn'

import {
  CloseLink,
  Container,
  Desctiption,
  FormWrapper,
  StyledCloseIcon,
  Title,
} from './styled'

export const CreateEventPage: NextPage = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    alert('TODO')
  }

  return (
    <LayoutIn
      headerActionComponent={
        <Link href={Routes.DASHBOARD} passHref>
          <CloseLink>
            <StyledCloseIcon aria-hidden="true" /> Close
          </CloseLink>
        </Link>
      }
    >
      <Container>
        <FormWrapper>
          <Title>Create new event</Title>
          <Desctiption>Enter details below.</Desctiption>
          <form onSubmit={onSubmit}>
            <Input label="Title" type="text" name="title" />
            <Input label="Description" type="text" name="description" />
            <Input label="Date" type="date" name="date" />
            <Input label="Time" type="time" name="time" />
            <Input label="Capacity" type="number" name="capacity" />
            <Button
              type="submit"
              size="medium"
              accent="primary"
              css={{
                marginTop: '4rem',
                paddingLeft: '4rem',
                paddingRight: '4rem',
                fontWeight: '500',
              }}
            >
              Create New Event
            </Button>
          </form>
        </FormWrapper>
      </Container>
    </LayoutIn>
  )
}
