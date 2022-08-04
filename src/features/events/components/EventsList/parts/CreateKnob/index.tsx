import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { PlusIcon } from './parts/PlusIcon'
import { CreateLink } from './styled'

export const CreateKnob: FC = () => (
  <Link href={Routes.CREATE_EVENT} passHref>
    <CreateLink aria-label="Create Event">
      <PlusIcon />
    </CreateLink>
  </Link>
)
