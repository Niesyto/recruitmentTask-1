import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button.js';


it("runs function on button press", () => {
    let testText = "";
    const handleClick = () => {
        testText = "test";
    }

    const { queryByTestId } = render(
        <Button onClick={handleClick}>
            test
        </Button>)

    fireEvent(
        queryByTestId("testButton"),
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        })
    )

    expect(testText).toEqual("test");
});
