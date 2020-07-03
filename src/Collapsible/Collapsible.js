import React from 'react';
import './Collapsible.css';

export default function Collapsible(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    }


    return (
        <>
            <button type="button" className="Collapsible" onClick={handleClick}>Open Collapsible</button>
            <div className={open ? "Content Open" : "Content"}>
                {props.children}
            </div>
        </>
    );
}

