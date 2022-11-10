import {
     Box,
     Button,
     Flex,
     Input,
     Modal,
     ModalBody,
     ModalCloseButton,
     ModalContent,
     ModalFooter,
     ModalHeader,
     ModalOverlay,
     Select,
     Textarea,
     useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export function AddRecipe() {
     const { isOpen, onOpen, onClose } = useDisclosure();
     const inputStyle = {
          backgroundColor: "#fceef2",
     };

     return (
          <>
               <Button colorScheme={"blue"} onClick={onOpen}>Add Recipe</Button>
               <Modal size={"3xl"} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay backdropFilter='blur(10px) hue-rotate(90deg)' />
                    <ModalContent >
                         <ModalHeader>Add Recipe</ModalHeader>
                         <ModalCloseButton />
                         <ModalBody>
                              <Flex flexDirection={"column"} gap="4">
                                   <Box>
                                        <label htmlFor="">Name*</label>
                                        <Input style={inputStyle} placeholder="Food Name" />
                                   </Box>

                                   <Flex gap={"4"}>
                                        <Box> <label htmlFor="">Primary Image Url*</label>
                                             <Input style={inputStyle} placeholder="Primary Image Url " />
                                        </Box>
                                        <Box>
                                             <label htmlFor=""> Secondary Image Url </label>
                                             <Input style={inputStyle} placeholder="Secondary Image Url"/>
                                        </Box>
                                   </Flex>
                                   

                                   <Flex gap={"4"}>
                                        <Box width={"100%"}>
                                             <label htmlFor="">Net Weight*</label>
                                             <Input style={inputStyle} placeholder="Net Weight" />
                                        </Box>
                                        <Box width={"100%"}>
                                             <label>Short Description</label>
                                             <Input style={inputStyle} placeholder="description " />
                                        </Box>
                                   </Flex>
                                   <Box width={"100%"}>
                                        <label htmlFor="">Tag</label>
                                        <Input style={inputStyle} placeholder="Tags: Saperate each tag with (comma) ','" />
                                   </Box>
                                   <Flex gap="4">
                                        <Box width={"100%"}>
                                             <label htmlFor="">Price*</label>
                                             <Input type="number" style={inputStyle} placeholder="Price" />
                                        </Box>
                                        <Box width={"100%"}>
                                             <label htmlFor="">Discount</label>
                                             <Input type="number" style={inputStyle} placeholder="Discount" />
                                        </Box>
                                        <Box width={"100%"}>
                                             <label htmlFor="">category</label>
                                             <Select style={inputStyle}>
                                                  <option value="">Chicken</option>
                                                  <option value="">Fish</option>
                                                  <option value="">Mutton</option>
                                                  <option value="">Veg</option>
                                             </Select>
                                        </Box>
                                   </Flex>
                                   <Flex>
                                        <Box>
                                             <label htmlFor="">Description</label>
                                        <Textarea style={inputStyle} />
                                        </Box>
                                   </Flex>
                              </Flex>
                         </ModalBody>

                         <ModalFooter>
                              <Button colorScheme="red" mr={3} onClick={onClose}>
                                   Close
                              </Button>
                              <Button colorScheme={"green"} variant="solid">
                                   Add Recipe
                              </Button>
                         </ModalFooter>
                    </ModalContent>
               </Modal>
          </>
     );
}
