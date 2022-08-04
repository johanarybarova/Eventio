import { Button } from '~/features/ui/components/Button'
import { styled } from '~/styles/stitches.config'

export const Title = styled('h3', {})

export const Name = styled('p', {})

export const Description = styled('p', {
  fontSize: '1.6rem',
  margin: '3.2rem 0 4rem',
})

export const CountWrapper = styled('div', {
  display: 'grid',
  'grid-template-columns': 'auto 1fr',
  gap: '0.8rem',
  alignItems: 'center',
})

export const Count = styled('p', {})

export const EditButton = styled(Button, {})

export const Article = styled('article', {
  boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)',
  padding: '3.2rem',
  borderRadius: '2px',
  bg: '$white',

  variants: {
    isRow: {
      true: {
        padding: '2.4rem 1.6rem',

        '> *': {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        },

        '& p:nth-child(4)': {
          margin: '0',
        },

        '@bp1': {
          display: 'grid',
          'grid-template-columns': '1fr auto',

          '& h3, p:nth-child(4)': {
            'grid-column': '1 / 3',
            order: '-1',
          },

          '> *:last-child': {
            gridColumn: '2',
            gridRow: '3 / 5',
            alignSelf: 'center',
          },

          '& p:nth-child(3)': {
            display: 'none',
          },
        },

        '@bp2': {
          display: 'flex',
          alignItems: 'baseline',
          gap: '1.5rem',
          padding: '2rem 3.2rem',

          '> *': {
            flex: '1',
            width: '0',
          },

          '& h3, p:nth-child(4)': {
            flex: '3',
          },

          '& h3': {
            fontSize: '1.8rem',
            order: '-2',

            '@bp2': {
              fontSize: '1.8rem',
            },
          },

          '& p:nth-child(4)': {
            order: '-1',
          },

          '& button': {
            justifySelf: 'end',
            flex: '0 0 auto',
            width: 'auto',
          },

          time: {
            flex: '0 0 12em',
          },
        },
      },
    },
  },
})
