import {
  REMOVE_SELECTED_PRODUCT,
  SELECTED_PRODUCT,
  SET_PRODUCTS,
} from "../actionType/actionTypes";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
};
