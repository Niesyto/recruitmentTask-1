//import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        /* 
        <span className="ButtonContainer" onClick={props.onClick} data-testid="testButton">
            <button className={"Button " + props.variant} >
                <div className={props.variant === "Small" ? "ButtonText TextSmall" : "ButtonText"}>
                */
                    props.children
                      /* 
                </div>
            </button>
        </span>
                      */
    );
}
