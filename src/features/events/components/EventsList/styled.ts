import { styled } from '~/styles/stitches.config'

export const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '0 1.5rem',

  '@bp2': {
    padding: '0',
  },
})

export const List = styled('ul', {
  fontSize: '1.4rem',
  display: 'grid',
  gap: '1.5rem',
  padding: '3rem 0 8rem',
  listStyle: 'none',
  color: '$text$dimmed}',

  variants: {
    isView: {
      true: {
        'grid-template-columns': 'repeat(auto-fit, minmax(30rem, 1fr))',
        '& article': {
          display: 'grid',
          'grid-template-columns': '1fr auto',
          alignItems: 'center',

          ' > *:not(:nth-last-child(3) ~ *)': {
            'grid-column': '1/3',
          },
        },
      },
    },
  },
})
