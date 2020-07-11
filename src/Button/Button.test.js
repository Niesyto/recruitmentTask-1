import React from 'react';
import { toBeVisible, toHaveClass } from '@testing-library/jest-dom/matchers'
import { render, fireEvent } from '@testing-library/react';
import Button from './Button.js';

expect.extend({ toBeVisible, toHaveClass })

it("runs function on button press", () => {
    let testText="";
    const handleClick = () => {
        testText="test";
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
