import { Box, Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { AddCategory } from '../Components/PopModels/AddCategory'
import { AddRecipe } from '../Components/PopModels/AddRecipe'
import { AddSubCatagory } from '../Components/PopModels/AddSubCategory'

const Dashboard = () => {
  
  return (
    <Box>
      <AddRecipe />
      <AddCategory />
      <AddSubCatagory />
    </Box>
  )
}

export default Dashboard