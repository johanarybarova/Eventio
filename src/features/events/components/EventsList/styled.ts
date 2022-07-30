import { styled } from '~/styles/stitches.config'

export const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1.5rem',

  '@bp2': {
    padding: 0,
  },
})

export const List = styled('ul', {
  fontSize: '1.4rem',
  display: 'grid',
  gap: '1.5rem',
  padding: 0,
  margin: '3rem 0',
  listStyle: 'none',
  color: '$text$dimmed',

  variants: {
    isView: {
      true: {
        'grid-template-columns': 'repeat(auto-fit, minmax(30rem, 1fr))',

        '& article': {
          //margin: "3rem 0",

          display: 'grid',
          'grid-template-columns': '1fr auto',
          'align-items': 'center',

          '> *:not(:nth-last-child(3) ~ *)': {
            'grid-column': '1 / 3',
          },
        },
      },
    },
  },
})
