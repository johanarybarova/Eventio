import { css } from '~/styles/stitches.config'

export const ScreenReaderOnly = css({
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'inset(50%)',
  position: 'absolute',
  padding: 0,
  margin: '-1px',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
})
