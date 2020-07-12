import React from 'react';
import { toHaveValue, toHaveClass } from '@testing-library/jest-dom/matchers'
import { render, fireEvent } from '@testing-library/react';
import { Cart } from './Cart.js';

expect.extend({ toHaveValue, toHaveClass })

const testItems = [{ name: "test", price: 1, quantity: 1, image: null }];
testItems.length = 1;
const testDetails = { subtotal: 0, shipping: 0, taxes: 0, discount: 0 };

const testFunction = () => {
    return "test";
}

const mapDispatchToProps = { testFunction };

describe("renders correctly when", () => {
    it("received redux props", () => {
        const { container } = render(
            <Cart items={testItems} details={testDetails} discountChange={(a) => { console.log(a) }}>
            </Cart>)

        expect(container.firstChild).toHaveClass("Cart");
    });
    it("received no data", () => {
        const { queryByTestId } = render(
            <Cart data-testid="testCart">
            </Cart>)

        expect(queryByTestId("testCart")).toBeNull();
    });
})

it("reacts to textField change", () => {
    const { getByPlaceholderText } = render(
        <Cart items={testItems} details={testDetails} discountChange={(a) => { console.log(a) }}>
        </Cart>)

    expect(getByPlaceholderText("Promo code")).toHaveValue("");

    fireEvent.change(getByPlaceholderText("Promo code"), { target: { value: 'test' } });
    expect(getByPlaceholderText("Promo code")).toHaveValue('test');
});