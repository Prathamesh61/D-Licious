import React from 'react';
import "../Style/ProductCard.css";
import "../Style/Home.css";
import { Button } from '@chakra-ui/react'

const ProductCard = ({item}) => {
  
  return (
    <>
    <div className='product_card_wrapper'>
      {/* <div className='single_product'> */}
        <div className='img_wrapper'>
          <img src={item.imgUrl} />
        </div>
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
              <button className='cart_btn'>ADD TO CART</button>
            </div>

        </div>
      </div>
     {/* </div> */}
    </>
  )
}

export default ProductCard