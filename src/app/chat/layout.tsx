import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Chat with Mila.',
    description: 'Mila.',
}

export default function ChatWindowLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
