import { styled } from '~/styles/stitches.config'

export const Aside = styled('aside', {
  display: 'none',

  '@bp2': {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '30%',
    maxWidth: '48rem',
    minWidth: '30rem',
    padding: '8rem clamp(2rem, 2.2vw, 4rem) 4rem',
    color: '$text$inverted',
    textAlign: 'center',
    bg: '$background$dark',
  },
})

export const Figure = styled('figure', {
  padding: '$18rem clamp(2rem, 2.2vw, 4rem) 4rem',
})

export const Q = styled('q', {
  display: 'block',
  margin: '$2 $n',
  textAlign: 'center',
  fontSize: 'clamp($2, 2.2vw, 3.6rem)',
  fontFamily: '$quotes',
  lineHeight: '1.166',
})

export const FigCap = styled('figcaption', {
  fontSize: '1.8rem',
  color: '$text$dimmed',
})

export const Hr = styled('hr', {
  width: '1.2rem',
  border: '$n',
  borderTop: '2px solid currentColor',
  margin: '1.5rem auto',
  color: '$accent$primary',
})
