import React, { FC } from 'react'
import { Button } from '@chakra-ui/react'

interface Props {
    onClick: () => void
    children?: React.ReactNode | React.ReactNode[]
}

const CustomBtn: FC<Props> = props => {
    const hoverStyle = { bgColor: 'brand.hover', color: 'brand.text' }

    return (
        <Button bgColor={'brand.primary'} onClick={props.onClick} px={6} color={'white'} _hover={hoverStyle}>
            {props.children}
        </Button>
    )
}

export default CustomBtn
