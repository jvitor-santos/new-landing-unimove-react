import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      '*': {
        scrollBehavior: 'smooth',
      },
      html: {
        fontSize: '62.5%',
      },

      body: {
        bg: '#EEEEEE',
        fontFamily: 'Roboto, arial, sans-serif',
      },
    },
  },

  fonts: {
    roboto: 'var(--font-roboto)',
    poppins: 'var(--font-poppins)',
    dmSans: 'var(--font-dmSans)',
  },
})
