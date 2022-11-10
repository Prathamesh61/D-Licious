import { Box, Container, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Logo from '../Logo/Logo'
import Profile from '../Profile/Profile' 

const Navbar = () => {
  return (
    <Box backgroundColor={"white"} height={"100px"} boxShadow="0 0 2px 2px #dedede">
     <Container maxW={"95%"}>

          <Flex alignItems={"center"} justifyContent="space-between">
               <Logo />
               <Profile />
          </Flex>
     </Container>
    </Box>
  )
}

export default Navbar