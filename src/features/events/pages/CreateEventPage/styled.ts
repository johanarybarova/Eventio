import { Container as ContainerBase } from '~/features/ui/components/Container'
import { styled } from '~/styles/stitches.config'

import { CloseIcon } from './parts/Icon'

export const Container = styled(ContainerBase, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  boxSizing: 'border-box',
})

export const FormWrapper = styled('div', {
  boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '48rem',
  padding: '4rem 3.2rem',
  margin: '0 auto',
  borderRadius: '2px',
  textAlign: 'center',
  bg: '$background$light',
})

export const Title = styled('h1', {
  color: '$text$base',
  fontSize: '2.4rem',

  '@bp2': {
    fontSize: '2.8rem',
  },
})

export const Desctiption = styled('p', {
  fontSize: '1.8rem',
})

export const StyledCloseIcon = styled(CloseIcon, {
  display: 'inline-block',
  verticalAlign: 'middle',
  marginTop: '-0.14em',
})

export const CloseLink = styled('a', {
  fontSize: '1.6rem',
  color: '$text$base',
})
