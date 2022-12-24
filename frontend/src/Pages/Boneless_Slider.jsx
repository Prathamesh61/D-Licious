import React, { useEffect, useState } from "react";
import "../Style/Boneless_Slider.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import axios from "axios";
import { Box, Button, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCartData, postCartData } from "../Redux/ProfileRedux/action";

const Slider2 = ({ props }) => {
  const [data, setData] = useState([]);
  const toast = useToast();
  const dispatch = useDispatch();
 
  useEffect(() => {
    axios.get("https://dilicious-adm-api.onrender.com/fooditems/get").then((res) => {
      let newdata=res.data.data
      setData(newdata)
    })
    
  }, []);
  // console.log(data);

  const slideLeft1 = () => {
    var slider1 = document.getElementById("slider1");
    slider1.scrollLeft = slider1.scrollLeft - 400;
  };

  const slideRight1 = () => {
    var slider1 = document.getElementById("slider1");
    slider1.scrollLeft = slider1.scrollLeft + 400;
  };

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

  return (
    <div className="main_slider_container1">
      <MdKeyboardArrowLeft
        size={40}
        className="slider_icon_left1"
        onClick={slideLeft1}
      />
      <div id="slider1">
        {data.map((slide) => {
          return (
            <div key={slide._id} className="slider_card1">
            <Link to={`/productdetails/${slide._id}`} >  <div id="image">
                <img src={slide.imgUrl} alt="image" />
              </div></Link>
              <div id="heading" style={{overflow:"hidden"}}>
                <p>{slide.name}</p>
              </div>
              <div id="para" style={{overflow:"hidden"}}>
                <p>{slide.desc}</p>
              </div>
              <div id="wt">
                <p>{slide.net}</p>
              </div>
              <div id="blook">
                <p style={{ color: "#e1003e", fontWeight: "700" }}>
                  MRP: ₹{slide.price}
                </p>
                <Button 
                onClick={() => addToCart(slide, slide.name)}
                 style={{
        
                  fontSize: "13px",
                  fontWeight: "600",
                  height: "30px",
                  width: "100px",
                }}
                bg={"#D11243"} 
                color="white"
                _hover={{ color: "black" }}
                >
                  ADD TO CART
                  </Button>
              </div>
            </div>
          );
        })}
      </div>
      <MdKeyboardArrowRight
        size={40}
        className="slider_icon_right1"
        onClick={slideRight1}
      />
    </div>
  );
};

export default Slider2;
