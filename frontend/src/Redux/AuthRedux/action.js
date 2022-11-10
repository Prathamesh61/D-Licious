// import * as types from "./actionType";
// import axios from "axios";

// const getSignupFunction = (payload) => (dispatch) => {
//      dispatch({type: types.SIGNUP_REQUEST})
//      return axios.post("http://localhost:8080/user/signup", payload)
//      .then((r) =>{ return dispatch({type: types.SIGNUP_SUCCESS, payload: r.data})
//      })
//      .catch((err) => {
//            dispatch({type: types.SIGNUP_FAILURE, payload: err})
//      })
// }

// export { getSignupFunction };