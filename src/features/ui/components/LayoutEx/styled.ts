import { styled } from '~/styles/stitches.config'

export const Layout = styled('div', {
  display: 'flex',
  'flex-wrap': 'wrap',
  'min-height': '100%',

  '@bp2': {
    flexDirection: 'row',
    textAlign: 'start',
  },
})

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: '1',
  padding: '8rem 2rem',

  '&::before, &::after': {
    content: `''`,
    display: 'block',
    flex: '3',
  },

  '&::after': {
    flex: '4',
  },
})
