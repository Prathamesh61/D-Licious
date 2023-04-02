import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../Style/Home.css";
import Slider from "./BestSeller_Slider";
import Slider2 from "./Boneless_Slider";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Show, Hide } from '@chakra-ui/react'

const Home = () => {



  const ADDTOCARTBUTTON = () => {
    const [check, setcheck] = useState(0)
    return (<>
      {(check < 1 && <Button onClick={() => setcheck(1)}
        style={{ backgroundColor: "#D11243", color: "white", fontSize: "13px", fontWeight: "600", height: "30px", width: "100px" }}>ADD TO CART</Button>)
        || (
          check >= 1 && <Box>
            <Button style={{
              backgroundColor: "white", fontSize: "30px",
              color: "#D11243"
            }} onClick={() => setcheck(check - 1)}>-</Button>
            <Button style={{
              backgroundColor: "white", fontSize: "20px",
            }}  >{check}</Button>
            <Button
              style={{
                backgroundColor: "white", fontSize: "30px",
                color: "#D11243"
              }} onClick={() => setcheck(check + 1)}>+</Button>
          </Box>
        )}</>)
  }
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

  return (
    <div className='Divvv'>
      {/* Anil kapoor slider */}
      <div className="mainDiv">
        <img
          src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e"
          alt="anil kapoor img"
        />
      </div>
      {/* Anil kapoor slider */}

      {/* Shop category */} <div className="second-mainbox">
        <div className="firstDiv">
          <Text fontWeight='400' fontSize='3xl'>Shop by categories</Text>
          <p className="para">Freshest meats just for you</p>
          <hr style={{ marginBottom: "3%", color: "red" }} />
          <div className="inner">
            <Link to="/product/636d5d0d144878242abc33ed">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
                />
                <p>
                  <a >Today's Deal</a>
                </p>
              </div>
            </Link>
            <Link to="/product/636d5ca4144878242abc33eb">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png"
                />
                <p>
                  <a >Chicken</a>
                </p>
              </div>
            </Link>
            <Link to="/product/636d5d0d144878242abc33ed">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png"
                />
                <p>
                  <a >Fish & Seafood</a>
                </p>
              </div>
            </Link>
            <Link to="/product/636d5d16144878242abc33ef">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png"
                />
                <p>
                  <a >Mutton</a>
                </p>
              </div>
            </Link>
            <Link to="/product/63bc984b7a2a152161ac0217">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png"
                />
                <p>
                  <a >Ready to Cook</a>
                </p>
              </div>
            </Link>
            <Link to="/product/636fe63ffb4172486544289c">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png"
                />
                <p>
                  <a >Prawns</a>
                </p>
              </div>
            </Link>
            <Link to="/product/63bc98867a2a152161ac0219">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png"
                />
                <p>
                  <a >Cold Cuts</a>
                </p>
              </div>
            </Link>
            <Link to="/product/63bc98a27a2a152161ac021b">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png"
                />
                <p>
                  <a >Spreads</a>
                </p>
              </div>
            </Link>
            <Link to="/product/636d5d22144878242abc33f1">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png"
                />
                <p>
                  <a >Eggs</a>
                </p>
              </div>
            </Link>
            <Link to="/product/636d5d34144878242abc33f3">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png"
                />
                <p>
                  <a >Biryani & Kebab</a>
                </p>
              </div>
            </Link>
            <Link to="/product/">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/69b72338-4180-2631-b175-04265b1e5c7a/original/Combo_(2).png"
                />
                <p>
                  <a >Combos</a>
                </p>
              </div>
            </Link>
            <Link to="/product/">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png"
                />
                <p>
                  <a >Plant-Based-Meat</a>
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/* Shop category */}

        {/* Licious offers */}
        <Show above="850px">
          <div className="luccdiv">
            <div>
              <img
                src="https://www.licious.in/img/rebranding/loyalty_licious_logo.svg"
                alt="luciousmetiapalogo"
              />
              <button>JOIN NOW</button>
            </div>
            <hr />
            <p>
              Join MEATOPIA to get free delivery on all orders with cart value more
              than Rs.99.
            </p>
          </div>

          <h2
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#e1003e",
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            Know the Licious way
          </h2>
          <br />
          <div className="premiumdiv">
            <div>
              <p>Premium</p>
              <p>Produce</p>
            </div>

            <div>
              <p>World-Class Central</p>
              <p>Production Unit</p>
            </div>

            <div>
              <p>150 Quality</p>
              <p>Checks</p>
            </div>

            <div>
              <p>Delivered Fresh</p>
              <p>Everyday</p>
            </div>

            <div>
              <p>Extraordinary</p>
              <p>Cooking</p>
            </div>
          </div>
          <br />

          <center>
            <select className="ssdiv">
              <option value="discover">Discover How</option>
            </select>
          </center>
          <br />
          <div id='pic'>
            <img
              style={{
                marginTop: "10px",
                marginBottom: "20px",
                height: "110px",
                margin: "auto",
                cursor: "pointer",
                width: "1000px",
              }}
              src="https://dao54xqhg9jfa.cloudfront.net/OMS-StaticBanner/4c895baf-28fb-2833-8d19-37d05c51d39c/original/static-bank-units-Sep-web_(11).jpg?format=webp"
              alt=""
            />

          </div>
          <br />
        </Show>
        {/* Licious offers */}

        {/* Best seller */}
        <div className="secondDiv">
          <Text className="category1">Best Sellers</Text>
          <Slider />
        </div>
        {/* Best seller */}

        {/* Boneless Cuts */}
        <div className="secondDiv2">
          <Text className="category2">Boneless Cuts</Text>
          <Slider2 />
        </div>
        {/* Boneless Cuts */}

        {/* rewards */}
        <Box width={["100%", "80%", "80%"]} className="rewarddiv">
          <img
            src="https://www.licious.in/img/rebranding/rewards/rewards_icon.svg"
            alt="revardslogo"
          />
          {/* <Show above="850px"> */}
          <div>
            <p>
              <b>My Rewards</b>
              <br />
              <p style={{ fontSize: ["10px", "10px", "13px"], marginTop: "5px" }}>
                Place an order and win your next reward!
              </p>
            </p>
          </div>
          {/* </Show> */}
        </Box>
        {/* rewards */}

        {/* Explore by category */}
        <div id="thirdDiv">
          <Text className="category3">Explore by category</Text>
          <div className="inner">
            <Link to="/product/636d5d0d144878242abc33ed">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
                />
                <p>
                  <a >Today's Deal</a>
                </p>
              </div>
            </Link>
            <Link to="/product/636d5ca4144878242abc33eb">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png"
                />
                <p>
                  <a >Chicken</a>
                </p>
              </div>
            </Link>
            <Link to="/product/636d5d0d144878242abc33ed">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png"
                />
                <p>
                  <a >Fish & Seafood</a>
                </p>
              </div>
            </Link>
            <Link to="/product/636d5d16144878242abc33ef">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png"
                />
                <p>
                  <a >Mutton</a>
                </p>
              </div>
            </Link>
            <Link to="/product/63bc984b7a2a152161ac0217">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png"
                />
                <p>
                  <a >Ready to Cook</a>
                </p>
              </div>
            </Link>
            <Link to="/product/636fe63ffb4172486544289c">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png"
                />
                <p>
                  <a >Prawns</a>
                </p>
              </div>
            </Link>
            <Link to="/product/63bc98867a2a152161ac0219">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png"
                />
                <p>
                  <a >Cold Cuts</a>
                </p>
              </div>
            </Link>
            <Link to="/product/63bc98a27a2a152161ac021b">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png"
                />
                <p>
                  <a >Spreads</a>
                </p>
              </div>
            </Link>
            <Link to="/product/636d5d22144878242abc33f1">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png"
                />
                <p>
                  <a >Eggs</a>
                </p>
              </div>
            </Link>
            <Link to="/product/636d5d34144878242abc33f3">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png"
                />
                <p>
                  <a >Biryani & Kebab</a>
                </p>
              </div>
            </Link>
            <Link to="/product/">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/69b72338-4180-2631-b175-04265b1e5c7a/original/Combo_(2).png"
                  alt=""
                />
                <p>
                  <a >Combos</a>
                </p>
              </div>
            </Link>
            <Link to="/product/">
              <div>
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png"
                />
                <p>
                  <a >Plant-Based-Meat</a>
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/* Explore by category */}

        {/* Special snacks */}
        <Hide below='1000px'>
          <div className="fourthDiv">
            <Text className="category4">Breakfast & Snacking Specials</Text>
            <div className="smallDiv">
              <div className="slider_Card">
                <div id="image1">
                  <img
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/faa6ff18-1108-6acf-4885-aa0fdb5e13ec/original/Chunky-Shawarma-Chicken-Spread_(7).jpg?format=webp"
                    alt=""
                  />
                </div>
                <div id="heading1">
                  <p>Chunky Shawarma Chicken Spread</p>
                </div>
                <div id="para1">
                  <p>A creamy base with freshly roasted chicken chunks along...</p>
                </div>
                <div id="wt1">
                  <p>Pieces: 1</p>
                </div>
                <div id="blook1">
                  <p style={{ color: "#e1003e", fontWeight: "700" }}>MRP: ₹219</p>
                  <ADDTOCARTBUTTON />
                </div>
              </div>

              <div className="slider_Card">
                <div id="image1">
                  <img
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b7cbafbe-bdf9-39cc-30c0-5a7c432309d8/original/Chunky-Herby-Tomato-Chicken-Spread_(1).jpg?format=webp"
                    alt=""
                  />
                </div>
                <div id="heading1">
                  <p>Chunky Herby Tomato Chicken Spread</p>
                </div>
                <div id="para1">
                  <p>A pleasant contrast of Meaty chicken chunks flavored...</p>
                </div>
                <div id="wt1">
                  <p>Pieces: 1</p>
                </div>
                <div id="blook1">
                  <p style={{ color: "#e1003e", fontWeight: "700" }}>MRP: ₹119</p>
                  <ADDTOCARTBUTTON />
                </div>
              </div>

              <div className="slider_Card">
                <div id="image1">
                  <img
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/0d28ad62-9409-c682-3c22-8e0ebc1697d5/original/Chunky-Continental-Chicken-Spread.jpg?format=webp"
                    alt=""
                  />
                </div>
                <div id="heading1">
                  <p>Chunky Continental Chicken Spread</p>
                </div>
                <div id="para1">
                  <p>A Nakhrebaaz chef's creation: Real chicken & mega flav...</p>
                </div>
                <div id="wt1">
                  <p>Pieces: 1</p>
                </div>
                <div id="blook1">
                  <p style={{ color: "#e1003e", fontWeight: "700" }}>MRP: ₹219</p>
                  <ADDTOCARTBUTTON />
                </div>
              </div>
            </div>
          </div>
        </Hide>
        {/* Special snacks */}

        {/* Checkout blog */}

        <div className="blogDiv">
          <div className="divv">
            <h4 className="textDiv">Check out our blog</h4>
            <b>
              <p className="para2">See all</p>
            </b>
          </div>

          <div className="checkoutdiv">
            <div className="checkoutdivinner">
              <img
                src="https://www.licious.in/blog/wp-content/uploads/2022/11/shutterstock_559553158-1.jpg"
                alt=""
              />
              <h5>All about Chicken Salami</h5>
            </div>

            <div className="checkoutdivinner">
              <img
                src="https://www.licious.in/blog/wp-content/uploads/2022/11/shutterstock_1920454280.jpg"
                alt=""
              />
              <h5>
                Sausages: Are Sausages Healthy? Health <br /> Benefits of Chicken
                Sausages for A Healthy You!
              </h5>
            </div>

            <div className="checkoutdivinner">
              <img
                src="https://www.licious.in/blog/wp-content/uploads/2022/10/blog-image-02.jpg"
                alt=""
              />
              <h5>
                Make Anda Paratha Rolls Special With Licious Chicken Lyoners!
              </h5>
            </div>
          </div>
        </div>
        {/*  Checkout blog  */}

        {/* advertisement */}
        <div className="add">
          <img
            src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34b8cba7db"
            alt=""
          />
        </div>
        {/* advertisement */}

        {/* news */}
        <div className="fifthDiv">
          <h2>In the News</h2>

          <div className="newsdiv">
            <div className="newsdivinner">
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/35/inthenews_629f29838e296"
                alt=""
              />
              <br />
              <h6 style={{ color: "#4a4a4a" }}>
                Licious announces continuous liquidity of ESOPs
              </h6>
            </div>

            <div className="newsdivinner">
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/27/inthenews_61a248a937ab5"
                alt=""
              />
              <br />

              <h6 style={{ color: "#4a4a4a" }}>
                Why Licious wants to become the everything store
              </h6>
            </div>

            <div className="newsdivinner">
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/35/inthenews_61a250d471d48"
                alt=""
              />
              <br />
              <h6 style={{ color: "#4a4a4a" }}>
                India’s Licious becomes unicorn with $52 million
              </h6>
            </div>

            <div className="newsdivinner">
              <img
                src=" https://d2407na1z3fc0t.cloudfront.net/inTheNews/35/inthenews_629f2b2c49d88"
                alt=""
              />
              <br />

              <h6 style={{ color: "#4a4a4a" }}>
                They slayed COVID, went on to build a unicorn: Meet
              </h6>
            </div>

            <div className="newsdivinner">
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/inTheNews/30/inthenews_61a24b7143569"
                alt=""
              />
              <br />

              <h6 style={{ color: "#4a4a4a" }}>
                Lucious Founder on building unicorn startup
              </h6>
            </div>
          </div>
        </div></div>
      {/* news */}
    </div>
  );
};

export default Home;
