import * as types from "./actionType";
const initialState = {
    profile: {},
    address: [],
    cart: [],
    myOrders: [],
    isLoading: false,
    isError: false
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        //-------------------Profile
        case types.PROFILE_REQUEST:
            return { ...state, isLoading: true, isError: false };

        case types.PROFILE_SUCCESS:
            return { ...state, isLoading: false, profile: payload, isError: false };

        case types.PROFILE_FAILURE:
            return { ...state, isLoading: false, profile: {}, isError: true };


        //---------------------Address
        case types.ADDRESS_REQUEST:
            return { ...state, isLoading: true, isError: false };

        case types.ADDRESS_SUCCESS:
            return { ...state, isLoading: false, address: payload, isError: false };

        case types.ADDRESS_FAILURE:
            return { ...state, isLoading: false, address: [], isError: true };



        //---------------------Cart
        case types.CART_REQUEST:
            return { ...state, isLoading: true, isError: false };

        case types.CART_SUCCESS:
            return { ...state, isLoading: false, cart: payload, isError: false };

        case types.CART_FAILURE:
            return { ...state, isLoading: false, cart: [], isError: true };



        //---------------------MyOrders
        case types.MYORDERS_REQUEST:
            return { ...state, isLoading: true, isError: false };

        case types.MYORDERS_SUCCESS:
            return { ...state, isLoading: false, myOrders: payload, isError: false };

        case types.MYORDERS_FAILURE:
            return { ...state, isLoading: false, myOrders: [], isError: true };

        default:
            return state;
    }
}

export { reducer };