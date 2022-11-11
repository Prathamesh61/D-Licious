import { Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import "../Style/Home.css";
import Slider from './BestSeller_Slider';

const Home = () => {
  const [datamap, setdatamap] = useState([]);
  const getdata1 = async () => {
    try {
      let res = await fetch("https://liciousdata.herokuapp.com/Bestseller");
      let data = await res.json();
      setdatamap(data);
      // console.log("Data",data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getdata1();
   }, []);

  return (
    <div>
      {/* Anil kapoor slider */}
      <div className='mainDiv'>
        <img src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e" alt="" />
      </div>
      {/* Anil kapoor slider */}

      
    {/* Shop category */}
      <div className='firstDiv'>
        <Text className ='category'>Shop by categories</Text>
        <p className='para'>Freshest meats just for you</p>
        <div className='inner'>
          <div>
            <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png" alt="" />
            <p><a href="#">Today's Deal</a></p>
          </div>
          <div>
            <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png" alt="" />
            <p><a href="#">Chicken</a></p></div>
          <div>
            <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png" alt="" />
            <p><a href="#">Fish & Seafood</a></p></div>
          <div>
            <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png" alt="" />
            <p><a href="#">Mutton</a></p></div>
          <div>
            <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png" alt="" />
            <p><a href="#">Ready to Cook</a></p></div>
          <div>
            <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png" alt="" />
            <p><a href="#">Prawns</a></p></div>
          <div>
            <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png" alt="" />
            <p><a href="#">Cold Cuts</a></p></div>
          <div>
            <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png" alt="" />
            <p><a href="#">Spreads</a></p></div>
          <div>
            <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png" alt="" />
            <p><a href="#">Eggs</a></p></div>
          <div>
            <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png" alt="" />
            <p><a href="#">Biryani & Kebab</a></p></div>
          <div>
            <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/69b72338-4180-2631-b175-04265b1e5c7a/original/Combo_(2).png" alt="" />
            <p><a href="#">Combos</a></p></div>
          <div>
            <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png" alt="" />
            <p><a href="#">Plant-Based-Meat</a></p></div>
        </div>
      </div>
      {/* Shop category */}

      {/* Licious offers */}
      <div className="luccdiv">
        <div>
          <img
            src="https://www.licious.in/img/rebranding/loyalty_licious_logo.svg"
            alt="luciousmetiapalogo"/>
          <button>JOIN NOW</button>
        </div>
        <hr />
        <p>
        Join MEATOPIA to get free delivery on all orders with cart value more than Rs.99.
        </p>
      </div>

      <h2
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "#e1003e",
          fontSize: "20px",
          fontWeight: "700",
        }}>Know the Licious way</h2>

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

      <center>
        <select className="ssdiv">
          <option value="discover">Discover How</option>
        </select>
      </center>

      <div>
        <img
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            height: "110px",
            marginLeft: "260px",
            cursor: "pointer",
            width: "1000px",
          }}
          src="https://dao54xqhg9jfa.cloudfront.net/OMS-StaticBanner/4c895baf-28fb-2833-8d19-37d05c51d39c/original/static-bank-units-Sep-web_(11).jpg?format=webp"
          alt=""
        />
      </div>
      {/* Licious offers */}


      {/* Best seller */}
          <div className='secondDiv'>
            <Text className='category1'>Best Sellers</Text>
            <Slider/>
          </div>
      {/* Best seller */}


      {/* Boneless Cuts */}
      {/* <div className='secondDiv'>
            <Text className='category1'>Boneless Cuts</Text>
            <Slider/>
          </div> */}
      {/* Boneless Cuts */}

    </div>
  );
};

export default Home;

