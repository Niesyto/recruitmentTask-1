import React from 'react';
import './Button.css';

export default function Button(props) {

    return (
        <span className="ButtonContainer" onClick={props.onClick} data-testid="testButton">
            <button>
                <div>
                    {props.children}
                </div>
            </button>
        </span>

    );


}
