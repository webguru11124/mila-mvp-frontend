import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import '@/styles/scss/pd.scss'
import 'focus-visible/dist/focus-visible'
import extendedTheme from '@/theme/theme.config'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Loader from '@/components/common/Loader'
import { renderToString } from 'react-dom/server'
import { CorporateContactJsonLd, DefaultSeo, FAQPageJsonLd, SocialProfileJsonLd } from 'next-seo'
import faqs from '@/func/faqs'
import { socialLinks } from '@/components/Footer'
import 'react-whatsapp-chat-widget/index.css'
import dynamic from 'next/dynamic'
import logo from '@/svg/logo.svg'
import Script from 'next/script'
import * as gtag from '@/lib/gtag'

const WhatsAppWidget = dynamic(() => import('react-whatsapp-chat-widget'), {
    ssr: false,
})
require('nprogress/nprogress.css')
const handleStart = () => {
    NProgress?.start()
}
const handleStop = url => {
    NProgress?.done()
    gtag.pageView(url)
}

export default function ProficientDesigners({ Component, pageProps }) {
    const router = useRouter()
    const loader = renderToString(<Loader />)

    useEffect(() => {
        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router])

    if (typeof window === 'object') {
        NProgress?.configure({
            template: `<div class='bar' role='bar'><div class='peg'></div></div><div class='spinner' role='spinner'>${loader}</div>`,
        })
    }

    const domain = process.env.NEXT_PUBLIC_APP_URL

    const url = `${domain}${router.asPath === '/' ? '' : router.asPath}/`
    const socLinks = socialLinks.map(item => item.link)
    socLinks.pop()

    return (
        <>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=UA-77782932-1`} />
            <Script
                id="gtm"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${gtag.GA_TRACKING_ID}', {
                                page_path: window.location.pathname,
                            })
                        `,
                }}
            />
            <ChakraProvider theme={extendedTheme}>
                <CSSReset />
                <DefaultSeo
                    titleTemplate="%s - Web & Mobile App Services @ Economical cost"
                    canonical={url}
                    openGraph={{
                        type: 'website',
                        locale: 'en_IN',
                        url,
                        siteName: 'Proficient Designers',
                        images: [
                            {
                                url: `${domain}/android-chrome-512x512.png`,
                                width: 512,
                                height: 512,
                                alt: 'Proficient Designers',
                                type: 'image/png',
                            },
                        ],
                    }}
                    twitter={{
                        handle: '@karthikesavan',
                        site: '@pdwebdesigners',
                        cardType: 'summary_large_image',
                    }}
                    additionalLinkTags={[
                        {
                            rel: 'icon',
                            href: `${domain}/favicon.ico`,
                        },
                        {
                            rel: 'apple-touch-icon',
                            href: `${domain}/apple-touch-icon.png`,
                            sizes: '180x180',
                        },
                        {
                            rel: 'icon',
                            href: `${domain}/favicon-16x16.png`,
                            sizes: '16x16',
                            type: 'image/png',
                        },
                        {
                            rel: 'icon',
                            href: `${domain}/favicon-32x32.png`,
                            sizes: '32x32',
                            type: 'image/png',
                        },
                        {
                            rel: 'mask-icon',
                            href: `${domain}/safari-pinned-tab.svg`,
                            color: '#5bbad5',
                        },
                        {
                            rel: 'manifest',
                            href: `${domain}/site.webmanifest`,
                        },
                    ]}
                />
                <FAQPageJsonLd mainEntity={faqs} />

                <CorporateContactJsonLd
                    url={domain}
                    logo={`${domain}/android-chrome-512x512.png`}
                    contactPoint={[
                        {
                            telephone: '+91 79047 63994',
                            contactType: 'customer service',
                            email: 'contact@proficientdesigners.com',
                            areaServed: 'IN',
                            availableLanguage: ['English', 'Tamil'],
                        },
                        {
                            telephone: '+91 79047 63994',
                            contactType: 'sales',
                            email: 'contact@proficientdesigners.com',
                            areaServed: 'IN',
                            availableLanguage: ['English', 'Tamil'],
                        },
                        {
                            telephone: '+91 79047 63994',
                            contactType: 'technical support',
                            email: 'contact@proficientdesigners.com',
                            areaServed: 'IN',
                            availableLanguage: ['English', 'Tamil'],
                        },
                    ]}
                />

                <SocialProfileJsonLd type="Organization" name="Proficient Designers" url={domain} sameAs={socLinks} />

                <Component {...pageProps} />

                <WhatsAppWidget
                    phoneNo="917904763994"
                    autoOpen={true}
                    autoOpenTimer={5000}
                    iconColor="rgb(165 188 53)"
                    iconBgColor="rgb(39 39 39)"
                    headerIcon={logo.src}
                    headerBgColor="rgb(39 39 39)"
                    headerTitle="Support"
                    headerCaption="We'll reply ASAP"
                    chatMessage={
                        <>
                            Hi there 👋 <br />
                            <br /> How can we help you?
                        </>
                    }
                    messageBox={true}
                    messageBoxTxt="Hello Proficient Designers..."
                    footerBgColor="rgb(165 188 53)"
                    btnBgColor="rgb(39 39 39)"
                />
            </ChakraProvider>
        </>
    )
}
