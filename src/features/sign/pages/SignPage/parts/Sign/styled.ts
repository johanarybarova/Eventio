import { styled } from '~/styles/stitches.config'

export const Anchor = styled('a', {
  fontSize: '1.4rem',
  color: '$text$light',
  zIndex: '1',
  display: 'none',

  b: {
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontSize: '1.4rem',
    fontWeight: '500',
    color: '$text$dimmed',
    display: 'none',
  },

  '@bp2': {
    display: 'inline-block',
    b: {
      display: 'inline-block',
    },
  },

  variants: {
    isDown: {
      true: {
        lineHeight: '2.4rem',
        display: 'inline-block',
        marginTop: '2.4rem',

        b: {
          display: 'inline-block',
        },

        '@bp2': {
          display: 'none',
          b: {
            display: 'none',
          },
        },
      },
    },
  },
})
