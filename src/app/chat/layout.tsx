import { Inter } from 'next/font/google'
import { Providers } from './providers'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Mila.ai',
    description: 'Mila.ai',
    openGraph: {
        title: 'Mila.ai',
        description: 'Mila.ai',
        images: ['https://localhost:3023/next.svg'],
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
