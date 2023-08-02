import { styled } from '~/styles/stitches.config'

export const StyledUser = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Circle = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$round',
  background: '$grey850',
  width: '$4',
  height: '$4',
  marginRight: '$xl',
})

export const Initials = styled('p', {
  margin: 0,
})

export const MyName = styled('p', {
  marginRight: '$xl',

  '@bp1': {
    display: 'none',
  },
})
