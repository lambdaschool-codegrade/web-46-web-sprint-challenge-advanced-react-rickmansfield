import React from "react";
// import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("1 renders without errors", () => {
    render(<CheckoutForm />)
});

test("2 shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstName = 'Rick';
    const lastName = 'Mansfield';
    const address = '1817 Highland Drive';
    const city = 'Grafton';
    const state = 'Wisconsin';
    const zip = '53024';

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    userEvent.type(firstNameInput, firstName);
    userEvent.type(lastNameInput, lastName);
    userEvent.type(addressInput, address);
    userEvent.type(cityInput, city);
    userEvent.type(stateInput, state);
    userEvent.type(zipInput, zip);

    expect(screen.queryByTestId('successMessage')).toBeFalsy();

    const button = screen.getByRole('button');
    userEvent.click(button);

    const successMessage = screen.getByTestId('successMessage');
    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toBeTruthy();

});
