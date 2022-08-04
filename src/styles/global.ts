import { globalCss } from '@stitches/react'

export const GlobalStyles = globalCss({
  '*, *::before, *::after': {
    padding: '$n',
    margin: '$n',
    boxSizing: 'border-box',
  },
  'html, body, #__next': {
    padding: '$n',
    height: '100%',
  },

  html: {
    fontSize: '62.5%',
  },

  body: {
    font: '400 1.6rem',
    fontFamily: '$base',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    'font-smooth': 'always',
  },

  main: {},

  nav: {},

  h1: {
    color: '$text$base',
    fontSize: '$3',
    fontWeight: '400',
    lineHeight: '4.8rem',
    '@bp2': {
      fontSize: '4.5rem',
    },
  },

  h2: {
    color: '$text$base',
    fontSize: '2.4rem',
    fontWeight: '400',
    '@bp2': {
      fontSize: '2.8rem',
    },
  },

  h3: {
    color: '$text$base',
    fontSize: '$2',
    fontWeight: '400',
    '@bp2': {
      fontSize: '2.2rem',
    },
  },

  h4: {
    color: '$text$base',
    fontSize: '$l',
    fontWeight: '400',
    '@bp2': {
      fontSize: '$l',
    },
  },

  p: {
    fontSize: '1.4rem',
    color: '$text$dimmed',
  },

  time: {
    fontSize: '1.4rem',
    color: '$text$dimmed',
  },

  form: {},

  button: {
    padding: '0',
    margin: '0',
    border: 'none',
    font: 'inherit',
    color: 'inherit',
    background: 'none',
    cursor: 'pointer',
  },

  ul: {},

  li: {
    listStyle: 'none',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  },

  q: {
    quotes: "'“' '”'",
  },

  footer: {
    display: 'flex',
    flex: '1',
    padding: '$2 0',
    borderTop: '1px solid #eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
