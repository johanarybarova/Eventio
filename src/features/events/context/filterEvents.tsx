import type { FC, ReactNode } from 'react'
import { useMemo } from 'react'
import React, { createContext, useState, useContext } from 'react'

export enum FilterType {
  ALL = 'ALL',
  FUTURE = 'FUTURE',
  PAST = 'PAST',
}

type ContextValue = {
  filter: FilterType
  setFilter: (filter: FilterType) => void
}

export const FilterContext = createContext<ContextValue>({
  filter: FilterType.ALL,
  setFilter: () => {""},
})

export const FilterContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL)

  const value = useMemo(
    () => ({
      filter,
      setFilter,
    }),
    [filter]
  )

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
