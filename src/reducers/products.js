let initialState = [
    {id: 1, name: 'pizza', cost: 10, category: 'food'},
    {id: 2, name: 'hamburger', cost: 5, category: 'food'},
    {id: 3, name: 'tv', cost: 599, category: 'electronics'},
    {id: 4, name: 'phone', cost: 799, category: 'electronics'},
];

export default function products(state = initialState, action) {
    // currently does nothing
    return state;
}