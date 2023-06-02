'use client'
import { Container, Heading, Stack, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props {
    children?: React.ReactNode | React.ReactNode[]
}

const RegisterSettingsContent: FC<Props> = props => {
    return (
        <Container>
            <Stack spacing={6}>
                <Heading color={'brand.secondary'} fontSize={'6xl'}>
                    Mila Ai
                </Heading>
                <Heading color={'white'}>Intelligent Learning</Heading>
                <Text color={'whiteAlpha.700'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut autem cumque distinctio
                    doloribus id laborum provident quam similique! At, ducimus, minus! Consectetur non tenetur vitae
                    voluptatum? Necessitatibus, rem voluptatum?
                </Text>
            </Stack>
        </Container>
    )
}

export default RegisterSettingsContent
