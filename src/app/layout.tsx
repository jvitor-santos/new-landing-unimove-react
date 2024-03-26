import Script from 'next/script'
import { Roboto_Flex, Poppins, DM_Sans } from 'next/font/google'

import { AppProvider } from '~/hooks'

import '@egjs/react-flicking/dist/flicking.css'
import '@egjs/react-flicking/dist/flicking-inline.css'

import '@egjs/flicking-plugins/dist/pagination.css'
import '@egjs/flicking-plugins/dist/flicking-plugins.css'

export const metadata = {
  title: 'landing-unimove',
  description: '',
}

const roboto = Roboto_Flex({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '600', '700', '800'],
})

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '600', '700', '800'],
})

const dmSans = DM_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-dmSans',
  weight: ['400', '500', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${roboto.variable} ${poppins.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body>
        <AppProvider>{children}</AppProvider>
      </body>

      <Script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.js"
      />
    </html>
  )
}
