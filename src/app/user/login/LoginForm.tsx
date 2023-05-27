'use client'
import logo from '@/assets/img/mila-logo.svg'
import CustomBtn from '@/components/CustomBtn'
import { Card, CardBody, CardHeader } from '@chakra-ui/card'
import { Link } from '@chakra-ui/next-js'
import {
    Box,
    FormControl,
    FormLabel,
    HStack,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import { FiEye, FiEyeOff } from 'react-icons/fi'

interface Props {
    children?: React.ReactNode | React.ReactNode[]
}

const LoginForm: FC<Props> = props => {
    const { push } = useRouter()
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Card w={400}>
            <CardHeader>
                <Box w={150}>
                    <Image src={logo.src} alt={'mila'} />
                </Box>
            </CardHeader>
            <CardBody>
                <Stack spacing={6}>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <InputGroup size="md">
                            <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Enter password" />
                            <InputRightElement width="4.5rem">
                                <Box py="1.75rem" onClick={handleClick}>
                                    {show ? <FiEyeOff /> : <FiEye />}
                                </Box>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <HStack>
                        <FaQuestionCircle />
                        <Text>Forgot password</Text>
                    </HStack>
                    <CustomBtn onClick={async () => push('/chat')}>Login to Mila</CustomBtn>
                    <Link href={'/'} color={'brand.primary'} fontWeight={'bold'}>
                        Create an account
                    </Link>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default LoginForm
