import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

export const theme = extendTheme({
  colors: {
    black: '#16161D',
    brand: {
      /* eslint-disable @typescript-eslint/naming-convention, sort-keys */
      "50": "#E8F2FC",
      "100": "#C0DBF7",
      "200": "#97C4F2",
      "300": "#6FADEC",
      "400": "#4696E7",
      "500": "#1D7FE2",
      "600": "#1766B5",
      "700": "#124C87",
      "800": "#0C335A",
      "900": "#06192D"
      /* eslint-enable @typescript-eslint/naming-convention, sort-keys */
    }
  },
})