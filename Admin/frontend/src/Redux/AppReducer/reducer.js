import { USER_LOGIN_REQUEST } from "./actionsTypes";

const initState = {
    isLoading: false,
    isError: false,
    formData:{},
    data: {
        restaurent: [],
        orders: [],
        deleveredOrders: [],
        category: [],
    },
};
export const reducer = (oldState = initState, action) => {
    const { type, payload } = action;
    switch (type) {
          
               
        default:
            return oldState;
    }
};
