import { styled } from '~/styles/stitches.config'

export const Title = styled('h1', {
  fontSize: '2.4rem',
  '@bp2': {
    fontSize: '2.8rem',
  },
})

export const FormWrapper = styled('div', {
  width: '100%',
  maxWidth: '56rem',
  margin: '0 auto',
})

export const Description = styled('p', {
  fontSize: '1.8rem',
  margin: '0.5rem 0',
})

export const ErrorMessage = styled(Description, {
  color: '$accent$attention',
})
