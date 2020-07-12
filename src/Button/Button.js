import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        //Change className based on props
        <span className="ButtonContainer" onClick={props.onClick} data-testid="testButton">
            <button className={"Button " + props.variant} >
    <div >
                     {/*<p> {props.children}</p>*/}
                </div>
            </button>
        </span>
    );
}
