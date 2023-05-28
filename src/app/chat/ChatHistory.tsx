'use client'
import { Box, HStack, Heading } from '@chakra-ui/react'
import { faker } from '@faker-js/faker'
import React, { FC, useEffect, useState } from 'react'
import { HiChatAlt2 } from 'react-icons/hi'

type Props = {
    children?: React.ReactNode
}

const ChatHistory: FC = (props: Props) => {
    const [chatHistory, setChatHistory] = useState<any>([])

    useEffect(() => {
        const arr = new Array(30).fill(null).map(_ => faker.music.songName())
        setChatHistory(arr)
    }, [])

    return (
        <Box w={'full'}>
            <HStack py={3} px={4} borderTopLeftRadius={'lg'} bg={'brand.primary'}>
                <Box color={'brand.secondary'} fontSize={'3xl'}>
                    <HiChatAlt2 />
                </Box>
                <Heading fontSize={'md'} color={'white'}>
                    Chat History
                </Heading>
            </HStack>
            <Box h={'83vh'} overflowY={'scroll'}>
                {chatHistory.map((item: string, index: number) => (
                    <Box key={index} px={3} py={2} borderBottomWidth={1} borderBottomColor={'gray.100'}>
                        {item}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default ChatHistory
