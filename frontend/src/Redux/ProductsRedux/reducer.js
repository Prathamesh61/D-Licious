import * as types from "./actionTypes";

const initalState = {
  allProducts: [],
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

    case types.GET_ALL_PRODUCTS_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, isError: false, allProducts: payload };
    case types.GET_ALL_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: true, allProducts: [] };
    default:
      return state;
  }
};

export { reducer };
