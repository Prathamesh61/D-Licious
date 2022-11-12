import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Text,
    Box,
    HStack,
    Image,
    VStack
} from '@chakra-ui/react'
import Cart_prod_card from './Cart_prod_card'

const Cart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size={"sm"}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Text fontSize={'22px'}> Order Sumamry</Text>
                    </DrawerHeader>
                    <DrawerBody backgroundColor={"#f2f2f2"} overflowY={"auto"}>
                        <Text fontWeight={'600'} fontSize={'13px'} padding={"5px"} color={"white"} textAlign={"center"} backgroundColor={'#417505'} width={"100%"}>Congratulations, Your delivery charge is waived off!!!</Text>
                        <br />
                        <Box padding={"5px"} backgroundColor="white" borderRadius={"5px"} >
                            <Cart_prod_card />
                            <Cart_prod_card />
                            <Cart_prod_card />
                            <Cart_prod_card />
                        </Box>
                        <br />
                        <Text fontWeight={'600'} fontSize={'16px'} padding={"5px"}>Stop paying delivery charges. Join Meatopia today!</Text>
                        <HStack borderRadius={"5px"} backgroundColor={"#ffdc93"} justifyContent={"space-between"} padding={"10px"} alignItems="center">
                            <Image src='https://www.licious.in/img/rebranding/loyalty_licious_logo.svg' alt='Licious-meta' />
                            <Button bg={"#d11243"} color={"white"} size='xs' >Join Now</Button>
                        </HStack>
                        <br />
                        <Box padding={"8px"} border={'1px dashed black'}>
                            <Text w="100%" fontSize={"l"} textAlign={'start'} fontWeight="500" mb="2%">
                                Bill Details
                            </Text>
                            <VStack flexWrap={"wrap"} width={"100%"} >
                                <HStack width={"100%"} lineHeight={"14px"} justifyContent={"space-between"} alignItems={"center"}><Text>Sub Total</Text> <Text>1636.1</Text> </HStack>
                                <HStack width={"100%"} lineHeight={"14px"} justifyContent={"space-between"} alignItems={"center"}><Text>Discount</Text> <Text>0</Text> </HStack>
                                <HStack width={"100%"} lineHeight={"14px"} justifyContent={"space-between"} alignItems={"center"}><Text>Delivery Charge</Text> <Text>0</Text> </HStack>
                                <Box border={"0.1px solid black"} width={"100%"}></Box>
                                <HStack fontSize={"l"} width={"100%"} lineHeight={"14px"} justifyContent={"space-between"} alignItems={"center"}><Text>Total</Text> <Text>1636.1</Text> </HStack>
                            </VStack>
                            <br />
                        </Box>

                    </DrawerBody>

                    <DrawerFooter>
                        <VStack width={"100%"}>
                            <HStack width={"100%"} padding={"5px"} justifyContent={"space-between"} borderBottom={"0.5px solid black"}>
                                <HStack mb={2}>
                                    <Image width={"27px"} src='https://www.licious.in/img/rebranding/map-icon.png' />
                                    <Text fontWeight={"600"} fontSize={"20px"}>
                                        Delivery Address
                                    </Text>
                                </HStack>
                                <Text textDecoration={"underline"} color={"#d11243"}>Change</Text>
                            </HStack>
                            <HStack width={"100%"} padding={"5px"} justifyContent={"space-evenly"}>
                                <Text fontWeight={"600"} fontSize={"20px"}>Total : 1631.0</Text>
                                <Button colorScheme={"red"} onClick={onClose}>Proceed To Checkout</Button>
                            </HStack>
                        </VStack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Cart