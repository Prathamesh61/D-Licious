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
     useDisclosure,
     useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { toastAlert } from "../utils/actions"
import axios from "axios"

export function AddCategory() {
     const { isOpen, onOpen, onClose } = useDisclosure();
     const toast = useToast();
     const [category, setCategory] = useState({cat_name:""});
     const inputStyle = {
          backgroundColor: "#fceef2",
     };
     let handleChange = (e) => {
          let { name, value } = e.target;
          setCategory({
               ...category,
               [name]: value
          })
     }

     let handleSubmit = () => {
          if (category.cat_name !== "") {
               axios.post("http://localhost:5500/category/add", {
                    body: category
               }).then(res => {
                    if(res.data.status===200){
                         toastAlert(toast,res.data.msg,"success");
                         onClose();
                    }
               })
          }else{
               toastAlert(toast,"Please Enter Category !!!","warning")
          }
           
     }

     return (
          <>
               <Button colorScheme={"blue"} onClick={onOpen}>Add Category</Button>
               <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay backdropFilter='blur(10px) hue-rotate(90deg)' />
                    <ModalContent >
                         <ModalHeader>Add Category</ModalHeader>
                         <ModalCloseButton />
                         <ModalBody>
                              <Flex flexDirection={"column"} gap="4">
                                   <Box>
                                        <label htmlFor="">Category*</label>
                                        <Input name="cat_name" onChange={(e) => handleChange(e)} style={inputStyle} placeholder="Food Name" />
                                   </Box>
                              </Flex>
                         </ModalBody>

                         <ModalFooter>
                              <Button colorScheme="red" mr={3} onClick={onClose}>
                                   Close
                              </Button>
                              <Button onClick={handleSubmit} colorScheme={"green"} variant="solid">
                                   Add
                              </Button>
                         </ModalFooter>
                    </ModalContent>
               </Modal>
          </>
     );
}
