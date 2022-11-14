import * as types from "./actionTypes";
import axios from "axios";

const getProducts = (payload) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  const url = process.env.REACT_APP_PRODUCTS_URL + "/fooditems/get"
  // console.log(url)
  return axios
    .get(url, payload)
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

export { getProducts };
