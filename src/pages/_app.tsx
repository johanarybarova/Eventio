import type { AppProps } from 'next/app'

import { HeadDefault } from '~/features/core/components/HeadDefault'

import { GlobalStyles } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  GlobalStyles()

  return (
    <>
      <HeadDefault />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
