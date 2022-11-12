import { HStack, Image, Text, Tooltip, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdClose } from 'react-icons/md'
const Checkout_cart_prod_card = () => {
    return (
        <HStack width={"100%"} padding={"5px"} gap={"3"}>
            <Image borderRadius={"5px"} width={"20%"} src='https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/68a473d9-023e-aabe-0b3f-b6ed924cc470/original/Chicken_Thigh_Boneless_Hero_Shot.jpg' alt='prdoImg' />
            <VStack>
                <Text alignSelf={"start"}>Chicken Thigh Boneless</Text>
                <HStack gap={"2"}>
                    <Text fontSize={"14px"}  >450gms</Text>
                    <Text fontSize={"14px"} color={"#d11243"} >₹370</Text>
                    <Text fontSize={"13px"} textDecoration={"line-through"} >₹370</Text>
                    <Text fontSize={"14px"}  >qty: 1</Text>
                </HStack>
            </VStack>

            <MdClose cursor={"pointer"} color='black' size={"16px"} />


        </HStack>
    )
}

export default Checkout_cart_prod_card