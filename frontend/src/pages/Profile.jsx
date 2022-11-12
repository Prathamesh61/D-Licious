import React, { useState } from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, FormLabel, HStack, Image, Img, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Slider, SliderFilledTrack, SliderTrack, Stack, Text, UnorderedList, useDisclosure, VStack, Wrap } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddressData, getProfileData } from '../Redux/ProfileRedux/action';
import { useLocation } from 'react-router-dom';
import Address_card from './Address_card';

let initial = {
    email: "",
    password: ""
}
const Profile = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = React.useRef();
    const [userDetail, setuserDetail] = useState({});
    const [userAdd, setuserAdd] = useState({});
    const dispatch = useDispatch();
    const Profile = useSelector((state) => state.ProfileReducer.profile) || null;

    const Address = useSelector((state) => state.ProfileReducer.address) || null

    console.log(Profile, Address, "Address");
    useEffect(() => {
        dispatch(getProfileData());
        dispatch(getAddressData());
    }, [])
    // console.log(Profile)

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
    const handleUserAddDetail = (event) => {
        // event.preventDefault();
        const { name, value } = event.target
        setuserAdd({
            ...userAdd,
            [name]: value
        })
    }
    // console.log(userDetail);
    return (
        <Box width={["100%"]} height={"800px"}  >
            <Box position={'relative'}>
                <Box height={"200px"} overflowY={"hidden"} >
                    <Image src="https://www.licious.in/img/default/licious-b-1.jpg" filter={"blur(1.5px)"} width="100%" alt=" bannerImage" />
                </Box>
                <Box position={"absolute"} top="140" margin={"auto"} width={"100%"}>
                    <Flex onClick={onOpen} gap={3} flexWrap={"wrap"} padding="10px" backgroundColor={"#ffffff"} margin={"auto"} width={["100%", "80%", "60%"]} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" alignItems={"center"}>
                        <Image src='https://www.licious.in/img/rebranding/profile_icon_2.svg' alt='profile' />
                        <VStack padding={"5px"} width={['60%', '60%', '30%']} justifyContent={"center"} alignItems="flex-start" lineHeight={"16px"}>
                            <Text textDecoration={"underline"} marginBottom={1.0}>{Profile?.user?.name}</Text>
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
                <Box margin={"60px auto"} width={["70%", "50%", "30%"]} _hover={{ border: "1px solid #d11243" }} border={"1px solid #dedede"} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" borderRadius={"5px"} alignItems={"center"}>
                    <Accordion allowMultiple  >
                        <AccordionItem borderRadius={"5px"}>
                            <h3 >
                                <AccordionButton>
                                    <Image width={"20px"} src='https://www.licious.in/img/rebranding/rewards/milestone_logo.svg' />&nbsp;&nbsp;&nbsp;
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
                        <Image src='https://www.licious.in/img/rebranding/loyalty_licious_logo.svg' alt='Licious-meta' />
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
                                        Order History
                                    </Box>
                                    <AccordionIcon color={"#d11243"} />
                                </AccordionButton>
                            </h3>
                            <AccordionPanel pb={4}>
                                <Text>No Orders yet.</Text>
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
                                    <Button alignSelf={"end"} bg={"#d11243"} size={"sm"} color={"white"} onClick={AddAddress}>Add New Address</Button>
                                    <Text>Saved Address</Text>
                                    {/* {Address.address_List.map((item) => {
                                            <Address_card key={item._id} item={item} />
                                        })} */}
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
                                    <Input name='bldgno' placeholder='Flat no. / Building Name / Street no.' _placeholder={{ color: '#d11243' }} />
                                    <Input name='locality' placeholder='Enter Your Locality' _placeholder={{ color: '#d11243' }} />
                                    <Input name='landmark' placeholder='landmark ' _placeholder={{ color: '#d11243' }} />
                                    <Input name='city' placeholder='city' _placeholder={{ color: '#d11243' }} />
                                </VStack>
                            </ModalBody>
                            <ModalFooter>
                                <Button bg={"#d11243"} color='#ffffff' mr={3} onClick={onCloseModal}>
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
                                <Input name="name" onChange={handleUserDetail}
                                    value={Profile?.user?.name}
                                    type={"text"}
                                    ref={firstField}
                                    id='name'
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
                                <Input name="mobile" onChange={handleUserDetail}
                                    type={"tel"}
                                    ref={firstField}
                                    id='phone'
                                    value={Profile?.user?.mobile}
                                    placeholder='Please enter Phone No'
                                />
                            </Box>
                            <Box>
                                <Button onClick={() => {
                                    onClose();
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

