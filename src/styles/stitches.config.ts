import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = createStitches({
  theme: {
    colors: {
      // Generic colors
      white: '#FFF',
      black: '#000',

      // Shades of gray
      grey100: '#323C46',
      grey500: '#949EA8',
      grey600: '#A9AEB4',
      grey700: '#C9CED3',
      grey800: '#D2D6DA',
      grey850: '#D9DCE1',
      grey900: '#F9F9FB',

      // Accent colors
      green: '#22D486',
      greenDark: '#20BD78',
      pink: '#FF4081',
      pinkDark: '#E73370',
    },

    text: {
      base: '$colors$grey100',
      dimmed: '$colors$grey500',
      light: '$colors$grey700',
      formLabel: '$colors$grey800',
      tabs: '$colors$grey600',
      inverted: '$colors$white',
      inactive: '$colors$grey600',
      silent: '$colors$grey850',
    },

    background: {
      light: '$colors$white',
      dimmed: '$colors$grey900',
      dark: '$colors$grey100',
      inactive: '$colors$grey850',
    },

    accent: {
      primary: '$colors$green',
      primaryHover: '$colors$greenDark',
      attention: '$colors$pink',
      attentionHover: '$colors$pinkDark',
    },

    space: {
      n: '0rem',
      s: '0.25rem',
      m: '0.5rem',
      l: '0.75rem',
      1: '1rem',
      2: '2rem',
      3: '3rem',
      4: '4rem',
      5: '5rem',
      6: '6rem',
      7: '7rem',
      8: '8rem',
      9: '9rem',
    },
    fontSizes: {
      xs: '0.6785rem',
      s: '0.75rem',
      m: '1rem',
      l: '3rem',
      xl: '4.5rem',
      1: '1rem',
      2: '2rem',
      3: '3rem',
      4: '4rem',
      5: '5rem',
      6: '6rem',
      7: '7rem',
      8: '8rem',
      9: '9rem',
    },
    fonts: {
      base: 'Hind, sans-serif',
      quotes: '"Playfair Display", serif',
    },
    fontWeights: {},
    lineHeights: {
      1: '1rem',
      2: '2rem',
      3: '3rem',
      4: '4rem',
      5: '5rem',
      6: '6rem',
      7: '7rem',
      8: '8rem',
      9: '9rem',
    },
    letterSpacings: {},
    sizes: {
      n: '0rem',
      xs: '1.2rem',
      s: '1.4rem',
      m: '1.6rem',
      l: '1.8rem',

      1: '1rem',
      2: '2rem',
      3: '3rem',
      4: '4rem',
      5: '5rem',
      6: '6rem',
      7: '7rem',
      8: '8rem',
      9: '9rem',
    },

    borderWidths: {},

    borderStyles: {},

    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      round: '9999px',
    },

    shadows: {
      100: '0 2px 3px rgba(0, 0, 0, 0.1)',
      900: '0 6px 9px rgba(0, 0, 0, 0.15)',
    },

    zIndices: {
      500: '500',
      900: '900',
    },

    transitions: {},
  },

  media: {
    bp1: '(max-width: 48em)',
    bp2: '(min-width: 48em)',
    bp3: '(min-width: 75em)',
  },

  utils: {
    mX: (value: Stitches.PropertyValue<'marginLeft' | 'marginRight'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    mY: (value: Stitches.PropertyValue<'marginTop' | 'marginBottom'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    pX: (value: Stitches.PropertyValue<'paddingLeft' | 'paddingRight'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    pY: (value: Stitches.PropertyValue<'paddingTop' | 'paddingBottom'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    textAl: (value: Stitches.PropertyValue<'textAlign'>) => ({
      textAlign: value,
    }),
  },
})

const GlobalStyles = globalCss({
  '*, *::before, *::after': { margin: '$n', boxSizing: 'border-box' },
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

  /*
&:not(input):focus-visible {
 
    "88" adds transparency channel to our existing theme color.
    Applicable only to hex color notation.
  
    outline: 3px solid ${colors.accent.primary}88;
}
*/

  ul: {},

  li: {},

  h1: {
    fontSize: '$3',
    fontWeight: '400',
    '@bp2': {
      fontSize: '4.5rem',
    },
  },

  h2: {
    fontSize: '2.4rem',
    fontWeight: '400',
    '@bp2': {
      fontSize: '2.8rem',
    },
  },

  h3: {
    fontSize: '$2',
    fontWeight: '400',
    '@bp2': {
      fontSize: '2.4rem',
    },
  },

  h4: {
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

  form: {
    marginTop: '4rem',
  },

  footer: {
    display: 'flex',
    flex: '1',
    padding: '$2 0',
    borderTop: '1px solid #eaeaea',
    justifyContent: 'center',
    alignItems: 'center',

    a: {
      color: 'inherit',
      textDecoration: 'none',
    },

    '&:focus': {
      outline: 'none',
    },
  },
})

GlobalStyles()
