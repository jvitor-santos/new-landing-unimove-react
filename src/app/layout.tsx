import Script from 'next/script'
import { Roboto_Flex } from 'next/font/google'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} scroll-smooth`}>
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
