import { styled } from '~/styles/stitches.config'

export const Container = styled('div', {
  margin: '0 auto',
  padding: '0 0.8rem',
  maxWidth: 'calc(120rem + 1.6rem)',
  width: '100%',

  '@bp2': {
    padding: '0 $2',
    maxWidth: 'calc(120rem + $4)',
  },

  '@bp3': {
    padding: '0 $4',
    maxWidth: 'calc(120rem + $8)',
  },
})
