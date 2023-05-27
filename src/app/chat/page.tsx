'use client'
import React, { FC } from 'react'
import Header from '@/components/Header'
import ChatWindow from '@/app/chat/ChatWindow'
import { Stack } from '@chakra-ui/react'

interface Props {
    children?: React.ReactNode | React.ReactNode[]
}

const ChatPage: FC<Props> = props => {
    return (
        <Stack h={'100vh'} spacing={0} pb={5}>
            <Header />
            <ChatWindow />
        </Stack>
    )
}

export default ChatPage
