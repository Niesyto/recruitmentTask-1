import React from 'react';
import './Button.css';

export default function Button(props) {

    return (
        <span onClick={props.onClick}>
            <button>
                <div>
                    {props.children}
                </div>
            </button>
        </span>

    );

}
