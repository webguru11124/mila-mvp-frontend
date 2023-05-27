import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"
import colors from "./colors"
import global from "./global"
import Input from "./Input"
import FormLabel from "./FormLabel"
import Button from "./Button"
import Textarea from "./Textarea"
import { Open_Sans, Roboto_Slab } from "next/font/google"
import Select from "@/theme/Select"

export const defaultSpacing = { base: 6, sm: 8, md: 10, lg: 12, xl: 14, "2xl": 16 }
const bodyFont = Open_Sans({ weight: "400", subsets: ["latin"] })
const headingFont = Roboto_Slab({ weight: "700", subsets: ["latin"] })

export const themeConfig = {
    config: {
        cssVarPrefix: "glenise",
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    fonts: {
        body: bodyFont.style.fontFamily,
        heading: headingFont.style.fontFamily,
        mono: "Menlo, monospace",
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
        colorScheme: "green",
        components: ["Tabs", "Tag", "Input", "Checkbox", "Textarea", "Select"],
    }),
    themeConfig
)

export default extendedTheme
