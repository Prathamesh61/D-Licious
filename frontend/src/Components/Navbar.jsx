import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Fade,
  HStack,
  Img,
  MenuDivider,
  Show,
  Skeleton,
  SlideFade,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Signup from "../Pages/Signup";
import "./Navbar.css";
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
import { NavbarMobTab } from "./NavbarMobTab";
import { CloseIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/ProductsRedux/action";

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
  const { isOpen, onOpen, onToggle1, onClose } = useDisclosure();
  const Api_start = `https://api.openweathermap.org/data/2.5/weather?`;
  const Api_key = `566cee1b29349fab7cfc8dfe8ff9e2fc`;
  const navigate = useNavigate()
  const btnRef = React.useRef()

  const [Latitude, setLatitude] = useState("");
  const [Longitude, setLongitude] = useState("");
  const [city, setCity] = useState("");

  const products = useSelector((state) => state.ProductReducer.allProducts.data) || [];
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [SuggestionList, setSuggestionList] = useState([])
  const dispatch = useDispatch();


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position)
      // console.log("position",position.coords.latitude,position.coords.longitude)
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    },);
    let finalApi_EndPoint = `${Api_start}lat=${Latitude}&lon=${Longitude}&appid=${Api_key}`;
    // console.log(finalApi_EndPoint);

    axios.get(finalApi_EndPoint).then((res) => {
      // console.log(res.data.name);
      setCity(res.data.name);
    });
  }, [Latitude, Longitude]);

  useEffect(() => {
    dispatch(getAllProducts());
    if (query === "") {
      setSuggestionList([])
    } else {
      let newSuggestionList = products.filter((item) => {
        let queryItem = query.trim().toLowerCase();
        return item?.name?.toLowerCase().indexOf(queryItem) !== -1 ? true : false
      })
        .map((item) => item);
      setSuggestionList(newSuggestionList);
    }
  }, [query])

  const prodCatArr = [
    {
      id: "636d5d0d144878242abc33ed",
      imgSrc: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d52759ea-ba5a-0f5b-3dc1-d28875335a3f/original/Todays_Deal_1.png",
      name: "Today's Deals"
    },
    {
      id: "636d5ca4144878242abc33eb",
      imgSrc: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png",
      name: "Chicken"
    },
    {
      id: "636d5d0d144878242abc33ed",
      imgSrc: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/eb162d28-5f88-a381-1d45-7f2f66d2c776/original/FIsh.png",
      name: "Fish And SeaFood"
    },
    {
      id: "636d5d16144878242abc33ef",
      imgSrc: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7113e792-7025-9e6f-6057-7174edf30856/original/Mu.png",
      name: "Mutton"
    },
    {
      id: "63bc984b7a2a152161ac0217",
      imgSrc: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/43faaebc-f2ae-102a-ea01-af3e6c37a890/original/RTC.png",
      name: "Ready To Cook"
    },
    {
      id: "636fe63ffb4172486544289c",
      imgSrc: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/404e48e5-c887-1e12-7a3a-232e01fc9771/original/Prawn.png",
      name: "Prawns"
    },
    {
      id: "63bc98867a2a152161ac0219",
      imgSrc: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5c7f1b3a-47b4-3ade-f170-f003cace2482/original/Coldcuts.png",
      name: "Cold Cuts"
    },
    {
      id: "63bc98a27a2a152161ac021b",
      imgSrc: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/88d8c760-ee1f-7696-7827-fcc9661925cc/original/Spread_Bottle1.png",
      name: "Spreads"
    },
    {
      id: "636d5d22144878242abc33f1",
      imgSrc: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/04d58840-f014-e613-24d4-1908db9a7e63/original/Eggs.png",
      name: "Eggs"
    },
    {
      id: "636d5d34144878242abc33f3",
      imgSrc: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/189690c6-c9d5-2441-938b-6c7e124972c7/original/Biryani.png",
      name: "Biryani & Kebab"
    }
  ]
  let handleLogout = () => {
    localStorage.removeItem("token");
    return navigate("/")
  };

  return (
    <Box className="MiddleNavbar-main">
      <Flex style={{ gap: "20px", alignItems: "center", justifyContent: "space-between" }}>
        <Box>
          <Link to="/"> <Image width="120px" src={LICIOUS} /> </Link>
        </Box>
        <Box>
          <Flex>
            <Image src="https://www.licious.in/image/rebranding/svg/location-pin.svg" />
            <Text>{city ? city : <Button>Choose City</Button>}</Text>
          </Flex>
        </Box>
      </Flex>

      <Box width="30%" position={'relative'}>
        <Input value={query} onChange={(e) => setQuery(e.target.value)} borderColor="gray" variant="filled" size={["sm", "md", "lg"]} placeholder="Search for any delicious product" />
        {SuggestionList.length > 0 ?
          <VStack borderColor="gray" border={"3px"} className="style-3" backgroundColor={"white"} borderBottomRadius='5px' padding={'10px'} width={"100%"} position={'absolute'} top={12} height={"fit-content"} maxHeight={'350px'} overflow={'auto'} >
            {SuggestionList.map((elem) => {
              return <Link to={`/productdetails/${elem._id}`} onClick={() => {
                setSuggestionList([])
                setQuery("")
              }}>
                <HStack textAlign={'left'} key={elem._id} >
                  <Img src={elem.imgUrl} alt={elem.name} width={"20%"} />
                  <Text fontSize={'14px'}>{elem.name}</Text>
                </HStack>
              </Link>
            })
            }
          </VStack>
          // :
          // SuggestionList.length > 0 ?
          //   <VStack padding={'20px'}>
          //     <Img width={"50%"} src="https://www.licious.in/img/rebranding/no_prod_found_illustration.svg" alt="not found" />
          //     <p>Oops, we couldn’t find any search results
          //       Try refining your search or explore from the below suggestions</p>
          //   </VStack>
          :
          ""
        }
      </Box>

      <Flex style={{
        alignItems: "center", justifyContent: "space-between",
        gap: "12%", width: "30%"
      }}>
        <Box>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen}>
                  {
                    <Flex>
                      <Image src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" />
                      <Text padding="5px" _hover={{ color: "#D11243" }}>Categories</Text>
                    </Flex>
                  }
                </MenuButton>
                <MenuList style={{ padding: "5%" }}>
                  {prodCatArr?.map((el) => {
                    return <MenuItem>
                      <Link to={`/product/${el.id}`} style={{ display: "flex", alignItems: "center" }}>
                        <Image width="35px" src={el.imgSrc} />
                        <Text>&nbsp;{el.name}</Text>
                      </Link>{" "}
                    </MenuItem>
                  })}
                </MenuList>
              </>
            )}
          </Menu>


        </Box>
        <Box>
          <Flex>
            <Image src="https://www.licious.in/img/rebranding/profile_icon.svg" />
            <Text _hover={{ color: "#D11243" }}> {
              localStorage.getItem("token") == undefined ? <Button padding="5px" variant="link" onClick={onOpen}>Login</Button>
                : <Menu>
                  <MenuButton
                    aria-label="Options"
                    icon={<MdOutlineAccountCircle size={"50px"} />}
                    variant=""
                  >Profile</MenuButton>
                  <MenuList>
                    <Link to="/profile">
                      <MenuItem icon={""}>
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
      </Flex>

      {/* signup Drawer start */}
      <Drawer size={"sm"} finalFocusRef={btnRef}
        isOpen={isOpen} placement='right' onClose={onClose} >
        <Box>
          <DrawerOverlay />
          <DrawerContent >
            <DrawerCloseButton size='lg' />
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


const Navbar = () => {
  return (
    <Box className="Navbar-Main">
      <Show above='850px'>
        <AboveNavbar />
        <MiddleNavbar />
      </Show>

      <Show below="850px">
        <NavbarMobTab />
      </Show>

    </Box>
  );
};

export default Navbar;













