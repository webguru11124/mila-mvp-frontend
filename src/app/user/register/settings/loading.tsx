'use client'

import { Center, Spinner } from '@chakra-ui/react'

export default function Loading() {
    return (
        <Center h={'100vh'} w={'full'}>
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="brand.primary" size="xl" />
        </Center>
    )
}
