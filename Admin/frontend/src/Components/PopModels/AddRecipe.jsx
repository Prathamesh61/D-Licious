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
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export function AddRecipe() {
     const { isOpen, onOpen, onClose } = useDisclosure();
     const [category, setCategory] = useState([]);
     useEffect(() => {
          axios.get("http://localhost:5500/category/getcategory").then(res => {
               setCategory(res.data);
          }).catch(err => {
               // setCategory("Not Loaded");
               console.log(err);
          })
     }, [])
     const inputStyle = {
          backgroundColor: "#fceef2",
     };


     return (
          <>
               <Button colorScheme={"blue"} onClick={onOpen}>Add Recipe</Button>
               <Modal  size={"3xl"} isOpen={isOpen} onClose={onClose} >
                    <ModalOverlay backdropFilter='blur(10px) hue-rotate(90deg)' />
                    <ModalContent height={"600px"} overflowY={"scroll"} >
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
                                             <Input style={inputStyle} placeholder="Secondary Image Url" />
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
                                                  {category.map(cat => {
                                                       return <option key={cat._id} value={cat._id}>{cat.cat_name}</option>
                                                  })}
                                                  {/* <option value="">Chicken</option>
                                                  <option value="">Fish</option>
                                                  <option value="">Mutton</option>
                                                  <option value="">Veg</option> */}
                                             </Select>
                                        </Box>
                                   </Flex>
                                   <Flex gap="4">
                                        <Box>
                                             <label htmlFor="">Sub-Category</label>
                                             <Input style={inputStyle} />
                                        </Box>
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
