import { styled } from '~/styles/stitches.config'

import { Logo } from './parts/Logo'

export const StyledLogo = styled(Logo, {})

export const StyledHeader = styled('header', {
  display: 'flex',
  padding: '2.4rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  zIndex: 100,

  '@bp2': {
    padding: '$4',
  },

  variants: {
    isAbsolute: {
      true: {
        position: 'absolute',
        top: 0,
        left: 0,

        '@bp2': {
          '& a:first-child': {
            color: '$text$inverted',
          },
        },
      },
    },
  },
})
