import React from 'react';
import "../Style/ProductCard.css";
import "../Style/Home.css";
import { Button, useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { getCartData, postCartData } from '../Redux/ProfileRedux/action';
import { Link } from "react-router-dom";

const ProductCard = ({item}) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const addToCart = (item,name) => {
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
  };
  
  return (
    <>
    <div className='product_card_wrapper'>
      <Link to={`/productdetails/${item._id}`} >
        <div className='img_wrapper'>
          <img src={item.imgUrl} />
        </div>
      </Link>
        <div className='name_wrapper'>
           <h2>{item.name}</h2>
        </div>
        <div className='desc_wrapper'>
            <p>{item.short_desc}</p>
        </div>
        <div className='weight_wrapper'>
            <h3>{item.net}</h3>
        </div>
        <div className='mrp_cart_wrapper'>
            <div className='mrp'>
               <h2>MRP: ₹{item.price}</h2>
            </div>
            <div>
              <button onClick={() => addToCart(item,item.name)} className='cart_btn'>ADD TO CART</button>
            </div>

        </div>
      
      </div>
    </>
  )
}

export default ProductCard