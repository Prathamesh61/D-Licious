import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const MyOrders_Card = ({ name, id, imgUrl, net, qty, time }) => {
    return (
        <HStack width={"100%"} padding={"5px"} gap={"3"}>
            <Image borderRadius={"5px"} width={"10%"} src={imgUrl} alt='prdoImg' />
            <VStack>
                <Text alignSelf={"start"}>{name}</Text>
                <HStack gap={"2"}>
                    <Text fontSize={"14px"}>{net}</Text>
                    <Text fontSize={"14px"}>qty: {qty}</Text>
                </HStack>
            </VStack>
            <Text color={"black"} fontSize={"22px"}>{time}</Text>
        </HStack>
    )
}

export default MyOrders_Card