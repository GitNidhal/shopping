import {
  REMOVE_SELECTED_PRODUCT,
  SELECTED_PRODUCT,
  SET_PRODUCTS,
} from "../actionType/actionTypes";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case SELECTED_PRODUCT:
      return { ...state, ...payload };
    case REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
