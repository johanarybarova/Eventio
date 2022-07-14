import { styled } from '~/styles/stitches.config'

export const ListItem = styled('li', {
  display: 'inline-block',
  listStyle: 'none',
  marginLeft: '0.8rem',
  color: '$text$silent',
  cursor: 'pointer',

  variants: {
    isActive: {
      true: {
        color: '$text$base',
        cursor: 'default',
      },
    },
  },

  '& button': {
    fontSize: '2.4rem',
  },
})
