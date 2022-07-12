import { styled } from '~/styles/stitches.config'

export const Anchor = styled('a', {
  fontSize: '1.4rem',
  color: '$text$light',
  textDecoration: 'none',

  b: {
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontSize: '1.4rem',
    fontWeight: '500',
    color: '$text$dimmed',
  },
})
