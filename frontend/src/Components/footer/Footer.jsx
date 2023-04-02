import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import styled from "./footer.module.css";
import Footer1 from "./Footer1.jpg";
import Footer2 from "./Footer2.jpg";

const Footer = () => {
  return (
    <div className={styled.maxWidth}>

      <img className={styled.firstimg} src="https://www.licious.in/image/rebranding/png/logo-homepage.png" alt="footerlogo" />

      {/* useful links footer */}
      <div className={styled.fmdiv}>
        {/* first footer div column*/}
        <div>
          <li className={styled.firli}><b>USEFUL LINKS</b></li>
          <li>Why Licious?</li>
          <li>Refer & Earn</li>
          <li>Licious Cash & Cash+</li>
          <li>Careers</li>
          <li>BLOG</li>
          <li>Campaign</li>
          <li>Bug Bounty Guidelines</li>
          <li>About Us</li>
          <li>FSSC 22000 Certification</li>
          <li>FSSAI Licenses</li>
          <li>Sitemap</li>
        </div>

        {/* second footer div column*/}
        <div>
          <li className={styled.logos}><b>EXPERIENCE LICIOUS APP ON MOBILE</b></li>
          <div className={styled.apps}>
            <a href="https://apps.apple.com/in/app/buy-meat-online-licious/id1052440342" target="_blank"><img
              style={{ width: "120px", height: "40px" }}
              src="https://www.licious.in/image/rebranding/png/app-store-homepage.png" alt="" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.licious&pli=1" target="_blank">
              <img
                style={{ marginLeft: "15px", width: "120px", height: "40px" }}
                src="https://www.licious.in/image/rebranding/png/playstore-homepage.png" alt="" />
            </a>
          </div>
        </div>

        {/* Third footer div */}

        <div>
          <div>
            <li style={{ fontWeight: "600px", color: "rgb(100 100 100)" }}>
              <b>CONTACT US</b>
            </li>
            <li>Call: 1800-4190-786</li>
            <li> Talktous@licious.com</li>
          </div>

          <div style={{ marginTop: "12px" }}>
            <li style={{ fontWeight: "600px", color: "rgb(100 100 100)" }}>
              <b>REGISTERED OFFICE ADDRESS:</b>
            </li>
            <li>House of Licious, Zed Pearl, No 12,</li>
            <li>Domlur Layout</li>
            <li>Bangalore, Karnataka - 560071</li>
          </div>
        </div>
        {/* Fourth part of footer div */}

        <div>
          <div>
            <li>T&C</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </div>

          <div style={{ marginTop: "12px" }}>
            <li style={{ fontWeight: "600px", color: "rgb(100 100 100)" }}>
              <b>HAVE SECURITY CONCERN?</b>
            </li>
            <li>Mail us to:</li>
            <li>security@licious.com</li>
          </div>
        </div>

        <div>
          <img
            style={{ width: "150px" }}
            src="https://www.licious.in/image/rebranding/png/logo-homepage.png"
            alt="footercartlogo" />
        </div>
      </div>
      {/* useful links footer */}


      <hr style={{ margin: "3%" }} />
      {/* social media div */}
      <div className={styled.fmiddiv}>
        <span>KEEP IN TOUCH</span>
        <a href="https://www.instagram.com/licious_foods/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram i1"></i></a>
        <a href="https://www.facebook.com/LiciousFoods/" target="_blank" rel="noreferrer" ><i className="fa-brands fa-facebook-square i2"></i></a>
        <a href="https://twitter.com/LiciousFoods" target="_blank" rel="noreferrer" ><i className="fa-brands fa-twitter i3"></i></a>
      </div>
      {/* social media div */}

      <hr style={{ margin: "3%" }} />

      {/*   <div className={styled.endFooter}>
        <img src={Footer1} alt="" />
        <img src={Footer2} alt="" />
      </div> */}


      <br />
      {/* more no of listed div */}
      <div className={styled.citidiv}>
        <Text fontWeight='600'>CITIES WE SERVE</Text>
        <Box className={styled.cities}>
          <Text>
            Bangaluru
          </Text>

          <Text>
            NCR
          </Text>

          <Text>
            Hydrabad
          </Text>

          <Text>
            Chandigarh
          </Text>

          <Text>
            Panchkula
          </Text>

          <Text>
            MohaText
          </Text>

          <Text>
            Mumbai
          </Text>

          <Text>
            Pune
          </Text>

          <Text>
            chennai
          </Text>

          <Text>
            Coimbatore
          </Text>

          <Text>
            Jaipur
          </Text>

          <Text>Cochin</Text>


          <Text>
            Visakhapatnam
          </Text>

          <Text>
            Pondicherry
          </Text>

          <Text>
            Kolkata
          </Text>

          <Text>
            Trichy
          </Text>

          <Text>
            Lucknow
          </Text>

          <Text>
            Kanpur
          </Text>

          <Text>
            Agra
          </Text>

          <Text>
            Thrissur
          </Text>

          <Text>
            Nagpur
          </Text>

          <Text>
            Bhilai
          </Text>

          <Text>
            Nashik
          </Text>

          <Text>Palakkad</Text>
        </Box>
      </div>


      <hr style={{ margin: "3%" }} />

      <Box fontSize={["14px", "14px", "12px"]} style={{ textAlign: "justify", marginBottom: "2%" }}>
        <Text fontWeight="700">We will sell only the meat that we would eat ourselves.</Text>
        <Text color='#4a4a4a'>At Licious, we’re big meat-lovers. And by big, we mean huge. So when it comes to the meat we put on your plate, we’re extremely picky. Every single product is handpicked by a team with years of experience.</Text>
      </Box>

      <Box fontSize={["14px", "14px", "12px"]} style={{ textAlign: "justify", marginBottom: "2%" }}>
        <Text fontWeight="700">If it’s not fresh, we won’t sell it</Text>
        <Text color='#4a4a4a'>For meat to stay fresh and retain its natural juices, it needs to be stored at a temperature between 0° and 5°C. We maintain this temperature from the time we procure the product to cleaning, cutting and storing it, until it leaves for delivery. And even when it’s out for delivery, we keep it chilled right up to your doorstep.Did we mention that we’re obsessed?</Text>
      </Box>

      <Box fontSize={["14px", "14px", "12px"]} style={{ textAlign: "justify", marginBottom: "2%" }}>
        <Text fontWeight="700">We will charge only for what you buy</Text>
        <Text color='#4a4a4a'>Doesn’t everyone do this? Not really. Most other places first weigh the meat, then cut up the pieces, and throw out the parts which aren’t fit to eat, such as offal, gizzard, wingtips, etc. But you still pay based on the original weight even though what you finally get is 10% to 30% less</Text>
      </Box>

      <hr style={{ margin: "3%" }} />

      <p style={{ textAlign: "center", fontSize: "12px", color: "#333a3f" }}>


        <b> @2022 Delicious. All Rights Reserved.</b>

      </p>
      <Box style={{ textAlign: "justify", alignItems: "center", fontSize: "12px", marginBottom: "2%" }}>

        <Text fontSize={["14px", "14px", "12px"]} color='#4a4a4a'> Licious is your one-stop fresh meat delivery shop. In here, you get
          nothing but the freshest meat & seafood, delivered straight to your
          doorstep. Now you can buy meat online anytime at your convenience.
          Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish,
          Prawns, Crabs), Marinades & Cold Cuts. All our products are completely
          natural and healthy. Once you've experienced Licious, you'll


          never go back to the old way of buying meat and seafood.</Text>
      </Box>

    </div>
  );
};

export default Footer;
