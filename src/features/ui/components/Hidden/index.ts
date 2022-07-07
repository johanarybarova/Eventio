import { css } from '~/styles/stitches.config'

// Hides visually but keeps acessible to screen readers

export const Hidden = css({
  opacity: '0.00001',
  position: 'absolute',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
})
