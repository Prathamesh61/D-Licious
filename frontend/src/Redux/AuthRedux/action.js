import * as types from "./actionType";
import axios from "axios";
import { toastAlert } from "../../Components/utils/action";

const URL_MAIN = process.env.REACT_APP_MAIN_URL;
//------------------------------------Profile section 
export const loginRequest = () => {
    return { type: types.LOGIN_REQUEST };
};

export const loginSuccess = (payload) => {
    return { type: types.LOGIN_SUCCESS, payload };
};

export const loginFailure = () => {
    return { type: types.LOGIN_FAILURE };
};

export const loginUser = (data) => (dispatch) => {
    dispatch(loginRequest());
    const { email, password } = data;
    if (email && password) {
        axios
            .post(URL_MAIN + "/user/login", {
                data: data,
            })
            .then((res) => {
                // console.log(res)
                let status = res.data.status;
                // console.log(status);
                if (status === 200) {
                    // toastAlert(toast, "Login Successful", "success");
                    localStorage.setItem("token", res.data.token);
                    dispatch(loginSuccess(res.data.token));
                    // navigate("/home");
                } else if (status === 500) {
                    // toastAlert(toast, res.data.msg, "error");
                    dispatch(loginFailure());
                }
            })
            .catch((err) => {
                // console.log(err);
                dispatch(loginFailure());
            });
    }
}


export const signupRequest = () => {
    return { type: types.SIGNUP_REQUEST };
};

export const signupSuccess = (payload) => {
    return { type: types.SIGNUP_SUCCESS, payload };
};

export const signupFailure = () => {
    return { type: types.SIGNUP_FAILURE };
};

export const signupUser = (data) => (dispatch) => {
    dispatch(signupRequest());
    const { email, mobile, password } = data;
    if (email && mobile && password) {
        axios
            .post(URL_MAIN + "/user/signup", { body: data })
            .then((res) => {
                // console.log(res);
                if (res.data.status === 404) {
                    // toastAlert(toast, res.data.msg, "error");
                    dispatch(signupFailure());
                } else if (res.data.status === 200) {
                    // toastAlert(toast, res.data.msg, "success");
                    setTimeout(() => {
                        // return navigate("/login");
                    }, 2000);
                    dispatch(signupSuccess())
                }
            })
            .catch((err) => {
                // toastAlert(toast, "Somthing went wrong", "error");
            });
    }
}