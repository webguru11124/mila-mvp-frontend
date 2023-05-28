import ChatWindow from '@/app/chat/ChatWindow'
import { FC } from 'react'

type Props = {
    children?: React.ReactNode
}

const ChatPage: FC = (props: Props) => {
    return (
        <>
            <ChatWindow />
        </>
    )
}

export default ChatPage
