import React from 'react';
import './CartItem.css';

export default function CartItem(props) {


    if (!props || !props.item)
        return (
            <div style={{ display: "flex" }}>
                <h5>No data</h5>
            </div >
        )

    return (
        <div style={{ display: "flex" }}>
            <img src={props.item.image} alt="Product" className="CartItemImage" />
            <div className="CartItemInfo">
                <h4 className="CartItemTitle">{props.item.name}</h4>
                <h5 className="noMargin PriceText">${props.item.price}</h5>
                <h5 className="noMargin">Qty: {props.item.quantity}</h5>
            </div>
        </div>
    )
}