import {ADD_TO_CART, REMOVE_FROM_CART, CHANGE_CATEGORY} from "../constants/actionTypes";

let initialState = {
    activeCategory: 'food',
    products: [
        {id: 1, name: 'pizza', cost: 10, category: 'food'},
        {id: 2, name: 'hamburger', cost: 5, category: 'food'},
        {id: 3, name: 'tv', cost: 599, category: 'electronics'},
        {id: 4, name: 'phone', cost: 799, category: 'electronics'},
    ],
    shoppingCart: [

    ]
};

function reducer(state = initialState, action) {
    switch(action.type) {
    case ADD_TO_CART:
        return {
            ...state,
            products: [...state, action.payload]
        };
    case REMOVE_FROM_CART:
        return {
            ...state,
            products: state.products.filter(product => product.id != action.payload)
        };
    case CHANGE_CATEGORY:
        return {
            ...state,
            activeCategory: action.payload,
        };
    default:
        return state;
    }
}
