import React from "react";
import { render, screen } from "@testing-library/react";
import TaskCreator from "./TaskCreator";

describe("Given a component with an input and a button", () => {
  test("When the component renders in the app it shows an input and a button", () => {
    render(<TaskCreator onUpdate={() => {}} />);
    const inputEl = screen.getByTestId("item-input");
    const buttonEl = screen.getByText("Add new task");
    expect(inputEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
  });
});
