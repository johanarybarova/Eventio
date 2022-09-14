import type { FC } from 'react'

import { List, ListItem, MobileLabel, FilterButton } from './styled'

import { FilterType } from '../../../../context/filterEvents'

type Props = {
  activeFilter: FilterType
  onChange: (filterType: FilterType) => void
}

export const NavFilter: FC<Props> = ({ activeFilter, onChange }) => (
  <>
    <List>
      <ListItem isActive={activeFilter === FilterType.ALL}>
        <FilterButton type="button" onClick={() => onChange(FilterType.ALL)}>
          All Events
        </FilterButton>
      </ListItem>
      <ListItem isActive={activeFilter === FilterType.FUTURE}>
        <FilterButton type="button" onClick={() => onChange(FilterType.FUTURE)}>
          Future Events
        </FilterButton>
      </ListItem>
      <ListItem isActive={activeFilter === FilterType.PAST}>
        <FilterButton type="button" onClick={() => onChange(FilterType.PAST)}>
          Past Events
        </FilterButton>
      </ListItem>
    </List>

    <MobileLabel>
      <span>Show</span>
      <select onChange={(e) => onChange(e.target.value as FilterType)}>
        <option value={FilterType.ALL}>All Events</option>
        <option value={FilterType.FUTURE}>Future Events</option>
        <option value={FilterType.PAST}>Past Events</option>
      </select>
    </MobileLabel>
  </>
)
