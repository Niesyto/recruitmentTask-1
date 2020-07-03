import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        <button className="Button" >
            <div className="ButtonText">
                <p> {props.children}</p>
            </div>
        </button>
    );
}

