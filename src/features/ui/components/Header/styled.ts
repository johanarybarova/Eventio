import { styled } from '~/styles/stitches.config'

import { Logo } from './parts/Logo'

export const StyledLogo = styled(Logo, {
  color: '$black',
  textDecoration: 'none',
  fontSize: '2.8rem',
  lineHeight: '1',
  '@bp2': {
    color: '$text$inverted',
  },
})

export const StyledHeader = styled('header', {
  display: 'flex',
  padding: '2.4rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',

  '@bp2': {
    position: 'absolute',
    padding: '$4',
    top: '0',
    left: '0',
  },
})
