'use client'

import React from 'react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import themeConfig from '../theme/theme.config'

const theme = extendTheme(themeConfig)

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme} resetCSS>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}
