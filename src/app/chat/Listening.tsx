import {
    Box,
    Center,
    Circle,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Stack,
    Text,
    VStack,
    useDisclosure,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { MdOutlineSettingsVoice, MdSettingsVoice } from 'react-icons/md'
import './listening.scss'

interface Props {
    children?: React.ReactNode | React.ReactNode[]
}

const Listening: FC<Props> = props => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const styles = {
        border: 'solid',
        borderWidth: '3px',
        borderColor: 'brand.hover',
    }

    return (
        <>
            <IconButton
                aria-label="Voice search"
                icon={<MdSettingsVoice />}
                bgColor={'white'}
                fontSize={'2xl'}
                onClick={onOpen}
            />
            <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
                <ModalOverlay />
                <ModalContent>
                    <Stack spacing={8}>
                        <Box>
                            <ModalCloseButton />
                        </Box>
                        <ModalBody>
                            <Center h="250">
                                <VStack>
                                    <Circle
                                        size="70"
                                        fontSize={'3xl'}
                                        bgColor={'brand.primary'}
                                        color="white"
                                        _before={styles}
                                        _after={styles}
                                        className="ripple">
                                        <MdOutlineSettingsVoice />
                                    </Circle>
                                    <Text fontWeight={'bold'}>Listening</Text>
                                </VStack>
                            </Center>
                        </ModalBody>
                    </Stack>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Listening
