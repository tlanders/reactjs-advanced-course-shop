import { combineReducers } from 'redux';

// import activeCategory from "./activeCategory";
import products from "./products";
import shoppingCart from "./shoppingCart";

let reducer = combineReducers({products, shoppingCart});
// let reducer = combineReducers(activeCategory, products, shoppingCart);

export default reducer;
