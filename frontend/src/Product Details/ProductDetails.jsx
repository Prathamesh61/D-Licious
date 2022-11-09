import React from "react";
import "./ProductDetails.css";
import { Box, Image, Heading, Text, Divider } from "@chakra-ui/react";

import { Slide } from "react-slideshow-image";

// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";
const images = [
  "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a9115623-36e0-7a11-4c65-0f7a097c2d27/original/WhatsApp_Image_2022-06-10_at_12.37.50_PM_(1).jpeg?format=webp",
  "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/d49aac35-6784-73e1-93ff-ac738c240f15/original/Chicken-Breast-Boneless-(3-4-Pieces)-Hero-Shot_(1).jpg?format=webp",
];

const zoomOutProperties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide className=".slide-img" {...zoomOutProperties}>
        {images.map((each, index) => (
          <Image
            key={index}
            style={{
              width: "100%",
              borderTopLeftRadius: "5%",
              borderTopRightRadius: "5%",
            }}
            src={each}
          />
        ))}
      </Slide>
    </div>
  );
};

const ProductDetails = () => {
  return (
    <Box className="productDetails-main">
      <Box className="img-desc">
        <Box className="slide-img">
          <Slideshow />
        </Box>
        <Box className="desc-main">
          <Box>
            <Text fontSize="3xl" fontWeight="500" style={{ textAlign: "left" }}>
              {" "}
              Chicken Breast - Boneless
            </Text>
          </Box>

          <Box
            style={{
              display: "flex",
              gap: "5%",
              fontSize: "20px",
              paddingTop: "3%",
            }}
          >
            <Box>Boneless</Box>
            <Box>|</Box>
            <Box>Fillet</Box>
          </Box>

          <Divider borderColor="silver" />

          <Box style={{ textAlign: "justify", color: "#5A5A5A" }}>
            <Text fontSize="lg" style={{ paddingTop: "3%" }}>
              Easy-to-cook, versatile and cut from the most tender parts of a
              chicken, we've got special nakhras for everyone's favourite —
              Chicken Breast Boneless.
            </Text>
            <Text fontSize="lg" style={{ paddingTop: "3%" }}>
              Cut from the breast bone, including chicken tenders, this cut is
              skinless and ideal if you enjoy cuts of lean meat. Chicken breasts
              cook rather quickly (because they don't contain much fat) and can
              be cooked in a variety of ways: grilled, baked, fried, pan-fried
              and more!
            </Text>

            <Text fontSize="lg" style={{ paddingTop: "3%" }}>
              Some popular chicken breast recipes include Chicken Tikka, Butter
              Chicken, Baked Chicken Breast, Lemon Chicken etc. Try the one that
              you are in the mood for today's meal.
            </Text>

            <Text fontSize="lg" style={{ paddingTop: "3%" }}>
              Licious chickens are raised on biosecure farms and are
              antibiotic-residue free. They are cut & cleaned by experts and
              temperature-controlled between 0-4?, to ensure that it is chilled,
              never frozen.
            </Text>

            <Text fontSize="lg" style={{ paddingTop: "3%" }}>
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
              <Text style={{paddingLeft:"4%"}}>No. of Pieces 3-4</Text>
            </Box>
            <Box style={{
                display: "flex",
                paddingLeft: "2%",
                textAlign: "center"}}>
              <Image
                width="30px"
                src="https://d2407na1z3fc0t.cloudfront.net/Banner/Serves.png"
              />
              <Text style={{paddingLeft:"4%"}}>Serves 4</Text>
            </Box>
            <Box style={{
                display: "flex",
                paddingLeft: "2%",
                textAlign: "center"}}>
              <Image
                width="30px"
                src="https://d2407na1z3fc0t.cloudfront.net/Banner/Netwt.png"/>
              <Text style={{paddingLeft:"4%"}}>450gms</Text>
            </Box>
          </Box>

  

  <Box className="price-addtwocard-main">

<Box></Box>
<Box></Box>

  </Box>





        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
