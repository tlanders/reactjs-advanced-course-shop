import {ADD_TO_CART, REMOVE_FROM_CART, CHANGE_CATEGORY} from "../constants/actionTypes";

let initial1 = 'food'
function activeCategory(state = initial1, action) {
    switch(action.type) {
    case CHANGE_CATEGORY:
        return action.payload;
    default:
        return state;
    }
}

let initial2 = [
    {id: 1, name: 'pizza', cost: 10, category: 'food'},
    {id: 2, name: 'hamburger', cost: 5, category: 'food'},
    {id: 3, name: 'tv', cost: 599, category: 'electronics'},
    {id: 4, name: 'phone', cost: 799, category: 'electronics'},
];
function products(state = initial2, action) {
    return state;
}

let initial3 = [];
function shoppingCart(state = initial3, action) {
    switch(action.type) {
    case ADD_TO_CART:
        return [...state, action.payload];
    case REMOVE_FROM_CART:
        return state.filter(productId => productId != action.payload);
    default:
        return state;
    }
}

function reducer(state = initialState, action) {
    return {
        activeCategory: activeCategory(state,action),
        products: products(state,action),
        shoppingCart: shoppingCart(state,action),
    }
}
