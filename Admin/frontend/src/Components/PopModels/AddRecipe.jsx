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
     useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toastAlert } from "../utils/actions";

export function AddRecipe() {
     let toast = useToast();
     let initData = {
          name: "",
          imgUrl: "",
          imgUrl2: "",
          short_desc: "",
          net: "",
          tags: "",
          price: "",
          discount: "",
          qty: "",
          category_id: "",
          sub_cate: "",
          desc: ""
     }
     const { isOpen, onOpen, onClose } = useDisclosure();
     const [category, setCategory] = useState([]);
     const [formData, setFormData] = useState(initData);
     const [subCategory, setSubCategory] = useState([])
     useEffect(() => {
          console.log("first")
          axios.get("http://localhost:5500/category/getcategory/").then(res => {
               setCategory(res.data);
          }).catch(err => {
               console.log(err);
          })

          axios.get(`http://localhost:5500/subcat/get/category/${formData.category_id}`).then(res => {
               setSubCategory(res.data.data)
          }).catch(err => {
               console.log(err)
          })

     }, [formData.category_id])
     const inputStyle = {
          backgroundColor: "#fceef2",
     };

     let handleChange = (e) => {
          let { name, value } = e.target;
          setFormData({
               ...formData,
               [name]: value
          })
          console.log(formData)
     }

     let handleSubmit = () => {
          let { name,
               imgUrl,
               imgUrl2,
               short_desc,
               net,
               price,
               category_id,
               sub_cate,
               desc, } = formData;
          if (name !=="",imgUrl!=="",short_desc!=="",net!=="",price!=="",category_id!=="",sub_cate!=="",desc!==""){

               axios.post("http://localhost:5500/fooditems/add", {
                    formData
               }, {
                    headers: {
                         token: localStorage.getItem("token")
                    }
               }).then(res => {
                    let status = res.data.status == 200 ? "success" : "error";
                    toastAlert(toast, res.data.msg, status);
                    onClose()

               }).catch(err => {
                    console.log(err);
               });
          }else{
               toastAlert(toast, "'*' fields are required", "warning");

          }
     }

     return (
          <>
               <Button colorScheme={"blue"} onClick={onOpen}>Add Food Item</Button>
               <Modal size={"3xl"} isOpen={isOpen} onClose={onClose} >
                    <ModalOverlay backdropFilter='blur(10px) hue-rotate(90deg)' />
                    <ModalContent height={"600px"} overflowY={"scroll"} >
                         <ModalHeader>Add Food Item</ModalHeader>
                         <ModalCloseButton />
                         <ModalBody>
                              <Flex flexDirection={"column"} gap="4">
                                   <Box>
                                        <label htmlFor="">Name*</label>
                                        <Input onChange={(e) => handleChange(e)} name="name" style={inputStyle} placeholder="Food Name" />
                                   </Box>

                                   <Flex gap={"4"}>
                                        <Box> <label htmlFor="">Primary Image Url*</label>
                                             <Input onChange={(e) => handleChange(e)} name="imgUrl" style={inputStyle} placeholder="Primary Image Url " />
                                        </Box>
                                        <Box>
                                             <label htmlFor=""> Secondary Image Url </label>
                                             <Input onChange={(e) => handleChange(e)} name="imgUrl2" style={inputStyle} placeholder="Secondary Image Url" />
                                        </Box>
                                   </Flex>


                                   <Flex gap={"4"}>
                                        <Box width={"100%"}>
                                             <label htmlFor="">Net Weight*</label>
                                             <Input onChange={(e) => handleChange(e)} name="net" style={inputStyle} placeholder="Net Weight" />
                                        </Box>
                                        <Box width={"100%"}>
                                             <label>Short Description*</label>
                                             <Input onChange={(e) => handleChange(e)} name="short_desc" style={inputStyle} placeholder="description " />
                                        </Box>
                                   </Flex>
                                   <Box width={"100%"}>
                                        <label htmlFor="">Tag</label>
                                        <Input onChange={(e) => handleChange(e)} name="tags" style={inputStyle} placeholder="Tags: Saperate each tag with (comma) ','" />
                                   </Box>
                                   <Flex gap="4">
                                        <Box width={"100%"}>
                                             <label htmlFor="">Price*</label>
                                             <Input onChange={(e) => handleChange(e)} name="price" type="number" style={inputStyle} placeholder="Price" />
                                        </Box>
                                        <Box width={"100%"}>
                                             <label htmlFor="">Discount</label>
                                             <Input onChange={(e) => handleChange(e)} name="discount" type="number" style={inputStyle} placeholder="Discount" />
                                        </Box>
                                        <Box>
                                             <label htmlFor="">Quantity</label>
                                             <Input onChange={(e) => handleChange(e)} name="qty" type={"text"} placeholder="Quantity" />
                                        </Box>
                                        <Box width={"100%"}>
                                             <label htmlFor="">category</label>
                                             <Select onChange={(e) => handleChange(e)} name="category_id" style={inputStyle}>
                                                  <option value="">Select Category</option>
                                                  {category.map(cat => {
                                                       return <option key={cat._id} value={cat._id}>{cat.cat_name}</option>
                                                  })}
                                             </Select>
                                        </Box>
                                   </Flex>
                                   <Flex gap="4">
                                        <Box>
                                             <label htmlFor="">Sub-Category*</label>
                                             <Select name="sub_cate" onChange={(e) => handleChange(e)} style={inputStyle} >
                                                  <option value="">Select Sub-Category</option>
                                                  {
                                                       subCategory ? subCategory.map(subCat => {
                                                            return <option value={subCat._id} key={subCat._id} >{subCat.sub_cat}</option>
                                                       }) : null
                                                  }
                                             </Select>
                                        </Box>
                                        <Box>
                                             <label htmlFor="">Description*</label>
                                             <Textarea onChange={(e) => handleChange(e)} name="desc" style={inputStyle} />
                                        </Box>
                                   </Flex>
                              </Flex>
                         </ModalBody>

                         <ModalFooter>
                              <Button colorScheme="red" mr={3} onClick={onClose}>
                                   Close
                              </Button>
                              <Button onClick={handleSubmit} colorScheme={"green"} variant="solid">
                                   Add Recipe
                              </Button>
                         </ModalFooter>
                    </ModalContent>
               </Modal>
          </>
     );
}
