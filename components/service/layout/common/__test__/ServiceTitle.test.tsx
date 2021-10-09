import React from "react";
import ReactDOM from "react-dom";
import ReactTestRenderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import ServiceTitle from "../ServiceTitle";
import config from "@/utils/config";

afterEach(cleanup);

it("should render ServiceTitle successfully", () => {
    const container = document.createElement("div");
    ReactDOM.render(<ServiceTitle />, container);
});

it("should be clickable if handleClick is provided", () => {
    const handleClickMock = jest.fn();

    const result = render(<ServiceTitle handleClick={handleClickMock} />);
    const elem = result.getByRole("button");

    fireEvent.click(elem);

    expect(handleClickMock).toBeCalledTimes(1);
    expect(elem).not.toBeDisabled();
});

it("should not be clickable if handleClick is not provided", () => {
    const result = render(<ServiceTitle handleClick={undefined} />);
    const elem = result.getByRole("button");

    fireEvent.click(elem);

    expect(elem).toBeDisabled();
});

it("should contain the app name", () => {
    const result = render(<ServiceTitle handleClick={undefined} />);
    const elem = result.getByRole("button");

    expect(elem).toHaveTextContent(config.appName);
});

it("should match snapshot", () => {
    const renderer = ReactTestRenderer.create(<ServiceTitle />).toJSON();
    expect(renderer).toMatchSnapshot();
});
