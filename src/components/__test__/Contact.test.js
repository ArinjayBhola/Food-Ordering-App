import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// Unit Testing
describe("Contact Us Page Test Case", () => {

    it("Should load contact us component", () => {
        // Render
        render(<Contact />);

        // Querying
        const heading = screen.getByRole("heading");

        // Assertion
        expect(heading).toBeInTheDocument();
    })

    it("Should load button inside contact component", () => {
        render(<Contact />);

        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");

        // Assertion
        expect(button).toBeInTheDocument();
    })

    it("Should load input name inside contact component", () => {
        render(<Contact />)

        // Querying
        const inputBoxes = screen.getAllByRole("textbox")
        // console.log(inputBoxes);
        // expect(inputBoxes.length).not.toBe(3);
        expect(inputBoxes.length).toBe(3);
    })
})
