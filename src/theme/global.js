import { mode } from '@chakra-ui/theme-tools'

module.exports = {
    global: props => ({
        html: {
            scrollBehavior: 'smooth',
        },
        '.section': {
            scrollMarginTop: 100,
        },
        body: {
            fontSize: '0.9rem',
            lineHeight: 2,
            focusVisible: false,
            color: mode('gray.800', 'whiteAlpha.900')(props),
            bgColor: mode('brand.bodyBg', 'gray.900')(props),
        },
        '::-webkit-scrollbar': {
            width: 2,
        },
        '::-webkit-scrollbar-track': {
            background: 'gray.100',
        },
        '::-webkit-scrollbar-thumb': {
            background: 'gray.300',
        },
        '::-webkit-scrollbar-thumb:hover': {
            background: 'brand.hover',
        },
        '#single_page_content table tr': {
            borderTop: `solid 1px`,
            borderBottom: `solid 1px`,
            borderTopColor: mode('gray.100', 'gray.700')(props),
            borderBottomColor: mode('gray.100', 'gray.700')(props),
        },
        '*': {
            scrollbarColor: '#7fbd22 #333',
            scrollbarWidth: 'thin',
        },
        '#nprogress .bar': {
            background: 'brand.primary',
            zIndex: 1032,
            height: '4px !important',
        },
        '#nprogress .spinner': {
            top: '0 !important',
            right: '0 !important',
            left: '0 !important',
            bottom: '0 !important',
            display: 'flex !important',
            justifyContent: 'center !important',
            alignItems: 'center !important',
            zIndex: '99999 !important',
            backgroundColor: mode('white', 'gray.800')(props),
        },
        '#nprogress .spinner-icon': {
            width: '2rem !important',
            height: '2rem !important',
            borderTopColor: 'brand.primary',
            borderLeftColor: 'brand.primary',
        },
    }),
}
