import type { FC } from 'react'

import { GridIcon } from './parts/GridIcon'
import { RowIcon } from './parts/RowIcon'
import { ListItem } from './styled'

import { ViewType } from '../../types'

type Props = {
  activeView: ViewType
  onChange: (viewType: ViewType) => void
}

export const NavView: FC<Props> = ({ activeView, onChange }) => (
  <ul>
    <ListItem isActive={Boolean(activeView === ViewType.GRID)}>
      <button
        type="button"
        aria-label="Show as grid"
        onClick={() => onChange(ViewType.GRID)}
      >
        <GridIcon />
      </button>
    </ListItem>
    <ListItem isActive={Boolean(activeView === ViewType.LIST)}>
      <button
        type="button"
        aria-label="Show as list"
        onClick={() => onChange(ViewType.LIST)}
      >
        <RowIcon />
      </button>
    </ListItem>
  </ul>
)
