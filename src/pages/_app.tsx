import type { AppProps } from 'next/app'

import { HeadDefault } from '~/features/core/components/HeadDefault'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadDefault />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
