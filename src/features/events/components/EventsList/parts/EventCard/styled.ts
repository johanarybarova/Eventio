import { styled } from '~/styles/stitches.config'

export const Title = styled('h3', {})

export const Name = styled('p', {})

export const Description = styled('p', {
  fontSize: '1.6rem',
  margin: '3.2rem 0 4rem',
})

export const Count = styled('p', {
  display: 'inline',
  '& + button': {
    float: 'right',
  },
})

export const Article = styled('article', {
  boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)',
  padding: '3.2rem',
  borderRadius: '2px',
  bg: '$background$light',

  variants: {
    isRow: {
      true: {
        padding: '2.4rem 1.6rem',
      },
    },
  },

  '@bp1': {
    display: 'grid',
    'grid-template-columns': '1fr auto',
  },
})
