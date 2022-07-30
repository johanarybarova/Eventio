import { styled } from '~/styles/stitches.config'

export const List = styled('ul', {
  padding: '0',
  listStyle: 'none',
})

export const ListItem = styled('li', {
  display: 'inline-block',
  marginRight: '3.2rem',
  color: '$text$tabs',

  variants: {
    isActive: {
      true: {
        color: '$text$base',
      },
    },
  },
})

export const FilterButton = styled('button', {
  fontSize: '1.2rem',
  'text-transform': 'uppercase',
  'letter-spacing': '0.08em',
})

export const MobileLabel = styled('label', {
  fontSize: '1.2rem',
  'text-transform': 'uppercase',
  'letter-spacing': '0.08em',
  color: '$label$small',

  '@bp2': {
    display: 'none',
  },

  '&::after': {
    content: `''`,
    display: 'inline-block',
    verticalAlign: 'middle',

    border: '0.5em solid transparent',
    'border-top-color': 'currentColor',
    'border-bottom-width': '0',
    color: '$text$base',

    select: {
      color: '$text$base',
      cursor: 'pointer',
    },
  },
})
