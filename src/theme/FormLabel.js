import { Roboto_Slab } from "next/font/google"

const headingFont = Roboto_Slab({ weight: "400", subsets: ["latin"] })

const FormLabel = {
    baseStyle: {
        fontSize: "sm",
        fontWeight: "bold",
        color: "black",
        fontFamily: headingFont.style.fontFamily,
    },
}

export default FormLabel
