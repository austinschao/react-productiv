import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<EditableTodo />);
  });

  it("contains expected title", function () {
    const result = render(<EditableTodo />);
    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });
});
