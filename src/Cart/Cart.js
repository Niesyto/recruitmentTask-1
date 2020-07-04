import React from 'react';
import './Cart.css';
import Button from '../Button/Button.js'
import Collapsible from '../Collapsible/Collapsible.js'


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

      <Collapsible text="See item details">content</Collapsible>
      <Collapsible text="Apply promo codes">
        <input type="text" className="CouponInput" placeholder="Promo code"></input>
        <span className="Spacing"/>
        <Button style={{height:"33px"}} variant="Small">
          Apply
        </Button>
      </Collapsible>
    </div>
  );
}

