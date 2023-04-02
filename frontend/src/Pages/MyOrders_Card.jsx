import { Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const MyOrders_Card = ({ data, time }) => {
    let startTime = new Date(`${time}`).toLocaleString();
    let total = 0;
    return (
        <Box padding={5} borderBottom={"1px solid red"} mb={["5px", "10px"]}>
            <HStack justifyContent={'space-between'} alignItems={'flex-end'} mb={"5px"}>
                <Text color={"black"} fontSize={"16px"} > <span style={{ color: 'red' }}> ordered {data?.length} Products on </span> {startTime} </Text>
                <Text color={"black"} fontSize={"16px"} ><span style={{ color: 'red' }}> Total</span>&nbsp;:&nbsp;₹&nbsp;{data.reduce((accumulator, currentValue) => accumulator + +currentValue.price, 0)}</Text>
            </HStack>
            {data.map((item) => {
                return <Flex position={"relative"} flexWrap={'wrap'} width={"100%"} borderRadius={"5px"} padding={"5px"} mb={"3"} boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                    <Image borderRadius={"5px"} width={["100%", "50%", '150px']} src={item.imgUrl} alt='prdoImg' />
                    <VStack >
                        <Text alignSelf={"start"} fontSize={"18px"} padding={["10px"]} fontWeight="600">{item.name}</Text>
                        <HStack color={"#d11243"} gap={"2"} flexWrap={'wrap'} padding={["10px"]}>
                            <Text fontSize={"14px"} ><b>Net :</b> {item.net}</Text>
                            <Text fontSize={"14px"} > <b>Price :</b> ₹ {item.price}</Text>
                            <Text fontSize={"13px"} textDecoration={"line-through"} >₹ {+item.price + 50}</Text>
                            <Text fontSize={"14px"} ><b>Quantity :</b> {item.qty}</Text>
                        </HStack>
                    </VStack>
                </Flex>
            })}
        </Box>
    )
}

export default MyOrders_Card