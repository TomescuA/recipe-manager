'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/app/_styles/theme'
import StoreProvider from '@/app/_store/StoreProvider'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>{children}</StoreProvider>
    </ThemeProvider>
  )
}

export default Providers
