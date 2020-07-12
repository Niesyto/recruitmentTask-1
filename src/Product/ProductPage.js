import React, { useEffect } from 'react';
import './ProductPage.css';
import IsCleanDisplay from './IsCleanDisplay.js';
//import Button from '../Button/Button.js';
import { connect } from "react-redux";
import { itemsChanged, subtotalChanged } from "../Redux/actions";


function ProductPage(props) {
    //Product
    const [item, setItem] = React.useState();

    //Fetching product
    useEffect(() => {
        fetch("/item.json")
            .then(response => response.json())
            .then(data => setItem(data));
    }, []);

    //If item not fetched yet
    if (!item)
        return (
            <>Loading...</>
        )
/* 
    const handlePurchase = () => {
        props.itemsChanged({
            name: item.name,
            price: item.price,
            quantity: 1,
            image: item.imgSource
        });
        props.subtotalChanged(item.price);
    }
   */ 

    //If there are no items in cart
    if (props.items.length !== 0)
        return (
        <div></div>
        );

    return (
        <div className="ProductPageRoot">
            <div className="ImageBox">
                <img src={item.imgSource} className="Image" alt="Product" />
            </div>
            
            <div>
                <span className="InfoText">{item.info}</span>
                <h1 className="noMargin">{item.name}</h1>
            </div>
          
            <div>
                <div className="Stars" style={{ '--rating': item.rating }} aria-label={"Rating of this product is " + item.rating + " out of 5."} />
                <span className="VotesText">{item.votes}</span>
                <IsCleanDisplay isClean={item.isClean} />
            </div>
  
            <div>
                {item.description.split("\n").map((sentence, index) =>
                    <div className="DescriptionText" key={index}>
                        {sentence}
                    </div>)}
            </div>
             {/*     
            <span>
                <Button onClick={handlePurchase}>
                    {`Purchase ‧ $${item.price}`}
                </Button>
            </span>
       */}
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        items: state.cartContent.items
    }
};
const mapDispatchToProps = { itemsChanged, subtotalChanged };

export const ProductPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductPage);
