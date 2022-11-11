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
     useDisclosure,
     useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { toastAlert } from "../utils/actions"
import axios from "axios"
import { useEffect } from "react";

export function AddSubCatagory() {
     const { isOpen, onOpen, onClose } = useDisclosure();
     let [category, setCategory] = useState([]);
     const toast = useToast();
     const [subCat, setSubCat] = useState({ cat_id: "", sub_cat: "" });
     const inputStyle = {
          backgroundColor: "#fceef2",
     };

     useEffect(() => {
          axios.get("http://localhost:5500/category/getcategory").then(res => {
               setCategory(res.data);
          }).catch(err => {
               console.log(err);
          })
     }, [])
     let handleChange = (e) => {
          let { name, value } = e.target;
          setSubCat({
               ...subCat,
               [name]: value
          })
          console.log(subCat);
     }
     let handleSubmit = () => {
          if (subCat.cat_id !== "" && subCat.sub_cat!=="") {
               axios.post("http://localhost:5500/subcat/add", {
                    body: subCat
               }).then(res => {
                    if (res.data.status === 200) {
                         toastAlert(toast, res.data.msg, "success");
                         onClose();
                         setSubCat({ cat_id: "", sub_cat: "" })
                    }
               })
          } else {
               toastAlert(toast, "Please Enter Category !!!", "warning")
          }

     }

     return (
          <>
               <Button colorScheme={"blue"} onClick={onOpen}>Add Sub Category</Button>
               <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay backdropFilter='blur(10px) hue-rotate(90deg)' />
                    <ModalContent >
                         <ModalHeader>Add Sub Category</ModalHeader>
                         <ModalCloseButton />
                         <ModalBody>
                              <Flex flexDirection={"column"} gap="4">
                                   <Box>
                                        <Select name="cat_id" onChange={(e) => handleChange(e)}  >
                                             <option value="">Select Category</option>
                                             {category.map(cat => {
                                                  return <option key={cat._id} value={cat._id}>{cat.cat_name}</option>
                                             })}
                                        </Select>
                                   </Box>
                                   <Box>
                                        <label htmlFor="">Sub Category*</label>
                                        <Input name="sub_cat" onChange={(e) => handleChange(e)} style={inputStyle} placeholder="Sub Category" />
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
