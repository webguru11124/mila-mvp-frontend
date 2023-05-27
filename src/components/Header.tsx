'use client'

import React, { FC } from 'react'
import { Avatar, Box, Container, HStack, Image } from '@chakra-ui/react'
import logo from '@/assets/img/mila-logo.svg'

interface Props {
    children?: React.ReactNode | React.ReactNode[]
}

const Header: FC<Props> = props => {
    return (
        <Box
            as="header"
            pos={'relative'}
            _before={{
                content: `""`,
                pos: 'absolute',
                bg: 'brand.secondary',
                w: 150,
                h: 150,
                left: -50,
                top: -50,
                zIndex: -1,
                borderRadius: 'full',
            }}>
            <Container maxW={'full'} py={4}>
                <HStack justifyContent={'space-between'} w={'full'}>
                    <Box w={150}>
                        <Image src={logo.src} alt={'mila'} />
                    </Box>
                    <Box>
                        <Avatar
                            src={
                                'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/388.jpg'
                            }
                        />
                    </Box>
                </HStack>
            </Container>
        </Box>
    )
}

export default Header
