import { styled } from '~/styles/stitches.config'

export const CreateLink = styled('a', {
  boxShadow: '0 6px 9px rgba(0, 0, 0, 0.15)',
  zIndex: '900',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  bottom: '0',
  right: '0',
  width: '5.6rem',
  height: '5.6rem',
  margin: '3.2rem',
  borderRadius: '50%',
  color: '$text$inverted',
  bg: '$background$dark',
  fontSize: '2rem',
  paddingTop: '3px',
})
