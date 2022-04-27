import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";

it("should render the card", () => {
    render(<Card/>);
    const card = screen.getByRole("")
})