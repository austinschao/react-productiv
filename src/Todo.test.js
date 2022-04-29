import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";
import testTodos from "./testTodos";

const { id, title, priority, description } = testTodos[0];

describe("Todo", function () {
  it("renders without crashing", function () {
    render(
      <Todo
        id={id}
        title={title}
        priority={priority}
        description={description}
      />
    );
  });

  it("contains expected title", function () {
    const result = render(
      <Todo
        id={id}
        title={title}
        priority={priority}
        description={description}
      />
    );
    expect(result.queryByText("Code!")).toBeInTheDocument();
  });
});
