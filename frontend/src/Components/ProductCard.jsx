import React from 'react';
import "../Style/ProductCard.css";
import "../Style/Home.css";
import { Button, Flex, Image, Text, useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { getCartData, postCartData } from '../Redux/ProfileRedux/action';
import { Link } from "react-router-dom";
import { MdDeliveryDining } from 'react-icons/md';

const ProductCard = ({ item }) => {
  const toast = useToast();
  const dispatch = useDispatch();
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
    } else {
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
    <>
      <div key={item._id} className="slider_card">
        <Link to={`/productdetails/${item._id}`} >  <div id="image">
          <img src={item.imgUrl} alt="image" />
        </div></Link>
        <div id="heading" style={{ overflow: "hidden" }}>
          <p>{item.name}</p>
        </div>
        <div id="para" style={{ overflowX: "hidden" }}>
          <p>{item.desc}</p>
        </div>
        <div id="wt">
          <p>{item.net}</p>
        </div>
        <div id="blook">
          <p style={{ color: "#e1003e", fontWeight: "700" }}>
            MRP: ₹{item.price}
          </p>
          <p style={{ color: "gray", textAlign: "left" }}>
            MRP: <s>₹{item.price + Math.floor(item.price * 0.13)}</s>
          </p>
          <Button onClick={() => addToCart(item, item.name)}
            style={{
              backgroundColor: "#D11243",
              color: "white",
              fontSize: "13px",
              fontWeight: "600",
              height: "30px",
              width: "100px",
            }}

          >
            ADD TO CART
          </Button>
        </div>
        <Flex style={{ textAlign: "center", alignItems: "center", marginTop: "1%" }}>
          <div style={{ display: "flex", margin: "auto", }}>
            {/* <Image
                       width="20px" src="https://www.licious.in/img/rebranding/express_delivery.svg" /> */}
            <MdDeliveryDining />
            <Text fontSize="sm" color='gray'>&nbsp;&nbsp;Today in 12PM-2PM&nbsp;</Text>

          </div>
        </Flex>
      </div>
    </>
  )
}

export default ProductCard