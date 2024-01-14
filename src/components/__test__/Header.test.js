import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should render Header Component with login button", () => {

    // Render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // Querying
    const loginButton = screen.getByRole("button");

    // Assertion
    expect(loginButton).toBeInTheDocument();
})

it("Should render Header Component with cart", () => {

    // Render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // Querying
    const cartItem = screen.getByText(/Contact/);

    // Assertion
    expect(cartItem).toBeInTheDocument();
})

it("Should change Login button to logout on click", () => {

    // Render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // Querying
    const loginButton = screen.getByRole("button", { name: "Logout" });

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", { name: "Login" });

    // Assertion
    expect(logoutButton).toBeInTheDocument();
})