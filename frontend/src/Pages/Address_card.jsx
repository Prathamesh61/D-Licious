import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
const Address_card = () => {
    return (
        <HStack border={"1px solid black"} borderRadius={"5px"} padding="10px" justifyContent={"start"} alignItems={"start"}>
            <Image width={"25px"} src='https://www.licious.in/img/rebranding/elements/house.jpg' alt='location' />
            <VStack>
                <Text alignSelf={"start"} fontSize={"13px"} lineHeight={"13px"}>B101 VANITA SOC SHANKESHWAR NAGAR ACHOLE ROAD NALLASOPARA</Text>
                <Text alignSelf={"start"} fontSize={"13px"} lineHeight={"13px"}>(EAST),</Text>
                <Text alignSelf={"start"} fontSize={"13px"} lineHeight={"13px"}>Nala Sopara - 401203, Maharashtra</Text>
            </VStack>
        </HStack>
    )
}
export default Address_card