import { styled } from '~/styles/stitches.config'

export const Button = styled('button', {
  $$textColor: '$text$inverted',
  $$backgroundColor: '$background$dark',
  $$backgroundColorHover: '$background$dark',

  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  borderRadius: '4px',
  border: 'none',
  fontFamily: '$base',
  color: '$$textColor',
  transition: '$$backgroundColor 0.3s',
  bg: '$$backgroundColor',

  '&:disabled': {
    $$textColor: '$text$inactive',
    $$backgroundColor: '$background$inactive',
  },

  '&:not(:disabled)': {
    cursor: 'pointer',

    '&:hover, &:focus': {
      bg: ' $$backgroundColorHover',
    },
  },

  variants: {
    size: {
      small: {
        fontSize: '1.4rem',
        padding: '0.3em 2em 0.2em',
      },
      medium: {
        fontSize: '1.6rem',
        padding: '0.8em 5.4em',
      },
    },
    accent: {
      primary: {
        $$backgroundColor: '$accent$primary',
        $$backgroundColorHover: '$accent$primaryHover',
      },
      attention: {
        $$backgroundColor: '$accent$attention',
        $$backgroundColorHover: '$accent$attentionHover',
      },
    },
  },
})
