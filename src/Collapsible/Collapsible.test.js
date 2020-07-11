import React from 'react';
import { toBeVisible, toHaveClass } from '@testing-library/jest-dom/matchers'
import { render, fireEvent } from '@testing-library/react';
import Collapsible from './Collapsible.js';

expect.extend({ toBeVisible, toHaveClass })

it("renders correctly when collapsed", () => {
    const { queryByTestId } = render(
        <Collapsible >
            <h1>test</h1>
        </Collapsible>)

    expect(queryByTestId("testContainer")).not.toHaveClass('Open');
});

it("renders correctly when open", () => {
    const { queryByTestId } = render(
        <Collapsible >
            <h1>test</h1>
        </Collapsible>)

    fireEvent(
        queryByTestId("testButton"),
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        })
    )

    expect(queryByTestId("testContainer")).toHaveClass('Open');
});
