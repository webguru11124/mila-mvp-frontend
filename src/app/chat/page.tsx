'use client'
import ChatWindow from '@/app/chat/ChatWindow'
import Header from '@/components/Header'
import { Stack } from '@chakra-ui/react'
import { FC } from 'react'

type Props = {
    children?: React.ReactNode
}

const ChatPage: FC = (props: Props) => {
    return (
        <>
            <Stack h={'100vh'} spacing={0} pb={5}>
                <Header />
                <ChatWindow />
            </Stack>
        </>
    )
}

export default ChatPage
