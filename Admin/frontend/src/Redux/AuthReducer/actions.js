
import {
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
} from "./actionsTypes";

const loginRequest = (payload) => {
    return { type: USER_LOGIN_REQUEST, payload };
};

const loginFailure = () => {
    return { type: USER_LOGIN_FAILURE };
};
const loginSuccess = (payload) => {
    return { type: USER_LOGIN_SUCCESS, payload };
};
const signupRequest = (payload)
