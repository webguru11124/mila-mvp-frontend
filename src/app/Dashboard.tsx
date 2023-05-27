'use client'

import React, { FC } from 'react'
import { Container, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import CustomBtn from '@/components/CustomBtn'
import { useRouter } from 'next/navigation'

interface Props {
    children?: React.ReactNode | React.ReactNode[]
}

const Dashboard: FC<Props> = props => {
    const { push } = useRouter()

    return (
        <Container>
            <Flex h={'80vh'} alignItems={'center'}>
                <VStack spacing={6}>
                    <Heading>Welcome to Mila AI</Heading>
                    <Text textAlign={'center'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi cum, ea eveniet quas
                        repellendus sapiente sunt ullam veniam voluptatem! Cum expedita harum possimus qui quisquam
                        recusandae reprehenderit ullam voluptatum.
                    </Text>
                    <CustomBtn
                        onClick={async () => {
                            await push('/chat')
                        }}>
                        Login as user
                    </CustomBtn>
                </VStack>
            </Flex>
        </Container>
    )
}

export default Dashboard
