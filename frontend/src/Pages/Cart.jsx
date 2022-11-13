
import React, { useEffect } from 'react'
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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getCartData } from '../Redux/ProfileRedux/action'

const Cart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.ProfileReducer.cart.cart) || [];

    useEffect(() => {
        dispatch(getCartData());
    }, [])
    console.log(cart, "cart");
    let totalOfItems = 0;
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
                            {cart.length > 0 && cart.map((item) => {
                                totalOfItems += Number(item.price);
                                return <Cart_prod_card key={item._id} id={item._id} name={item.name} net={item.net} price={item.price} />
                            })}
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
                                <HStack width={"100%"} lineHeight={"14px"} justifyContent={"space-between"} alignItems={"center"}><Text>Sub Total</Text> <Text>{totalOfItems}</Text> </HStack>
                                <HStack width={"100%"} lineHeight={"14px"} justifyContent={"space-between"} alignItems={"center"}><Text>Discount</Text> <Text>0</Text> </HStack>
                                <HStack width={"100%"} lineHeight={"14px"} justifyContent={"space-between"} alignItems={"center"}><Text>Delivery Charge</Text> <Text>0</Text> </HStack>
                                <Box border={"0.1px solid black"} width={"100%"}></Box>
                                <HStack fontSize={"l"} width={"100%"} lineHeight={"14px"} justifyContent={"space-between"} alignItems={"center"}><Text>Total</Text> <Text>{totalOfItems}</Text> </HStack>
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
                                <Text fontWeight={"600"} fontSize={"20px"}>Total : {totalOfItems}</Text>
                                <Button colorScheme={"red"} onClick={() => {
                                    navigate("/checkout")
                                    onClose()
                                }}>Proceed To Checkout</Button>
                            </HStack>
                        </VStack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Cart
