import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import colors from './colors'
import global from './global'
import Input from './Input'
import FormLabel from './FormLabel'
import Button from './Button'
import Textarea from './Textarea'
import { Poppins } from 'next/font/google'
import Select from './Select'

export const defaultSpacing = { base: 6, sm: 8, md: 10, lg: 12, xl: 14, '2xl': 16 }
const bodyFont = Poppins({ weight: '400', subsets: ['latin'] })
const headingFont = Poppins({ weight: '600', subsets: ['latin'] })

export const themeConfig = {
    config: {
        cssVarPrefix: 'mila',
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    fonts: {
        body: bodyFont.style.fontFamily,
        heading: headingFont.style.fontFamily,
        mono: 'Menlo, monospace',
    },
    styles: global,
    components: {
        Input,
        FormLabel,
        Button,
        Textarea,
        Select,
    },
    colors,
}

const extendedTheme = extendTheme(
    withDefaultColorScheme({
        colorScheme: 'brand.primary',
        components: ['Tabs', 'Tag', 'Input', 'Checkbox', 'Textarea', 'Select'],
    }),
    themeConfig
)

export default extendedTheme
