import * as types from "./actionTypes";

const initalState = {
  products: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.GET_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, isError: false, products: payload };
    case types.GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: true, products: [] };
    default:
      return state;
  }
};

export { reducer };
