import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Chat with Mila.ai',
    description: 'Mila.ai',
    openGraph: {
        title: 'Mila.ai',
        description: 'Mila.ai',
        images: ['https://localhost:3023/next.svg'],
    },
}

export default function ChatWindowLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
