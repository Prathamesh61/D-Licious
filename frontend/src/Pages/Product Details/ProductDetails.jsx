import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { Box, Image, Text, Divider, Button, Flex, Spacer, useToast } from "@chakra-ui/react";
import liciousImg from './Images/licious.PNG'
import yes from './Images/yes.png'
import { Slide } from "react-slideshow-image";
import YoutubeVideoPlayer from "./YoutubePlayes";
import no from './Images/no.png';
import './slider.css';
import imgGirl from './Images/yes.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartData, postCartData } from "../../Redux/ProfileRedux/action";
import axios from "axios";
import CarousalProductDetails from "./CarousalProductDetails";


const zoomOutProperties = {
  duration: 1500,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const Slideshow = ({ img1, img2 }) => {
  // const images = [
  //   "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a9115623-36e0-7a11-4c65-0f7a097c2d27/original/WhatsApp_Image_2022-06-10_at_12.37.50_PM_(1).jpeg?format=webp",
  //   "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/d49aac35-6784-73e1-93ff-ac738c240f15/original/Chicken-Breast-Boneless-(3-4-Pieces)-Hero-Shot_(1).jpg?format=webp",
  // ];
  const images = [img1, img2];
  return (
    <div className="slide-container">
      <Slide className=".slide-img" {...zoomOutProperties}>
        {images.map((each, index) => (
          <Image
            key={index}
            style={{
              width: "100%",
              borderTopLeftRadius: "4%",
              borderTopRightRadius: "4%",
            }}
            src={each}
          />
        ))}
      </Slide>
    </div>
  );
};


// Carosul  ***************
const ProductDetails = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [datamap, setdatamap] = useState([]);
  const { id } = useParams();
  const products = useSelector((state) => state.ProductReducer.products.data);
  const dispatch = useDispatch();
  const toast = useToast();
  // console.log(products, "products")
  const getdata1 = async () => {
    axios.get("https://dilicious-adm-api.onrender.com/fooditems/get").then((res) => {
      let newdata=res.data.data
      setdatamap(newdata)
    })
  };
  // ****************
  //******** */ add to cart function from button addToCart
  const addToCart = (item, name) => {
    if (localStorage.getItem("token") == undefined) {
      toast({
        position: 'top',
        title: `Not Logged in.`,
        description: `Login first to add item into cart`,
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })
    }else{
      dispatch(postCartData(item))
      dispatch(getCartData());
      toast({
        position: 'top',
        title: `${name} added Successfully.`,
        description: `Check your cart`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
  };
//********end add to cart function from button addToCart


  useEffect(() => {
    if (id) {
      // const products = data.ProductReducer.products;
      const productById = products?.filter(
        (product) => product._id == id
      );
      productById && setCurrentProduct(productById[0]);
    }
    getdata1();
  }, [id]);
  // console.log(currentProduct, "detail")









  return (
    <Box className="productDetails-main">

      <Box className="sizeChange">

        <Box className="img-desc">
          <Box className="slide-img">
            <Slideshow img1={currentProduct.imgUrl} img2={currentProduct.imgUrl2} />
          </Box>
          <Box className="desc-main">
            <Box>
              <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="500" style={{ textAlign: "left" }}>
                {" "}
                {currentProduct.name}
              </Text>
            </Box>

            <Box fontSize={["15px", "18px", "20px"]}
              style={{
                display: "flex",
                gap: "5%",

                paddingTop: "3%",
              }}
            >
              {/* <Box>Boneless</Box>
            <Box>|</Box>
            <Box>Fillet</Box> */}
              <Box fontSize={['13px', '16px', "19px"]}>
                {currentProduct.tags}
              </Box>
            </Box>

            <Divider borderColor="silver" />

            <Box fontSize={['15px', '15px', "15px"]}
              style={{ textAlign: "justify", color: "#5A5A5A" }}>
              <Text style={{ paddingTop: "3%" }}>
                {currentProduct.desc}
              </Text>
              <Text style={{ paddingTop: "3%" }}>
                Cut from the breast bone, including chicken tenders, this cut is
                skinless and ideal if you enjoy cuts of lean meat. Chicken breasts
                cook rather quickly (because they don't contain much fat) and can
                be cooked in a variety of ways: grilled, baked, fried, pan-fried
                and more!
              </Text>

              <Text style={{ paddingTop: "3%" }}>
                Some popular chicken breast recipes include Chicken Tikka, Butter
                Chicken, Baked Chicken Breast, Lemon Chicken etc. Try the one that
                you are in the mood for today's meal.
              </Text>

              <Text style={{ paddingTop: "3%" }}>
                Licious chickens are raised on biosecure farms and are
                antibiotic-residue free. They are cut & cleaned by experts and
                temperature-controlled between 0-4?, to ensure that it is chilled,
                never frozen.
              </Text>

              <Text style={{ paddingTop: "3%" }}>
                Order Licious Chicken Breast Boneless online and get it home
                delivered.
              </Text>
            </Box>

            <Box className="quantity">
              <Box
                style={{
                  display: "flex",
                  paddingLeft: "2%",
                  textAlign: "center",
                }}
              >

                <Image
                  width="30px"
                  src="https://d2407na1z3fc0t.cloudfront.net/Banner/Pieces.png"
                />
                <Text style={{ paddingLeft: "4%" }}>No. of Pieces {currentProduct.qty}</Text>
              </Box>
              <Box style={{
                display: "flex",
                paddingLeft: "2%",
                textAlign: "center"
              }}>
                <Image
                  width="30px"
                  src="https://d2407na1z3fc0t.cloudfront.net/Banner/Serves.png"
                />
                <Text style={{ paddingLeft: "4%" }}>Serves {Math.floor(Math.random() * 8 + 1)}</Text>
              </Box>

              <Box style={{
                display: "flex",
                paddingLeft: "2%",
                textAlign: "center"
              }}>

                <Image
                  width="30px"
                  src="https://d2407na1z3fc0t.cloudfront.net/Banner/Netwt.png" />
                <Text style={{ paddingLeft: "4%" }}>{currentProduct.net}</Text>
              </Box>
            </Box>


<br />
            <Box className="price-addtwocard-main">

              <Flex style={{ alignItems: "center" }}>

                <Text color='#D11243' fontSize={['15px', '15px', "20px"]} fontWeight='500'>MRP:</Text>
                <Text color='#D11243' fontSize={['20px', '20px', "30px"]} fontWeight='500'>₹ {currentProduct.price}</Text>
              </Flex>

              <Box style={{ marginLeft: "30%" }}>

                <Button bg={"#D11243"} color="white" _hover={{ color: "black" }} 
                paddingX={"8px"} onClick={() => addToCart(currentProduct, currentProduct.name)}>
                  ADD TO CART
                </Button>
                {/* <ADDTOCARTBUTTON/> */}
              </Box>
            </Box>
            <br />
            <Divider borderColor="silver" />


            <Flex style={{ justifyContent: "space-between", textAlign: "center", alignItems: "center" }}>
              <Box><YoutubeVideoPlayer /></Box>

              <Flex style={{ textAlign: "center", alignItems: "center" }}>
                <Image width="30px" src="https://www.licious.in/img/rebranding/express_delivery.svg" />
                <Text fontSize="xl" color='gray'>Today in &nbsp;</Text>
                <Text fontSize="xl" style={{ color: "gray", fontWeight: "600" }}> 90 min</Text>

              </Flex>
            </Flex>

          </Box>
        </Box>


        <Box className="sourcing-whtUget">
          <Box>

            <Image style={{ marginTop: "2%" }} width={['600px', '800px', '1300px']}
              height={['400px', '500px', '500px']} src={liciousImg} />
          </Box>

          <Box className="sourcing-box">
            <Box className="head-box">
              <Box><Text fontSize={['2xl', '2xl', '3xl']} fontWeight='600' _hover={{ color: "#D11243" }}>What You Get</Text></Box>
              <Box><Text fontSize={['2xl', '2xl', '3xl']} fontWeight='600' _hover={{ color: "#D11243" }}>Sourcing</Text></Box>
            </Box>

            <Divider borderColor="silver" />

            <Box >
              <Text className="spaceing" style={{ textAlign: "left" }} fontSize={['xl', '2xl', '2xl']} fontWeight='500' >What's in your Box</Text>
              <Box className="make-it-scroll" style={{ fontSize: "18px", color: "#5A5A5A" }}>
                <Flex className="spaceing"><Image height={['20px', '25px', "25px"]} width={['20px', '25px', "25px"]} src={yes} />
                  <Text className="left-space" space >Chicken humanely raised in restricted bio-security zones</Text></Flex>
                <Flex className="spaceing"><Image height={['20px', '25px', "25px"]} width={['20px', '25px', "25px"]} src={yes} />
                  <Text className="left-space"> Hand selected after age and weight calibration</Text></Flex>
                <Flex className="spaceing"><Image height={['20px', '25px', "25px"]} width={['20px', '25px', "25px"]} src={yes} />
                  <Text className="left-space"> 100% vegetarian fed</Text></Flex>
                <Flex className="spaceing"><Image height={['20px', '25px', "25px"]} width={['20px', '25px', "25px"]} src={yes} />
                  <Text className="left-space">100% free of antibiotic residue and hormones</Text></Flex>
                <Flex className="spaceing"><Image height={['20px', '25px', "25px"]} width={['20px', '25px', "25px"]} src={yes} />
                  <Text className="left-space"> Hygienically vacuum-packed</Text></Flex>
                <Flex className="spaceing"><Image height={['20px', '25px', "25px"]} width={['20px', '25px', "25px"]} src={yes} />
                  <Text className="left-space">Artisanal cut</Text></Flex>
                <Flex className="spaceing"><Image height={['20px', '25px', "25px"]} width={['20px', '25px', "25px"]} src={yes} />
                  <Text className="left-space">Temperature controlled Between 4°C - 8°C</Text></Flex>
                <Flex className="spaceing"><Image height={['20px', '25px', "25px"]} width={['20px', '25px', "25px"]} src={yes} />
                  <Text className="left-space">150+ quality and foodsafety Checks</Text></Flex>
                <Flex className="spaceing"><Image height={['20px', '25px', "25px"]} width={['20px', '25px', "25px"]} src={no} />
                  <Text className="left-space">Mix of Offal Organs</Text></Flex>

              </Box>

            </Box>
          </Box>

        </Box>






{/* 
the deliciousBox way box start */}
        <Box className="DLicious-way">


          <Box style={{ width: "50%", margin: "auto" }}>

            <Flex className="theDeliciousWay">
              <Text color='gray.600'>The&nbsp;</Text>
              <Text fontWeight='600' style={{ color: "#D11243" }}>Delicious&nbsp;</Text>
              <Text color='gray.600'>way</Text>
            </Flex>
          </Box>




          <Box className="deliciousBox">


            <Box>
              <Image src="https://www.licious.in/img/rebranding/landing/USP1.png" />
              <Text fontSize='sm' className="spaceing">Premium produce, sourced directly from the origin</Text>
            </Box>

            <Box>
              <Image src="https://www.licious.in/img/rebranding/landing/USP2.png" />
              <Text fontSize='sm' className="spaceing">Scientifically designed central production Unit</Text>
            </Box>

            <Box>
              <Image src="https://www.licious.in/img/rebranding/landing/USP3.png" />
              <Text fontSize='sm' className="spaceing">Compliance to stringent quality checks</Text>
            </Box>

            <Box>
              <Image src="https://www.licious.in/img/rebranding/landing/USP4.png" />
              <Text fontSize='sm' className="spaceing">Delivered fresh everyday</Text>
            </Box>
            <Box>
              <Image src="https://www.licious.in/img/rebranding/landing/USP5.png" />
              <Text fontSize='sm' className="spaceing">Experience extraordinary cooking</Text>
            </Box>







          </Box>






        </Box>

{/* 
the deliciousBox way box end */}




        <Box>


           {/*carausal slider start */}
          <Box>
            <div className="App">
              <Text fontSize='3xl' style={{ textAlign: "left" }}>You may also like</Text>
             
              <CarousalProductDetails/>

            </div>


          </Box>
  {/* slider end */}



        </Box>






      </Box>

    </Box>
  );
};

export default ProductDetails;
