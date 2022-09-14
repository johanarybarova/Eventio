import type { FC, ReactNode } from 'react'
import { useMemo } from 'react'
import React, { createContext, useState, useContext } from 'react'

export enum ViewType {
  GRID = 'GRID',
  LIST = 'LIST',
}

type ContextValue = {
  view: ViewType
  setView: (view: ViewType) => void
}

export const ViewContext = createContext<ContextValue>({
  view: ViewType.GRID,
  setView: () => {""},
})

export const ViewContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [view, setView] = useState<ViewType>(ViewType.GRID)

  const value = useMemo(
    () => ({
      view,
      setView,
    }),
    [view]
  )

  return (
    <ViewContext.Provider value={value}>
      {children}
    </ViewContext.Provider>
  )
}

export const useViewContext = () => {
  return useContext(ViewContext)
}
