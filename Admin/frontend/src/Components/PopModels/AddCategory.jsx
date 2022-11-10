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

export function AddCategory() {
     const { isOpen, onOpen, onClose } = useDisclosure();
     const inputStyle = {
          backgroundColor: "#fceef2",
     };

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
                                        <Input style={inputStyle} placeholder="Food Name" />
                                   </Box>
                              </Flex>
                         </ModalBody>

                         <ModalFooter>
                              <Button colorScheme="red" mr={3} onClick={onClose}>
                                   Close
                              </Button>
                              <Button colorScheme={"green"} variant="solid">
                                   Add
                              </Button>
                         </ModalFooter>
                    </ModalContent>
               </Modal>
          </>
     );
}
