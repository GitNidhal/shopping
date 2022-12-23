import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";

const reducers = combineReducers({
  allproducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;
