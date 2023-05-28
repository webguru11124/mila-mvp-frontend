'use client'
import logo from '@/assets/img/mila-logo-only.svg'
import { Link } from '@chakra-ui/next-js'
import { Box, Image, Text, Tooltip, VStack } from '@chakra-ui/react'
import React, { FC } from 'react'
import { BiAnchor } from 'react-icons/bi'
import {
    MdOutlineManageHistory,
    MdOutlineRecordVoiceOver,
    MdOutlineSettingsSuggest,
    MdOutlineSpellcheck,
} from 'react-icons/md'
import { TbVocabulary } from 'react-icons/tb'

const links = [
    {
        name: 'Grammer',
        slug: '/',
        icon: <BiAnchor />,
    },
    {
        name: 'Vocabulary',
        slug: '/',
        icon: <TbVocabulary />,
    },
    {
        name: 'Pronunciation',
        slug: '/',
        icon: <MdOutlineRecordVoiceOver />,
    },
    {
        name: 'Spelling',
        slug: '/',
        icon: <MdOutlineSpellcheck />,
    },
    {
        name: 'History',
        slug: '/',
        icon: <MdOutlineManageHistory />,
    },
]

type Props = {
    children?: React.ReactNode
}

const ChatNav: FC = (props: Props) => {
    return (
        <VStack w={78} h={'full'} py={4} pos={'fixed'} left={0} justify={'space-between'}>
            <Link href={'/'}>
                <Image src={logo.src} alt={'logo'} w={50} />
            </Link>
            <VStack spacing={6}>
                {links.map((link, i) => {
                    return (
                        <Tooltip key={i} hasArrow label={link.name} placement="right">
                            <Link href={link.slug} color={'white'} _hover={{ textDecor: 'none' }}>
                                <VStack>
                                    <Box fontSize={'2xl'}>{link.icon}</Box>
                                    <Text fontSize={9}>{link.name}</Text>
                                </VStack>
                            </Link>
                        </Tooltip>
                    )
                })}
            </VStack>
            <Box p={4}>
                <Link href={'/'} color={'white'} fontSize={'2xl'}>
                    <MdOutlineSettingsSuggest />
                </Link>
            </Box>
        </VStack>
    )
}

export default ChatNav
