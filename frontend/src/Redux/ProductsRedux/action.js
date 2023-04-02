import * as types from "./actionTypes";
import axios from "axios";

const getProducts = (id) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  const url = process.env.REACT_APP_PRODUCTS_URL + `/fooditems/get/${id}`
  // console.log("changed id", id)
  return axios
    .get(url)
    .then((r) => {
      return dispatch({
        type: types.GET_PRODUCTS_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      return dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: e });
    });
};

const getAllProducts = () => (dispatch) => {
  dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
  const url = process.env.REACT_APP_PRODUCTS_URL + `/fooditems/get/`
  return axios
    .get(url)
    .then((r) => {
      return dispatch({
        type: types.GET_ALL_PRODUCTS_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      return dispatch({ type: types.GET_ALL_PRODUCTS_FAILURE, payload: e });
    });
};

export { getProducts, getAllProducts };

