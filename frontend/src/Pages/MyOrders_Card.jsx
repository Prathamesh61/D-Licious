import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const MyOrders_Card = ({ data, time }) => {
    return (
        <Box borderRadius={"5px"} padding={5} border={"1px solid red"}>
            {data.map((item) => {
                return <HStack borderBottom={"1px solid black"} width={"100%"} padding={"5px"} gap={"3"}>
                    <Image borderRadius={"5px"} width={"10%"} src={item.imgUrl} alt='prdoImg' />
                    <VStack>
                        <Text alignSelf={"start"}>{item.name}</Text>
                        <HStack gap={"2"}>
                            <Text fontSize={"14px"}>{item.HStacknet}</Text>
                            <Text fontSize={"14px"}>qty: {item.qty}</Text>
                        </HStack>
                    </VStack>
                </HStack>
            })}
            <Text color={"black"} fontSize={"12px"}>{time}</Text>
        </Box>
    )
}

export default MyOrders_Card