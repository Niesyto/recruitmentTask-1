import React, { useEffect } from 'react';
import './ProductPage.css';
import IsCleanDisplay from './IsCleanDisplay.js';
import Button from '../Button/Button.js'


export default function ProductPage() {
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

    const handlePurchase = () => {
        console.log("a");
    }

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

            <Button onClick={handlePurchase}>
                {`Purchase ‧ $${item.price}`}
            </Button>


        </div>
    );
}
