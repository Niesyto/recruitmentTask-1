import React from 'react';
import { ProductPageContainer } from './Product/ProductPage.js';
import { CartContainer } from './Cart/Cart.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Sidebar background"></div>
      <div className="Databar background">
        <ProductPageContainer />
        <CartContainer />
      </div>
      <div className="Sidebar background"></div>
    </div>
  );
}

export default App;
