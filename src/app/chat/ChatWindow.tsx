'use client'
import bot from '@/assets/img/mila-avatar.svg'
import {
    Avatar,
    Box,
    Card,
    CardBody,
    Center,
    Circle,
    CircularProgress,
    CircularProgressLabel,
    Container,
    Heading,
    HStack,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Progress,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react'
import { faker } from '@faker-js/faker'
import React, { FC, useEffect, useRef, useState } from 'react'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'
import ChatNav from './ChatNav'
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
                bg={isBot ? 'gray.50' : 'brand.hover'}
                shadow={'sm'}
                px={4}
                py={2}
                borderRadius={'2xl'}
                {...borderRadius}>
                <Text color={isBot ? 'brand.text' : 'brand.text'}>{item.message}</Text>
            </Box>
        </Stack>
    )
}

const ChatWindow: FC<Props> = props => {
    const messageBoxRef = useRef<HTMLInputElement>(null)
    const chatHistoryRef = useRef<HTMLInputElement>(null)
    const [messageBoxValue, setMessageBoxValue] = useState('')
    const [showProgress, setShowProgress] = useState(false)
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
        messageBoxRef.current?.addEventListener('keypress', function (event) {
            // If the user presses the "Enter" key on the keyboard
            if (event.key === 'Enter') {
                setShowProgress(true)
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
                    setShowProgress(false)
                }, 1500)

                setTimeout(goToLast, 1600)
            }
        })
    }, [])

    return (
        <Box h={'100vh'} pos={'relative'} bg={'brand.primary'}>
            <ChatNav />
            <HStack ml={88} mr={6} pt={4} spacing={6}>
                <Circle bg={'white'}>
                    <CircularProgress value={40} color="green.500">
                        <CircularProgressLabel fontWeight={'bold'}>40%</CircularProgressLabel>
                    </CircularProgress>
                </Circle>
                <Box>
                    <Heading color={'white'} fontSize={'lg'}>
                        Basics of grammer
                    </Heading>
                    <Text noOfLines={1} color={'whiteAlpha.700'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minus corrupti exercitationem
                        minima nesciunt, tenetur numquam suscipit est esse provident aperiam assumenda at, neque illum
                        cupiditate quibusdam impedit quos quas!
                    </Text>
                </Box>
                <Avatar
                    border={'solid 2px white'}
                    src={
                        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/388.jpg'
                    }
                />
            </HStack>
            <Box ml={78} mr={4} py={4}>
                <Card w={'full'} h={'full'} borderRadius={'xl'}>
                    <CardBody p={2}>
                        <Box h={'87vh'} overflowY={'scroll'} w={'full'} px={4} pt={4} pb={12} ref={chatHistoryRef}>
                            {chatThreads.length > 0 ? (
                                chatThreads.map((item, index) => <Thread key={index} {...item} />)
                            ) : (
                                <Container>
                                    <VStack py={12}>
                                        <Heading color={'brand.primary'}>Welcome to Mila Ai</Heading>
                                        <Text>Start asking your questions</Text>
                                        <Text>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, iste
                                            voluptas recusandae illo tempore sunt libero hic incidunt ipsa vel neque
                                            enim natus facilis nihil explicabo pariatur vero dolor ducimus?
                                        </Text>
                                    </VStack>
                                </Container>
                            )}
                        </Box>
                    </CardBody>
                    {showProgress ? (
                        <Box pos={'absolute'} left={0} right={0} bottom={62} zIndex={'docked'}>
                            <Progress size="xs" hasStripe isIndeterminate colorScheme="blue" />
                        </Box>
                    ) : null}
                    <HStack
                        pos={'absolute'}
                        left={0}
                        right={0}
                        bottom={0}
                        bg={'brand.hover'}
                        p={3}
                        borderBottomRadius={'xl'}>
                        <Listening />
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <HiOutlineChatBubbleLeftRight />
                            </InputLeftElement>
                            <Input
                                border={0}
                                borderRadius={'xl'}
                                placeholder="Ask any question to Mila"
                                bg={'white'}
                                ref={messageBoxRef}
                                value={messageBoxValue}
                                onChange={handleChange}
                            />
                        </InputGroup>
                    </HStack>
                </Card>
            </Box>
        </Box>
    )
}

export default ChatWindow
