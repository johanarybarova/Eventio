import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { HeadDefault } from '~/features/core/components/HeadDefault'

 const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {' '}
      <QueryClientProvider client={queryClient}>
        <HeadDefault />
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
