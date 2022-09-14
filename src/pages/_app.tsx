import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { HeadDefault } from '~/features/core/components/HeadDefault'
import { FilterContextProvider } from '~/features/events/context/filterEvents'
import { ViewContextProvider } from '~/features/events/context/viewEvents'

 const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {' '}
      <QueryClientProvider client={queryClient}>
        <HeadDefault />
        <FilterContextProvider>
          <ViewContextProvider>
            <Component {...pageProps} />
          </ViewContextProvider>
        </FilterContextProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
