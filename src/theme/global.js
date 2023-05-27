import { mode } from "@chakra-ui/theme-tools"

module.exports = {
    global: props => ({
        html: {
            scrollBehavior: "smooth",
        },
        ".section": {
            scrollMarginTop: 100,
        },
        body: {
            fontSize: "0.9rem",
            lineHeight: 2,
            focusVisible: false,
            color: mode("gray.800", "whiteAlpha.900")(props),
            bg: mode("white", "gray.900")(props),
        },
        "::-webkit-scrollbar": {
            width: 2,
        },
        "::-webkit-scrollbar-track": {
            background: "#333",
        },
        "::-webkit-scrollbar-thumb": {
            background: "green.500",
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: "green.600",
        },
        "#single_page_content table tr": {
            borderTop: `solid 1px`,
            borderBottom: `solid 1px`,
            borderTopColor: mode("gray.100", "gray.700")(props),
            borderBottomColor: mode("gray.100", "gray.700")(props),
        },
        "*": {
            scrollbarColor: "#7fbd22 #333",
            scrollbarWidth: "thin",
        },
        "#nprogress .bar": {
            background: "green.500",
            zIndex: 1032,
        },
        "#nprogress .spinner": {
            backgroundColor: mode("white", "gray.800")(props),
        },
        "#nprogress .spinner-icon": {
            borderTopColor: "green.500",
            borderLeftColor: "green.500",
        },
    }),
}
