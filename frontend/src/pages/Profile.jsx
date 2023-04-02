
import React, { useState } from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, FormLabel, HStack, Image, Img, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Slider, SliderFilledTrack, SliderTrack, Stack, Text, UnorderedList, useDisclosure, useToast, VStack, Wrap } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddressData, getMyOrdersData, getProfileData, patchProfileData, postAddressData } from '../Redux/ProfileRedux/action';
import { useLocation } from 'react-router-dom';
import Address_card from './Address_card';
import Checkout_cart_prod_card from './Checkout/Checkout_cart_prod_card';
import MyOrders_Card from './MyOrders_Card';

let addressInitial = {
    bldgno: "",
    locality: "",
    landmark: "",
    city: ""
}
let userInitial = {
    name: "",
    mobile: "",

}
const Profile = () => {

    const Profile = useSelector((state) => state.ProfileReducer.profile) || null;
    const MyOrder = useSelector((state) => state.ProfileReducer.myOrders?.orders) || null;
    const Address = useSelector((state) => state.ProfileReducer.address.address_List) || null

    const [isModalVisible, setIsModalVisible] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = React.useRef();
    const [userDetail, setuserDetail] = useState(userInitial);
    const [userAdd, setuserAdd] = useState(addressInitial);
    const dispatch = useDispatch();
    const [name, setName] = useState(Profile?.user?.name);
    const [mobile, setMobile] = useState(Profile?.user?.mobile);
    const toast = useToast();
    useEffect(() => {
        dispatch(getProfileData());
        dispatch(getAddressData());
        dispatch(getMyOrdersData());
    }, [])
    // console.log(Profile)
    // console.log(MyOrder, "MyOrder");

    const AddAddress = () => {
        setIsModalVisible(true);
    }
    const onCloseModal = () => {
        setIsModalVisible(false);
    };
    const handleUserDetail = (event) => {
        // event.preventDefault();
        const { name, value } = event.target
        setuserDetail({
            ...userDetail,
            [name]: value
        })
    }

    const submitUserDetails = () => {
        let data = {
            name: name,
            mobile: mobile
        }
        // console.log(data, "data")
        dispatch(patchProfileData(data));
        dispatch(getProfileData());
        toast({
            position: 'top',
            title: 'Updated Successfully.',
            description: `User Details Updated.`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    }


    const handleUserAddDetail = (event) => {
        // event.preventDefault();
        const { name, value } = event.target
        setuserAdd({
            ...userAdd,
            [name]: value
        })
    }
    // console.log(userAdd);
    const submitUserAdd = () => {
        let data = {
            bldgno: userAdd.bldgno,
            locality: userAdd.locality,
            landmark: userAdd.landmark,
            city: userAdd.city
        }
        // console.log(data, "data")
        dispatch(postAddressData(data));
        dispatch(getAddressData());
        toast({
            position: 'top',
            title: 'Added Successfully.',
            description: `Address Added.`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    }
    // console.log(userDetail);
    return (
        <Box width={["100%"]} mb={"100px"}  >
            <Box position={'relative'}>
                <Box height={"200px"} overflowY={"hidden"} >
                    <Image src="https://www.licious.in/img/default/licious-b-1.jpg" filter={"blur(1.5px)"} width="100%" alt=" bannerImage" />
                </Box>
                <Box position={"absolute"} top="140" margin={"auto"} width={"100%"}>
                    <Flex borderRadius={"5px"} onClick={onOpen} gap={3} flexWrap={"wrap"} padding="10px" backgroundColor={"#ffffff"} margin={"auto"} width={["100%", "90%", "70%"]} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" alignItems={"center"}>
                        <Image src='https://www.licious.in/image/rebranding/svg/profile-grey.svg' alt='profile' />
                        <VStack padding={"5px"} width={['60%', '60%', '30%']} justifyContent={"center"} alignItems="flex-start" lineHeight={"16px"}>
                            <Text color={'#d11243'} textDecoration={"underline"} textUnderlineOffset="5px" marginBottom={1.0}>{Profile?.user?.name}</Text>
                            <Text fontSize={"14px"} lineHeight={"13px"}>{Profile?.user?.email}</Text>
                            <Text fontSize={"13px"} lineHeight={"13px"}>+91 {Profile?.user?.mobile}</Text>
                        </VStack>
                        <Box height={'fit-content'} width={["100%", "100%", "35%"]} padding={"8px"} borderRadius={"5px"} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                            <HStack justifyContent={"space-between"}>
                                <Text fontSize={"13px"} lineHeight={"13px"}>Complete Your Profile</Text>
                                <Text fontSize={"13px"} lineHeight={"13px"}>86% Done</Text>
                            </HStack>
                            <Slider aria-label='slider-ex-2' colorScheme='red' defaultValue={86}>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                            </Slider>
                        </Box>
                    </Flex>
                </Box>
                <br />
                <Box margin={'auto'} marginBottom={"30px"} marginTop={["120px", "100px", "80px"]} width={["80%", "60%", "40%"]} _hover={{ border: "1px solid #d11243" }} border={"1px solid #dedede"} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" borderRadius={"5px"} alignItems={"center"}>
                    <Accordion allowMultiple  >
                        <AccordionItem borderRadius={"5px"}>
                            <h3 >
                                <AccordionButton>
                                    <Image width={"20px"} src='https://www.licious.in/image/rebranding/png/reward-icon.png' />&nbsp;&nbsp;&nbsp;
                                    <Box color='#d11243' flex='1' textAlign='left'>
                                        My Rewards
                                    </Box>
                                    <AccordionIcon color={"#d11243"} />
                                </AccordionButton>
                            </h3>
                            <AccordionPanel pb={4}>
                                <Text>No rewards yet.</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
                <Box margin={"auto"} bg={"#ffdc93"} width={["80%", "60%", "40%"]} border={"1px solid #dedede"} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" borderRadius={"5px"} alignItems={"center"}>
                    <HStack justifyContent={"space-between"} padding={"10px"} alignItems="center">
                        <Image src='https://www.licious.in/image/rebranding/svg/licious-meatopia-logo.svg' alt='Licious-meta' />
                        <Button bg={"#d11243"} color={"white"} size='sm' >Join Now</Button>
                    </HStack>
                    <hr color={"black"} />
                    <Text padding={"10px"} fontSize={"13px"} lineHeight={"13px"}>Join MEATOPIA to get free delivery on all orders with cart value more than Rs.99.</Text>
                </Box>
                <br />
                <Box margin={"auto"} width={["95%", "80%", "60%"]} border={"1px solid #dedede"} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" borderRadius={"5px"} alignItems={"center"}>
                    <Accordion allowMultiple  >
                        <AccordionItem borderRadius={"5px"}>
                            <h3>
                                <AccordionButton>
                                    <Box color='#d11243' flex='1' textAlign='left'>
                                        My Orders
                                    </Box>
                                    <AccordionIcon color={"#d11243"} />
                                </AccordionButton>
                            </h3>
                            <AccordionPanel pb={4}>
                                <Box flex='1' textAlign='left'>
                                    {MyOrder?.length > 0 && MyOrder?.map((item) => {
                                        return <MyOrders_Card key={item._id} data={item.products} time={item.createdAt} />
                                    })}
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem borderRadius={"5px"}>
                            <h3>
                                <AccordionButton>
                                    <Box color='#d11243' flex='1' textAlign='left'>
                                        Saved Address
                                    </Box>
                                    <AccordionIcon color={"#d11243"} />
                                </AccordionButton>
                            </h3>
                            <AccordionPanel pb={4}>
                                <VStack padding={"10px"} height={"250px"} overflowY={"scroll"} border={"1px solid red"} justifyContent={"flex-start"} alignItems={"flex-start"}>
                                    <HStack width={"100%"} justifyContent={'space-between'}>
                                        <Text>Saved Address</Text>
                                        <Button alignSelf={"end"} bg={"#d11243"} size={"md"} padding={"8px"} color={"white"} onClick={AddAddress}>Add New Address</Button>
                                    </HStack>
                                    {Address?.length > 0 && Address?.map((item) => {
                                        return <Address_card key={item._id} id={item._id} bldgno={item.bldgno} locality={item.locality} landmark={item.landmark} city={item.city} />
                                    })}
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem borderRadius={"5px"}>
                            <h3>
                                <AccordionButton>
                                    <Box color='#d11243' flex='1' textAlign='left'>
                                        D'Licious Wallet
                                    </Box>
                                    <AccordionIcon color={"#d11243"} />
                                </AccordionButton>
                            </h3>
                            <AccordionPanel pb={4}>
                                <Text>No wallet Added yet.</Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem borderRadius={"5px"}>
                            <h3>
                                <AccordionButton>
                                    <Box color='#d11243' flex='1' textAlign='left'>
                                        My Reviews
                                    </Box>
                                    <AccordionIcon color={"#d11243"} />
                                </AccordionButton>
                            </h3>
                            <AccordionPanel pb={4}>
                                <Text>No Reviews yet.</Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem borderRadius={"5px"}>
                            <h3>
                                <AccordionButton>
                                    <Box color='#d11243' flex='1' textAlign='left'>
                                        Refer a Friend
                                    </Box>
                                    <AccordionIcon color={"#d11243"} />
                                </AccordionButton>
                            </h3>
                            <AccordionPanel pb={4}>
                                <VStack width={"100%"} justifyContent={"center"} alignItems={"center"} padding={"5px"}>
                                    <Center>
                                        <Image src='https://d2407na1z3fc0t.cloudfront.net/Banner/rebranding_v2_referAndEarn.svg' alt="refer-a-friend" />
                                    </Center>
                                    <Text>Your friends are our friends too!</Text>
                                    <Text padding={"10px"} border={"1px dashed black"} bg={"#dedede"}>LA7{Math.floor(Math.random(200) * 2)}XWNDR</Text>
                                    <Text>Tell a friend they get Rs. 200 discount on min order value of Rs.500. You get Rs. 200 Licious cash</Text>
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>

            </Box>
            {/* Address modal */}
            {
                isModalVisible && <>
                    <Modal isOpen={isModalVisible} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader color=''>Add New Address </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <VStack gap={3}>
                                    <Input onChange={handleUserAddDetail} name='bldgno' placeholder='Flat no. / Building Name / Street no.' _placeholder={{ color: '#d11243' }} />
                                    <Input onChange={handleUserAddDetail} name='locality' placeholder='Enter Your Locality' _placeholder={{ color: '#d11243' }} />
                                    <Input onChange={handleUserAddDetail} name='landmark' placeholder='landmark ' _placeholder={{ color: '#d11243' }} />
                                    <Input onChange={handleUserAddDetail} name='city' placeholder='city' _placeholder={{ color: '#d11243' }} />
                                </VStack>
                            </ModalBody>
                            <ModalFooter>
                                <Button bg={"#d11243"} color='#ffffff' mr={3} onClick={() => {
                                    submitUserAdd()
                                    onCloseModal()
                                }}>
                                    Save
                                </Button>
                                <Button bg={"#d11243"} color='#ffffff' mr={3} onClick={onCloseModal}>
                                    cancel
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>
            }
            {/* Drawer Component */}
            <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                size={"sm"}
                onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>
                        Update Profile
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <br />
                            <Box height={'fit-content'} width={"100%"} padding={"8px"} borderRadius={"5px"} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                                <HStack justifyContent={"space-between"}>
                                    <Text fontSize={"13px"} lineHeight={"13px"}>Complete Your Profile</Text>
                                    <Text fontSize={"13px"} lineHeight={"13px"}>86% Done</Text>
                                </HStack>
                                <Slider aria-label='slider-ex-2' colorScheme='red' defaultValue={86}>
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                </Slider>
                            </Box>
                            <Box>
                                <FormLabel fontSize={"13px"} htmlFor='Full Name'>Full name</FormLabel>
                                <Input name="name" onChange={(e) => { setName(e.target.value) }}
                                    type={"text"}
                                    // ref={firstField}
                                    id='name'
                                    value={name}
                                    placeholder='Please enter Full Name'
                                />
                            </Box>
                            <Box>
                                <FormLabel fontSize={"13px"} htmlFor='Email'>Email</FormLabel>
                                <Input name="email" onChange={handleUserDetail}
                                    // value={user.password}
                                    type={"email"}
                                    ref={firstField}
                                    id='email'
                                    value={Profile?.user?.email}
                                    placeholder='Please enter Email ID'
                                    readOnly
                                />
                            </Box>
                            <Box>
                                <FormLabel fontSize={"13px"} htmlFor='Phone'>Phone Number</FormLabel>
                                <Input name="mobile" onChange={(e) => { setMobile(e.target.value) }}
                                    type={"tel"}
                                    // ref={firstField}
                                    id='phone'
                                    value={mobile}
                                    placeholder='Please enter Phone No' />
                            </Box>
                            <Box>
                                <Button onClick={() => {
                                    onClose();
                                    submitUserDetails();
                                }} width={"100%"} bg={"#d11243"} color='#ffffff'>
                                    Submit
                                </Button>
                            </Box>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box >
    )
}

export default Profile


