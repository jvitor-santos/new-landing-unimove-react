import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        // fontSize: '62.5%',
      },

      body: {
        bg: '#EEEEEE',
        scrollBehavior: 'smooth',
        fontFamily: 'Roboto, arial, sans-serif',
      },
    },
  },

  fonts: {
    roboto: 'var(--font-roboto)',
  },
})
