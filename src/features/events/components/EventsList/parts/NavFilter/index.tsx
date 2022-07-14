import type { FC } from 'react'

import { List, ListItem, MobileLabel, FilterButton } from './styled'

enum FilterType {
  ALL = 'ALL',
  FUTURE = 'FUTURE',
  PAST = 'PAST',
}

type Props = {
  onChange: (filterType: FilterType) => void
}

export const NavFilter: FC<Props> = ({ onChange }) => (
  <>
    <List>
      <ListItem isActive>
        <FilterButton type="button" onClick={() => onChange(FilterType.ALL)}>
          All Events
        </FilterButton>
      </ListItem>
      <ListItem>
        <FilterButton type="button" onClick={() => onChange(FilterType.FUTURE)}>
          Future Events
        </FilterButton>
      </ListItem>
      <ListItem>
        <FilterButton type="button" onClick={() => onChange(FilterType.PAST)}>
          Past Events
        </FilterButton>
      </ListItem>
    </List>

    <MobileLabel>
      <span>Show</span>
      <select>
        <option value={FilterType.ALL}>All Events</option>
        <option value={FilterType.FUTURE}>Future Events</option>
        <option value={FilterType.PAST}>Past Events</option>
      </select>
    </MobileLabel>
  </>
)
