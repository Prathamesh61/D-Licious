
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Image, Input, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Signup from '../Pages/Signup'


import Signup from "../Pages/Signup";

import {
  Box,
  Flex,
  Text,
  Image,
  Select,
  Button,
  Input,
} from "@chakra-ui/react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import LICIOUS from "./D'LICIOUS.jpeg";
import axios from "axios";

const Categories = [
  {
    title: "Today's Deals",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d52759ea-ba5a-0f5b-3dc1-d28875335a3f/original/Todays_Deal_1.png",
  },
  {
    title: "Chicken",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png",
  },
  {
    title: "Fish & Seafood",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/eb162d28-5f88-a381-1d45-7f2f66d2c776/original/FIsh.png",
  },
  {
    title: "Mutton",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7113e792-7025-9e6f-6057-7174edf30856/original/Mu.png",
  },

  {
    title: "Ready to Cook",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/43faaebc-f2ae-102a-ea01-af3e6c37a890/original/RTC.png",
  },

  {
    title: "Prawns",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/404e48e5-c887-1e12-7a3a-232e01fc9771/original/Prawn.png",
  },
  {
    title: "Cold Cuts",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5c7f1b3a-47b4-3ade-f170-f003cace2482/original/Coldcuts.png",
  },
  {
    title: "Spreads",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/88d8c760-ee1f-7696-7827-fcc9661925cc/original/Spread_Bottle1.png",
  },
  {
    title: "Eggs",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/04d58840-f014-e613-24d4-1908db9a7e63/original/Eggs.png",
  },
  {
    title: "Biryani & Kebab",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/189690c6-c9d5-2441-938b-6c7e124972c7/original/Biryani.png",
  },
  {
    title: "Combos",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/9d531fa3-8969-b105-6e93-f8810d54ab4c/original/Combo_(1).png",
  },
  {
    title: "Plant-Based-Meat",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/fe100e84-9e15-c179-ecca-7cde26af9969/original/PBM_6_(7).png",
  },
];

const AboveNavbar = () => {
  return (
    <Box className="aboveNavbar">
      <Box className="aboveNavbar-inner">
        <Box className="apple-playStore">
          <Box>
            <a href="https://www.licious.in/about-us">Why Delicious?</a>
          </Box>

          <Flex style={{ alignItems: "center" }}>
            <Text>DownloadApp </Text>
            <a
              style={{ paddingLeft: "5%" }}
              href="https://itunes.apple.com/in/app/buy-meat-online-licious/id1052440342?mt=8"
            >
              <Image
                width="24px"
                src="https://www.licious.in/img/rebranding/ios_app_icon.svg"
              />
            </a>
            <a
              style={{ paddingLeft: "5%" }}
              href="https://play.google.com/store/apps/details?id=com.licious"
            >
              <Image
                width="24px"
                src="https://www.licious.in/img/rebranding/android_app_icon.svg"
              />
            </a>
          </Flex>
        </Box>
        <Box className="contact-about">
          <Text>
            <Link to="/certificate">Certification</Link>
          </Text>
          <Text>
            <Link to='/aboutDelicious'>About</Link>
          </Text>
          <Text>
            <a href="">Careers</a>
          </Text>
          <Text>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen}>
                    {isOpen ? "Contact" : "Contact"}
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <a href="tel:1800-4190-786">1800-4190-786</a>
                    </MenuItem>
                    <MenuItem>
                      <a href="mailto:talktous@licious.com">
                        talktous@licious.com#
                      </a>
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const MiddleNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const Api_start = `https://api.openweathermap.org/data/2.5/weather?`;
  const Api_key = `566cee1b29349fab7cfc8dfe8ff9e2fc`;

  const [Latitude, setLatitude] = useState("");
  const [Longitude, setLongitude] = useState("");
  const [city, setCity] = useState("");




  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position)
      // console.log("position",position.coords.latitude,position.coords.longitude)
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    let finalApi_EndPoint = `${Api_start}lat=${Latitude}&lon=${Longitude}&appid=${Api_key}`;
    console.log(finalApi_EndPoint);

    axios.get(finalApi_EndPoint).then((res) => {
      console.log(res.data.name);
      setCity(res.data.name);
    });
  }, [Latitude, Longitude]);


  return (

    <Box className="MiddleNavbar-main">
      <Flex style={{ alignItems: "center", justifyContent: "space-between" }}>
        <Box>
          <Link to="/home">
            <Image width="150px" src={LICIOUS} />
          </Link>
        </Box>
        <Box>
          <Flex>
            <Image src="https://www.licious.in/img/rebranding/location_icon.svg" />
            <Text>{city ? city : <Button>Choose City</Button>}</Text>
          </Flex>
        </Box>
      </Flex>

      <Box width="30%">
        <Input
          borderColor="gray"
          variant="filled"
          size={["sm", "md", "lg"]}
          placeholder="Search for any delicious product"
        />
      </Box>

      <Flex
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12%",
          width: "30%",
        }}
      >
        <Box>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen}>
                  {
                    <Flex>
                      <Image src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" />
                      <Text _hover={{ color: "#D11243" }}>Categories</Text>
                    </Flex>
                  }
                </MenuButton>
                <MenuList style={{ padding: "5%" }}>
                  <MenuItem>
                    <Link
                      to="/product"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image
                        width="35px"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d52759ea-ba5a-0f5b-3dc1-d28875335a3f/original/Todays_Deal_1.png"
                      />
                      <Text>&nbsp;Today's Deals</Text>
                    </Link>{" "}
                  </MenuItem>

                  <MenuItem>
                    <Link
                      to="/product"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image
                        width="35px"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png"
                      />
                      <Text>&nbsp;Chicken</Text>
                    </Link>{" "}
                  </MenuItem>

                  <MenuItem>
                    <Link
                      to="/product"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image
                        width="35px"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/eb162d28-5f88-a381-1d45-7f2f66d2c776/original/FIsh.png"
                      />
                      <Text>&nbsp;Fish & Seafood</Text>
                    </Link>{" "}
                  </MenuItem>

                  <MenuItem>
                    <Link
                      to="/product"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image
                        width="35px"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7113e792-7025-9e6f-6057-7174edf30856/original/Mu.png"
                      />
                      <Text>&nbsp;Mutton</Text>
                    </Link>{" "}
                  </MenuItem>

                  <MenuItem>
                    <Link
                      to="/product"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image
                        width="35px"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/43faaebc-f2ae-102a-ea01-af3e6c37a890/original/RTC.png"
                      />
                      <Text>&nbsp;Ready to Cook</Text>
                    </Link>{" "}
                  </MenuItem>

                  <MenuItem>
                    <Link
                      to="/product"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image
                        width="35px"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/404e48e5-c887-1e12-7a3a-232e01fc9771/original/Prawn.png"
                      />
                      <Text>&nbsp;Prawns</Text>
                    </Link>{" "}
                  </MenuItem>

                  <MenuItem>
                    <Link
                      to="/product"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image
                        width="35px"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5c7f1b3a-47b4-3ade-f170-f003cace2482/original/Coldcuts.png"
                      />
                      <Text>&nbsp;Cold Cuts</Text>
                    </Link>{" "}
                  </MenuItem>

                  <MenuItem>
                    <Link
                      to="/product"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image
                        width="35px"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/88d8c760-ee1f-7696-7827-fcc9661925cc/original/Spread_Bottle1.png"
                      />
                      <Text>&nbsp;Spreads</Text>
                    </Link>{" "}
                  </MenuItem>

                  <MenuItem>
                    <Link
                      to="/product"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image
                        width="35px"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/04d58840-f014-e613-24d4-1908db9a7e63/original/Eggs.png"
                      />
                      <Text>&nbsp;Eggs</Text>
                    </Link>{" "}
                  </MenuItem>

                  <MenuItem>
                    <Link
                      to="/product"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image
                        width="35px"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/189690c6-c9d5-2441-938b-6c7e124972c7/original/Biryani.png"
                      />
                      <Text>&nbsp;Biryani & Kebab</Text>
                    </Link>{" "}
                  </MenuItem>

                  <MenuItem>
                    <Link
                      to="/product"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image
                        width="35px"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/9d531fa3-8969-b105-6e93-f8810d54ab4c/original/Combo_(1).png"
                      />
                      <Text>&nbsp;Combos</Text>
                    </Link>{" "}
                  </MenuItem>

                  <MenuItem>
                    <Link
                      to="/product"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image
                        width="35px"
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/fe100e84-9e15-c179-ecca-7cde26af9969/original/PBM_6_(7).png"
                      />
                      <Text>&nbsp;Plant-Based-Meat</Text>
                    </Link>{" "}
                  </MenuItem>

                
                </MenuList>
              </>
            )}
          </Menu>

       
        </Box>
        <Box>
          <Flex>
            <Image src="https://www.licious.in/img/rebranding/profile_icon.svg" />
            <Text _hover={{ color: "#D11243" }}>
              <Button onClick={onOpen}>Login</Button>
            </Text>
          </Flex>
        </Box>
        <Box className="cart-box">
          <Box>
            <Image
              width="30px"
              src="https://www.licious.in/img/rebranding/cart_icon.svg"
            />
          </Box>

          <Box>
            <Text color="gray"> Cart</Text>
            <Text fontWeight="bold">₹24457{}</Text>
          </Box>
        </Box>
      </Flex>

      <Drawer size={"md"} isOpen={isOpen} placement="right" onClose={onClose}>
=======
    <div style={{ display: "flex" }}>
      <div>
        <Button onClick={onOpen}> Signup </Button>
      </div>
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <Link to="/profile">profile</Link>
      </div>
      <div>
        <Link to="/checkout">Checkout</Link>
      </div>
      <div>
           <Link to="/product">Product</Link>
        </div>  

      {/* *********** login/signup slider start */}
      <Drawer size={"sm"} isOpen={isOpen} placement='right' onClose={onClose} >

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
    </Box>
  );
};

const Navbar = () => {
  return (
    <Box className="Navbar-Main">
      <AboveNavbar />
      <MiddleNavbar />
    </Box>
  );
};

export default Navbar;













// const Navbar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const btnRef = React.useRef()

//   return (
//      <div style={{ display: "flex" }}>
//       { <div>
//          <Link to="/signup">Signup</Link> }
//         <Button onClick={onOpen}> Open </Button>
//       </div>
//       <div>
//         <Link to="/home">Home</Link>
//       </div>
//       <div>
//         <Link to="/profile">profile</Link>
//       </div>
//       <div>
//         <Link to="/checkout">Checkout</Link>
//       </div>
//       <div>
//            <Link to="/product">Product</Link>
//         </div>

{
  /* *********** login/signup slider start */
}
{
  /* <Drawer size={"sm"} isOpen={isOpen} placement='right' onClose={onClose} backgroundImage="url('https://m.licious.in/image/rebranding/jpg/user-login-new.jpg')">
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

      </Drawer> */
}
{
  /* *********** login/signup slider end */
}
{
  /* </div> */
}
//   )
// }
{
  /* 
export default Navbar */
}

