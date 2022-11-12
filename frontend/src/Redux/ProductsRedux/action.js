import * as types from "./actionTypes";
import axios from "axios";

const getProducts = (payload) => (dispatch) => {
    dispatch({type: types.GET_PRODUCTS_REQUEST})
    return axios.get(`https://dilicious-adm-api.onrender.com/fooditems/get`,payload).then((r) => {
        return dispatch({
            type: types.GET_PRODUCTS_SUCCESS, payload: r.data
        })
    })
    .catch((e) => {
        return dispatch({type: types.GET_PRODUCTS_FAILURE, payload: e})
    })
}

export { getProducts };