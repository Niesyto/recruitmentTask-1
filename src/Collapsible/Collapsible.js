import React from 'react';
import './Collapsible.css';

export default function Collapsible(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    }


    return (
        <>
            <button type="button" className="Collapsible" onClick={handleClick} data-testid="testButton">
                <p className="noMargin"> {props.text}  <i className={open ? "Arrow Up" : "Arrow Down"} /></p>
            </button>
            <div className={open ? "Content Open" : "Content"} data-testid="testContainer">
                {props.children}
            </div>
        </>
    );
}

