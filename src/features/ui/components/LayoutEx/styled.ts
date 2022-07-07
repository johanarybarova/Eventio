import { styled } from '~/styles/stitches.config'

export const Layout = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  textALign: 'center',

  '@bp2': {
    flexDirection: 'row',
    textAlign: 'start',
  },
})

export const Main = styled('main', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: '1',

  '&::before, &::after': {
    content: `''`,
    display: 'block',
    flex: '3',
  },

  '&::after': {
    flex: '4',
  },
})
