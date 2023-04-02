import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import "../Style/Product.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductsRedux/action";
import { Menu, MenuButton, MenuList, MenuItem, Button, Show, Spinner, Image, Box, Stack, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Tag, Skeleton } from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const products =
    useSelector((state) => state.ProductReducer.products.data) || [];
  const isLoading = useSelector((state) => state.ProductReducer.isLoading)
  const dispatch = useDispatch();
  const [subCategory, setSubCategory] = useState([]);
  const [category, setCategory] = useState('');
  const [currCatProductsId, setCurrCatProductsId] = useState("");
  const url = process.env.REACT_APP_PRODUCTS_URL;
  useEffect(() => {
    axios
      .get(`${url}/category/${id}`)
      .then((res) => {
        setCategory(res.data[0].cat_name);
        setCurrCatProductsId("");
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [id])

  useEffect(() => {
    dispatch(getProducts(id));
    axios
      .get(`${url}/subcat/get/`)
      .then((res) => {
        let filterSubCat = res.data.filter((el) => {
          return el.cat_id === id;
        })
        setSubCategory(filterSubCat);
        // console.log(filterSubCat)
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [currCatProductsId, id]);

  const filterProduct = (id) => {
    setCurrCatProductsId(id);
  };

  return (
    <div className="body">
      <div className="page_body">
        <Show above="450px">    <div id="wrapper">
          <div className="static_nav_section">
            <div className="child-1">
              <h1>{category}</h1>
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
        </div></Show>

        {/* Filter section start */}
        <div className="filter_wrapper">
          {/* <Accordion allowToggle width={"100%"} backgroundColor={"white"}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" fontSize={"18px"} flex='1' textAlign='left'>
                    Apply Filters You want
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}> */}
          <div className="filter_wrapper_box">
            {subCategory.map((el) => {
              return (
                <Skeleton isLoaded={!isLoading} >
                  <Tag padding={'10px'} variant='outline' width={["150px", 'fit-content', 'fit-content']} colorScheme='red' color={'black'}
                    onClick={() => filterProduct(el._id)}
                    key={el._id}>
                    {el.sub_cat}
                  </Tag>
                </Skeleton>
              )
            })}

          </div>
        </div>

        {/* body wrapper */}
        {isLoading ?
          //  <Spinner
          //   thickness='4px'
          //   speed='0.65s'
          //   emptyColor='gray.200'
          //   color='blue.500'
          //   size='xl'
          // />
          <Stack style={{ width: "100%", justifyContent: "center", alignItems: "center", padding: "50px" }}>
            <Image width={"5%"} style={{ alignSelf: "center" }} src="https://acegif.com/wp-content/uploads/loading-29.gif" alt={"loading"} />
            <Text style={{ fontSize: "20px", fontWeight: 500, color: "#d11243", textAlign: "center" }}> Loading...</Text>
          </Stack>
          :
          <div className="body_wrapper">
            {currCatProductsId !== ""
              ? products.length > 0 &&
              products.map((d) => {
                return (
                  d.sub_cate == currCatProductsId && (
                    <Skeleton isLoaded={!isLoading}>
                      <ProductCard key={d._id} item={d} />
                    </Skeleton>)
                );
              })
              : products.length > 0 &&
              products.map((d) => {
                return <Skeleton isLoaded={!isLoading}><ProductCard key={d._id} item={d} /></Skeleton>;
              })}
          </div>
        }
      </div>
    </div >
  );
};

export default Product;
