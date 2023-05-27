import React from 'react'
import { Providers } from './providers'

export const metadata = {
    title: 'Mila.',
    description: 'Mila.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
