import React from 'react';
import './Cart.css';
import Button from '../Button/Button.js';
import Collapsible from '../Collapsible/Collapsible.js';
import CartItem from './CartItem.js';
import { connect } from "react-redux";
import { discountChanged } from "../Redux/actions";


export function Cart(props) {
  const [discountText, setDiscountText] = React.useState("");

  const handleDiscountChange = (event) => {
    setDiscountText(event.target.value);
  }

  const handleClick = () => {
    props.discountChanged(discountText);
  }

  if(!props.items)
    return (<div></div>)

  if(props.items.length===0)
    return (<div></div>)

  return (
    <div className="Cart">
      <h2 className="Title">Shopping Cart</h2>
      <div className="CostPanel" >
        <div className="PriceSegment">
          <h5>Subtotal</h5>
          <h5>{props.details.subtotal === 0 ? "Free" : "$" + props.details.subtotal.toFixed(2)}</h5>
        </div>
        <div className="PriceSegment">
          <h5>Shipping</h5>
          <h5>{props.details.shipping === 0 ? "Free" : "$" + props.details.shipping.toFixed(2)}</h5>
        </div>
        <div className="PriceSegment">
          <h5>{"Taxes & Fees"}</h5>
          <h5>{props.details.taxes === 0 ? "Free" : "$" + props.details.taxes.toFixed(2)}</h5>
        </div>
        {props.details.discount ?
          <div className="PriceSegment">
            <h5>{"Discount (" + props.details.discount * 100 + "%)"}</h5>
            <h5>{"($" + (props.details.discount * props.details.subtotal).toFixed(2) + ")"}</h5>
          </div> : null
        }
      </div>
      <div className="PriceSegment">
        <h4>Total</h4>
        <h4>{"$" + ((1 - props.details.discount) * props.details.subtotal + props.details.shipping + props.details.taxes).toFixed(2)}</h4>
      </div>

      <Collapsible text="See item details">
        {props.items.map((item, index) =>
          <CartItem key={index} item={item} />
        )}
      </Collapsible>
      <Collapsible text="Apply promo codes" >
        <input type="text" className="CouponInput" placeholder="Promo code" value={discountText} onChange={handleDiscountChange}></input>
        <span className="Spacing" />
        <Button style={{ height: "33px" }} variant="Small" onClick={handleClick} data-testid="applyButtonTest">
          Apply
        </Button>
      </Collapsible>
    </div>
  );
}




const mapStateToProps = (state) => {
  return {
    details: state.cartDetails,
    items: state.cartContent.items
  }
};
const mapDispatchToProps = { discountChanged };

export const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);
