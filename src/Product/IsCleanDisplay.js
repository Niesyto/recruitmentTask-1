import React from 'react';
import './IsCleanDisplay.css';


export default function IsCleanDisplay(props) {
    if (props.isClean)
        return (
            <div className="TextTrue">
                <div className="LineTrue" />
                Clean
            </div>
        )
    return (
        <div className="TextFalse">
            <div className="LineFalse" />
            Not Clean
        </div>
    );
}
