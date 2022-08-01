import { styled } from '~/styles/stitches.config'

export const Title = styled('h1', {
  fontSize: '2.4rem',

  '@bp2': {
    fontSize: '2.8rem',
  },
})

export const Description = styled('p', {
  fontSize: '1.8rem',
  maxWidth: '30em',
  margin: '0.8rem 0 4rem',
})
