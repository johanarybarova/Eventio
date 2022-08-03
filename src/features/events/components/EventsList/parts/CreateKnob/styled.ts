import { styled } from '~/styles/stitches.config'

export const CreateLink = styled('a', {
  zIndex: '900',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: '0',
  bottom: '0',
  width: '5.6rem',
  height: '5.6rem',
  margin: '3.2rem',
  paddingTop: '.3rem',
  boxShadow: '0 6px 9px rgba(0, 0, 0, 0.15)',
  borderRadius: '50%',
  color: '$text$inverted',
  bg: '$background$dark',
  fontSize: '$2',
})
