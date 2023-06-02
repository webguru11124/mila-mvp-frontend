'use client'
import logo from '@/assets/img/mila-logo.svg'
import CustomBtn from '@/components/CustomBtn'
import { Card, CardBody, CardHeader } from '@chakra-ui/card'
import {
    Box,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Image,
    Input,
    Select,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'

interface Props {
    children?: React.ReactNode | React.ReactNode[]
}

const RegisterSettingsForm: FC<Props> = props => {
    const { push } = useRouter()
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Card w={600}>
            <CardHeader>
                <Box w={150}>
                    <Image src={logo.src} alt={'mila'} />
                </Box>
                <Text>Fill up the below form</Text>
            </CardHeader>
            <CardBody>
                <Stack spacing={6}>
                    <Grid templateColumns={'repeat(4, 1fr)'} gap={6}>
                        <GridItem colSpan={3}>
                            <FormControl>
                                <FormLabel>Full name</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Age</FormLabel>
                                <Input type="number" />
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel>Native Language</FormLabel>
                                <Select>
                                    <option value="option1">English</option>
                                    <option value="option2">Spanish</option>
                                    <option value="option3">Latin</option>
                                </Select>
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel>Target Language</FormLabel>
                                <Select>
                                    <option value="option1">English</option>
                                    <option value="option2">Spanish</option>
                                    <option value="option3">Latin</option>
                                </Select>
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={4}>
                            <FormControl>
                                <FormLabel>Current self perceived level </FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={4}>
                            <FormControl>
                                <FormLabel>Interest and goals</FormLabel>
                                <Textarea />
                            </FormControl>
                        </GridItem>

                        <GridItem colSpan={4}>
                            <FormControl>
                                <FormLabel>Commitment</FormLabel>
                                <Textarea />
                            </FormControl>
                        </GridItem>
                    </Grid>

                    <Box>
                        <CustomBtn onClick={async () => push('/chat')}>Save</CustomBtn>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default RegisterSettingsForm
