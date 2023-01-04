import { Box, Flex, HStack, Image, Text, Tooltip, useToast, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdClose } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { deleteCartData, getCartData } from '../../Redux/ProfileRedux/action';
const Checkout_cart_prod_card = ({ id, name, imgUrl, net, price, qty }) => {
    const dispatch = useDispatch();
    const toast = useToast();
    const deleteFromCart = (id, name) => {
        dispatch(deleteCartData(id))
        dispatch(getCartData());
        toast({
            position: 'top',
            title: 'Removed Successfully.',
            description: `${name} hasbeen removed from the cart`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    };
    return (
        <Flex position={"relative"} flexWrap={'wrap'} width={"100%"} borderRadius={"5px"} padding={"5px"} gap={"3"} boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
            <Image borderRadius={"5px"} width={["100%", "50%", '150px']} src={imgUrl} alt='prdoImg' />
            <VStack >
                <Text alignSelf={"start"} fontSize={"18px"} fontWeight="600">{name}</Text>
                <HStack gap={"2"} flexWrap={'wrap'} padding={["10px", "0px"]}>
                    <Text fontSize={"14px"} ><b>Net :</b> {net}</Text>
                    <Text fontSize={"14px"} color={"#d11243"} > <b>Price :</b> ₹ {price}</Text>
                    <Text fontSize={"13px"} textDecoration={"line-through"} >₹ {+price + 50}</Text>
                    <Text fontSize={"14px"} ><b>Quantity :</b> {qty}</Text>
                </HStack>
            </VStack>
            <Box
                boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                alignSelf={"right"}
                borderRadius={2}
                color="black"
                as={MdClose}
                position="absolute"
                top={3}
                right={3}
                cursor={"pointer"}
                onClick={() => deleteFromCart(id, name)}
            />
        </Flex >
    );
};

export default Checkout_cart_prod_card;
