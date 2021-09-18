import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ServiceTitle from "../ServiceTitle";

it("should render ServiceTitle successfully", () => {
    render(<ServiceTitle />);
});

it("should be clickable if handleClick prop is provided", () => {
    const handleClickMock = jest.fn();

    const result = render(<ServiceTitle handleClick={handleClickMock} />);
    const elem = result.getByRole("button");

    fireEvent.click(elem);

    expect(handleClickMock).toBeCalledTimes(1);
    expect(elem).not.toHaveAttribute("disabled");
});

it("should be not clickable if handleClick prop is not provided", () => {
    const result = render(<ServiceTitle handleClick={undefined} />);
    const elem = result.getByRole("button");

    fireEvent.click(elem);

    expect(elem).toHaveAttribute("disabled");
});
