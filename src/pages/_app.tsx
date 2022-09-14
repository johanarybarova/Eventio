import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { HeadDefault } from '~/features/core/components/HeadDefault'
import { ViewContextProvider } from '~/features/events/context/viewEvents'

 const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {' '}
      <QueryClientProvider client={queryClient}>
        <HeadDefault />
        <ViewContextProvider>
          <Component {...pageProps} />
        </ViewContextProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
