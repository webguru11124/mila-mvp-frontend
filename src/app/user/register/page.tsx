'use client'
import { Box, Center, SimpleGrid } from '@chakra-ui/react'
import React, { FC } from 'react'
import RegisterContent from './RegisterContent'
import RegisterForm from './RegisterForm'

type Props = {
    children?: React.ReactNode
}

const LoginPage: FC = (props: Props) => {
    return (
        <>
            <Box h={'100vh'} overflow={'hidden'}>
                <SimpleGrid columns={2} h={'full'}>
                    <Center bg={'brand.primary'}>
                        <RegisterContent />
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
                        <RegisterForm />
                    </Center>
                </SimpleGrid>
            </Box>
        </>
    )
}

export default LoginPage
