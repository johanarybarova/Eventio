import { styled } from '~/styles/stitches.config'

export const Layout = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  'min-height': '100%',
  bg: '$background$dimmed',
})

export const VerticalCenter = styled('main', {
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
