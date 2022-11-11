import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Signup from '../Pages/Signup'

const Navbar = () => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = React.useRef()

  return (
    <div style={{ display: "flex" }}>
        <div>
          {/* <Link to="/signup">Signup</Link> */}
          <Button  onClick={onOpen}> Open </Button>
        </div>
        <div>
           <Link to="/home">Home</Link>
        </div>
        <div>
           <Link to="/profile">profile</Link>
        </div>  
        <div>
           <Link to="/product">Product</Link>
        </div>  

        {/* *********** login/signup slider start */}
         <Drawer size={"sm"} isOpen={isOpen} placement='right' onClose={onClose} backgroundImage="url('https://m.licious.in/image/rebranding/jpg/user-login-new.jpg')"> 
          <Box>
            <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Sign In/Sign Up</DrawerHeader>
                <DrawerBody>
                  <Signup />
                </DrawerBody>
              </DrawerContent>
          </Box>
           
         </Drawer>
       {/* *********** login/signup slider end */}

    </div>
  )
}

export default Navbar


{/* <DrawerContent>
               <DrawerCloseButton />
               <DrawerHeader>Sign In/Sign Up</DrawerHeader>
               <DrawerBody>
                 <Input placeholder='Type here...' />
               </DrawerBody>
</DrawerContent> */}