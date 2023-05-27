'use client'
import LoginContent from '@/app/user/login/LoginContent'
import LoginForm from '@/app/user/login/LoginForm'
import { Box, Center, SimpleGrid } from '@chakra-ui/react'
import React, { FC } from 'react'

type Props = {
    children?: React.ReactNode
}

const LoginPage: FC = (props: Props) => {
    return (
        <>
            <Box h={'100vh'} overflow={'hidden'}>
                <SimpleGrid columns={2} h={'full'}>
                    <Center bg={'brand.primary'}>
                        <LoginContent />
                    </Center>
                    <Center
                        h={'full'}
                        pos={'relative'}
                        _before={{
                            content: `""`,
                            pos: 'absolute',
                            bg: 'brand.secondary',
                            w: 700,
                            h: 700,
                            right: '-20%',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: -1,
                            borderRadius: 'full',
                        }}>
                        <LoginForm />
                    </Center>
                </SimpleGrid>
            </Box>
        </>
    )
}

export default LoginPage
