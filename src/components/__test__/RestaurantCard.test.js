import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";

it("Should render RestaurantCard component with props Data", () => {

    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)")

    expect(name).toBeInTheDocument()
})