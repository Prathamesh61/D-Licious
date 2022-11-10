import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_SIGNUP_FAILURE,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
} from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    isAuth: false,
};

export const reducer = (oldState = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_SIGNUP_SUCCESS:
            return {
                ...oldState,
                isError: false,
                isLoading: false,
            };
        case USER_SIGNUP_FAILURE:
            return {
                ...oldState,
                isError: true,
                isLoading: false,
            };
        case USER_SIGNUP_REQUEST:
            return {
                ...oldState,
                isLoading: true,
                isError: false,
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...oldState,
                isAuth: true,
                isLoading: false,
                isError: false,
            };
        default:
            return oldState;
    }
};
