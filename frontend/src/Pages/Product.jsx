import React from 'react';
import ProductCard from '../Components/ProductCard';
import '../Style/Product.css';
import {ChevronDownIcon} from "@chakra-ui/icons"

const Product = () => {
  return (
    <div className='page_body'>
        <div className='static_nav_section'>
              <div className='child-1'>
                <h1>Chicken</h1>
              </div>
              <div className='child-2'>
                <img src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78b9c4b2e0" alt="image"/>
                <h3>Farm-raised superior breed</h3>
              </div>
              <div className='child-3'>
                <img src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78bdf673b7" alt="image" />
                <h3>No Added Chemical , Antibiotic residue free.</h3>
              </div>
        </div>

        {/* Filter section start */}
        <div className='filter_wrapper'>
          <div className='filter_wrapper_box'>
             <div>Express Delivery</div>
            <div>Express Delivery <ChevronDownIcon /> </div>
            <div>Best Suited For <ChevronDownIcon /> </div>
            <div>Pack Size <ChevronDownIcon /> </div>
          </div>
        </div>

        {/* body wrapper */}
        <div className='body_wrapper'>
            <ProductCard />
        </div>

    </div>
  )
}

export default Product