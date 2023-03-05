import { useQuery } from 'react-query'

import type { User } from '~/features/events/types'
import { api } from '~/pages/api/client'


const useUser = () => {
    const result = useQuery<User, Error>('queryevents', async () => {
    
    
        const response = await api.get('events')
  
  
    })
  
   
  }

export { useUser }
