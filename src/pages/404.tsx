import type { NextPage } from 'next'

import { PageDown } from '~/features/ui/components/PageDown'

const NotFoundPage: NextPage = () => (
  <PageDown message="404 Error - page not found" />
)

export default NotFoundPage
