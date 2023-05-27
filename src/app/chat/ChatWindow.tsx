'use client'
import bot from '@/assets/img/mila-avatar.svg'
import {
    Box,
    Card,
    Center,
    Container,
    Grid,
    GridItem,
    Heading,
    HStack,
    Image,
    Input,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react'
import { faker } from '@faker-js/faker'
import React, { FC, useEffect, useRef, useState } from 'react'
import { HiChatAlt2 } from 'react-icons/hi'
import Listening from './Listening'

interface ChatThreadProps {
    personType: string
    message?: string
}

interface ChatThreadArr extends Array<ChatThreadProps> {}

interface Props {
    children?: React.ReactNode | React.ReactNode[]
}

const Thread = (item: ChatThreadProps) => {
    const isBot = item.personType === 'bot'
    const borderRadius = isBot ? { borderTopLeftRadius: 0 } : { borderTopRightRadius: 0 }

    return (
        <Stack direction={'row'} mb={6} w={'full'} spacing={4} justify={isBot ? 'start' : 'end'}>
            <Box order={isBot ? 0 : 1} pl={isBot ? 0 : 3}>
                <Center w={50} h={50} bgColor={'brand.primary'} borderRadius={'2xl'}>
                    <Image
                        borderRadius={'2xl'}
                        alt={'avatar'}
                        src={
                            isBot
                                ? bot.src
                                : 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/388.jpg'
                        }
                    />
                </Center>
            </Box>
            <Box
                order={isBot ? 1 : 0}
                bg={isBot ? 'brand.primary' : 'brand.hover'}
                shadow={'sm'}
                px={4}
                py={2}
                borderRadius={'2xl'}
                {...borderRadius}>
                <Text color={isBot ? 'white' : 'brand.text'}>{item.message}</Text>
            </Box>
        </Stack>
    )
}

const ChatWindow: FC<Props> = props => {
    const messageBoxRef = useRef<HTMLInputElement>(null)
    const chatHistoryRef = useRef<HTMLInputElement>(null)
    const [messageBoxValue, setMessageBoxValue] = useState('')
    const [chatHistory, setChatHistory] = useState<any>([])
    const [chatThreads, setChatThreads] = useState<ChatThreadArr>([])

    type InputEvent = React.ChangeEvent<HTMLInputElement>
    const handleChange = (event: InputEvent) => setMessageBoxValue(event.target.value)

    const goToLast = () => {
        const divHeight = chatHistoryRef.current?.scrollHeight
        chatHistoryRef.current?.scrollTo({
            top: divHeight,
            left: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        const arr = new Array(30).fill(null).map(_ => faker.music.songName())
        setChatHistory(arr)
    }, [])

    useEffect(() => {
        messageBoxRef.current?.addEventListener('keypress', function (event) {
            // If the user presses the "Enter" key on the keyboard
            if (event.key === 'Enter') {
                setMessageBoxValue('')
                // Cancel the default action, if needed
                event.preventDefault()

                // Trigger the button element with a click
                setChatThreads(prevState => [
                    ...prevState,
                    {
                        personType: 'user',
                        message: messageBoxRef.current?.value,
                    },
                ])

                setTimeout(goToLast, 100)

                setTimeout(() => {
                    setChatThreads(prevState => [
                        ...prevState,
                        {
                            personType: 'bot',
                            message: faker.lorem.sentences(),
                        },
                    ])
                }, 1000)

                setTimeout(goToLast, 1100)
            }
        })
    }, [])

    return (
        <Container maxW={'full'}>
            <Card w={'full'}>
                <Grid templateColumns={'repeat(24, 1fr)'}>
                    <GridItem colSpan={5}>
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
                    </GridItem>
                    <GridItem colSpan={19} pos={'relative'}>
                        <Box h={'84vh'} overflowY={'scroll'} w={'full'} px={4} py={4} ref={chatHistoryRef}>
                            {chatThreads.length > 0 ? (
                                chatThreads.map((item, index) => <Thread key={index} {...item} />)
                            ) : (
                                <VStack py={12}>
                                    <Heading color={'brand.secondary'}>Welcome to Mila Ai</Heading>
                                    <Text>Start asking your questions</Text>
                                </VStack>
                            )}
                        </Box>
                        <HStack
                            pos={'absolute'}
                            left={0}
                            right={0}
                            bottom={0}
                            bg={'gray.50'}
                            p={2}
                            borderBottomRightRadius={'lg'}>
                            <Listening />
                            <Input
                                placeholder="Ask any question to Mila"
                                bg={'white'}
                                ref={messageBoxRef}
                                value={messageBoxValue}
                                onChange={handleChange}
                            />
                        </HStack>
                    </GridItem>
                </Grid>
            </Card>
        </Container>
    )
}

export default ChatWindow
