import React from 'react';
import './Cart.css';
import Button from '../Button/Button.js';
import Collapsible from '../Collapsible/Collapsible.js';
import CartItem from './CartItem.js';

const cartContent = {
  items: [
    {
      name: "Lorem Ipsum Dolor Sit Amet",
      image: "./product.png",
      price: 12.99,
      quantity: 1
    }
  ]
}

export default function Cart() {
  return (
    <div className="Cart">
      <h2 className="Title">Shopping Cart</h2>
      <div className="CostPanel" >
        <div className="PriceSegment">
          <h5>Subtotal</h5>
          <h5>xddd</h5>
        </div>
        <div className="PriceSegment">
          <h5>Shipping</h5>
          <h5>xdd</h5>
        </div>
        <div className="PriceSegment">
          <h5>{"Taxes & Fees"}</h5>
          <h5>xdd xdd</h5>
        </div>
      </div>
      <div className="PriceSegment">
        <h4>Total</h4>
        <h4>xddd</h4>
      </div>

      <Collapsible text="See item details">
        {cartContent.items.map((item, index) =>
          <CartItem key={index} item={item} />
        )}
      </Collapsible>
      <Collapsible text="Apply promo codes">
        <input type="text" className="CouponInput" placeholder="Promo code"></input>
        <span className="Spacing" />
        <Button style={{ height: "33px" }} variant="Small">
          Apply
        </Button>
      </Collapsible>
    </div>
  );
}

