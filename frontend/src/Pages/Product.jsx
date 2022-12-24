import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import "../Style/Product.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductsRedux/action";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import axios from "axios";

const Product = () => {
  const products =
    useSelector((state) => state.ProductReducer.products.data) || [];
  const dispatch = useDispatch();
  const [subCategory, setSubCategory] = useState([]);
  const [category, setCategory] = useState([]);
  const [currCatProductsId, setCurrCatProductsId] = useState("");
  const url = process.env.REACT_APP_PRODUCTS_URL;
  
  useEffect(() => {
    dispatch(getProducts());
    // console.log("first");
    axios
      .get(`${url}/category/getcategory`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });

    axios
      .get(`${url}/subcat/get`)
      .then((res) => {
        setSubCategory(res.data);
        // console.log(res.data)
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [currCatProductsId]);
  //  console.log(subCategory,"subCategory")

  const filterProduct = (id) => {
    setCurrCatProductsId(id);
  };

  return (
    <div className="body">
      <div className="page_body">
        <div id="wrapper">
          <div className="static_nav_section">
            <div className="child-1">
              <h1>Chicken</h1>
            </div>
            <div className="child-2">
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78b9c4b2e0"
                alt="image"
              />
              <h3>Farm-raised superior breed</h3>
            </div>
            <div className="child-3">
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78bdf673b7"
                alt="image"
              />
              <h3>No Added Chemical , Antibiotic residue free.</h3>
            </div>
          </div>
        </div>

        {/* Filter section start */}
        <div className="filter_wrapper">
          <div className="filter_wrapper_box">
            <div>Express Delivery</div>
            {category.map((elem) => {
              return (
                <div key={elem._id}>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      {elem.cat_name}
                    </MenuButton>
                    <MenuList>
                      {subCategory.map((el) => {
                        return el.cat_id == elem._id ? (
                          <MenuItem
                            onClick={() => filterProduct(el._id)}
                            key={el._id}
                          >
                            {el.sub_cat}
                          </MenuItem>
                        ) : null;
                      })}
                    </MenuList>
                  </Menu>
                </div>
              );
            })}
          </div>
        </div>

        {/* body wrapper */}
        <div className="body_wrapper">
          {currCatProductsId != ""
            ? products.length > 0 &&
            products.map((d) => {
              return (
                d.sub_cate == currCatProductsId && (
                  <ProductCard key={d.id} item={d} />
                )
              );
            })
            : products.length > 0 &&
            products.map((d) => {
              return <ProductCard key={d.id} item={d} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Product;
