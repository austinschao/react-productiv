import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("TodoForm", function () {
  it("renders without crashing", function () {
    render(<TodoForm />);
  });

  it("contains expected title", function () {
    const result = render(<TodoForm />);
    expect(result.queryByText("Priority:")).toBeInTheDocument();
  });
});
