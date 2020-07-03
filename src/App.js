import React from 'react';
import ProductPage from './Product/ProductPage.js';
import Cart from './Cart/Cart.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Sidebar background"></div>
      <div className="Databar background">
        {/*<ProductPage/>*/}
        <Cart />
      </div>
      <div className="Sidebar background"></div>
    </div>
  );
}

export default App;
