import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Login - Mila.',
    description: 'Mila.',
}

export default function ChatWindowLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
