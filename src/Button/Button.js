import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        //Change className based on props
        <button className={"Button "+ props.variant} >
            <div className={props.variant==="Small"?"ButtonText TextSmall":"ButtonText"}>
                <p> {props.children}</p>
            </div>
        </button>
    );
}
