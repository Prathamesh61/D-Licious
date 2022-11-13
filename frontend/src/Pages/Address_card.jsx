import { Heading, HStack, Image, Text, useToast, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { deleteAddressData, getAddressData } from '../Redux/ProfileRedux/action';

const Address_card = ({ id, bldgno, locality, landmark, city }) => {
    const toast = useToast();
    const dispatch = useDispatch();
    const deleteFromCart = (id, name) => {
        dispatch(deleteAddressData(id))
        dispatch(getAddressData());
        toast({
            position: 'top',
            title: 'Removed Successfully.',
            description: `Address removed.`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    };

    return (
        <HStack border={"1px solid black"} width={"100%"} borderRadius={"5px"} padding="10px" justifyContent={'space-between'} alignItems={"start"}>
            <HStack>
                <Image width={"25px"} src='https://www.licious.in/img/rebranding/elements/house.jpg' alt='location' />
                <VStack>
                    <Text alignSelf={"start"} fontSize={"13px"} lineHeight={"13px"}>{bldgno}</Text>
                    <Text alignSelf={"start"} fontSize={"13px"} lineHeight={"13px"}>{locality}</Text>
                    <Text alignSelf={"start"} fontSize={"13px"} lineHeight={"13px"}>{landmark}</Text>
                    <Text alignSelf={"start"} fontSize={"13px"} lineHeight={"13px"}>{city}</Text>
                </VStack>
            </HStack>
            <MdDeleteForever cursor={"pointer"} color='black' size={"20px"} onClick={() => deleteFromCart(id)} />
        </HStack>
    )
}
export default Address_card