import { HStack, Image, Text, Tooltip, useToast, VStack } from '@chakra-ui/react'
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
        <HStack width={"100%"} padding={"5px"} gap={"3"}>
            <Image borderRadius={"5px"} width={"20%"} src={imgUrl} alt='prdoImg' />
            <VStack>
                <Text alignSelf={"start"}>{name}</Text>
                <HStack gap={"2"}>
                    <Text fontSize={"14px"}  >{net}</Text>
                    <Text fontSize={"14px"} color={"#d11243"} >₹ {price}</Text>
                    <Text fontSize={"13px"} textDecoration={"line-through"} >₹ {+price + 50}</Text>
                    <Text fontSize={"14px"}  >qty: {qty}</Text>
                </HStack>
            </VStack>
            <MdClose cursor={"pointer"} color='black' size={"16px"} onClick={() => deleteFromCart(id, name)} />
        </HStack>
    );
};

export default Checkout_cart_prod_card;
