'use client'

import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '~/styles/theme'

interface AppProviderProps {
  children?: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
