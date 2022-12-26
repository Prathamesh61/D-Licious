import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  MenuDivider,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import Signup from "../Pages/Signup";
import "./NavbarMobTab.css";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Input,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import LICIOUS from "./D'LICIOUS.jpeg";
import axios from "axios";
import { MdOutlineAccountCircle } from 'react-icons/md'
import { IconButton } from '@chakra-ui/react'
import Cart from "../Pages/Cart";




const NavbarMobTab = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Api_start = `https://api.openweathermap.org/data/2.5/weather?`;
  const Api_key = `566cee1b29349fab7cfc8dfe8ff9e2fc`;
  const navigate = useNavigate()

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
    // console.log(finalApi_EndPoint);

    axios.get(finalApi_EndPoint).then((res) => {
      // console.log(res.data.name);
      setCity(res.data.name);
    });
  }, [Latitude, Longitude]);


  let handleLogout = () => {
    localStorage.removeItem("token");
    return navigate("/")
  };


  return (
    <Box className="MiddleNavbar-main2">
      <Box>
        <Link to="/"> <Image width="90px" src={LICIOUS} /> </Link>
      </Box>
      <HStack justifyContent={"center"} alignItems={"center"}>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen}>
                {
                  <Flex>
                    <Image width={"30%"} src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" />
                    <Text fontSize={["13px", "15px", "18px"]} padding="5px" _hover={{ color: "#D11243" }}>Menu</Text>
                  </Flex>
                }
              </MenuButton>
              <MenuList style={{ padding: "5%" }}>
                <MenuItem>
                  <Link to="/product" style={{ display: "flex", alignItems: "center" }}>
                    <Image width="35px" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d52759ea-ba5a-0f5b-3dc1-d28875335a3f/original/Todays_Deal_1.png" />
                    <Text>&nbsp;Today's Deals</Text>
                  </Link>{" "}
                </MenuItem>

                <MenuItem>
                  <Link to="/product" style={{ display: "flex", alignItems: "center" }} >
                    <Image width="35px" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png" />
                    <Text>&nbsp;Chicken</Text>
                  </Link>{" "}
                </MenuItem>

                <MenuItem>
                  <Link to="/product" style={{ display: "flex", alignItems: "center" }}>
                    <Image width="35px" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/eb162d28-5f88-a381-1d45-7f2f66d2c776/original/FIsh.png" />
                    <Text>&nbsp;Fish & Seafood</Text>
                  </Link>{" "}
                </MenuItem>

                <MenuItem>
                  <Link to="/product" style={{ display: "flex", alignItems: "center" }}>
                    <Image width="35px" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7113e792-7025-9e6f-6057-7174edf30856/original/Mu.png" />
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


      </HStack>
      <Box>
        <Flex >
          <Image src="https://www.licious.in/img/rebranding/profile_icon.svg" />
          <Text _hover={{ color: "#D11243" }}> {
            localStorage.getItem("token") == undefined ? <Button padding="5px" variant="link" fontSize={["13px", "15px", "18px"]}
              onClick={onOpen}>Login</Button>
              : <Menu>
                <MenuButton
                  fontSize={["13px", "15px", "18px"]}
                  aria-label="Options"
                  icon={<MdOutlineAccountCircle size={"50px"} />}
                  variant=""
                >Profile</MenuButton>
                <MenuList>
                  <Link to="/profile">
                    <MenuItem icon={""} >
                      Profile
                    </MenuItem>
                  </Link>

                  <MenuItem icon={""} >
                    App Support
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={handleLogout} icon={""}>
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
          }</Text>
        </Flex>
      </Box>
      <Box className="cart-box">
        <Cart />
      </Box>


      {/* signup Drawer start */}
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
    </Box >

  );
};



export { NavbarMobTab }