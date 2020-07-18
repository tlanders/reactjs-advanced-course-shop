import React from 'react';
import logo from './logo.svg';
import './App.css';

import Products from './containers/products'
import ShoppingCart from "./containers/shoppingCart";

function App() {
  return (
      <div>
        <h1>Welcome to our Shop!</h1>
        <Products/>
        <ShoppingCart/>
      </div>
  );
}

export default App;
