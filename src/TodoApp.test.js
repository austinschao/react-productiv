import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";
import testTodos from "./testTodos";

describe("Todo app", function () {
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={testTodos} />);
  });

  it("matches initial todos", function () {
    const { container } = render(<TodoApp initialTodos={testTodos} />);
    expect(container).toMatchSnapshot();
  });

  it("contains expected title", function () {
    const result = render(<TodoApp initialTodos={testTodos} />);
    expect(result.queryByText("Todos")).toBeInTheDocument();
  });
});

describe("Adding an item", function () {
  it("adds a new item", function () {
    const { getByLabelText, queryByText } = render(
      <TodoApp initialTodos={testTodos} />
    );
    //no new item yet
    expect(queryByText("Making some tests")).not.toBeInTheDocument();

    const titleInput = getByLabelText("Title");
    const descriptionInput = getByLabelText("Description");
    const priorityInput = getByLabelText("Priority:");
    const submitBtn = queryByText("Gø!");

    fireEvent.change(titleInput, { target: { value: "Making some tests" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Making some tests right now" },
    });

    fireEvent.change(priorityInput, { target: { value: 2 } });
    fireEvent.click(submitBtn);

    expect(queryByText("Making some tests right now")).toBeInTheDocument();
  });
});

describe("Deleting an item", function () {
  it("should delete an item", function () {
    const { container, queryByText } = render(
      <TodoApp initialTodos={testTodos} />
    );
    const delBtn = container.querySelector(".EditableTodo-delBtn");

    expect(queryByText("Code!")).toBeInTheDocument();

    fireEvent.click(delBtn);

    expect(queryByText("Code!")).not.toBeInTheDocument();
  });
});

describe("Deleting all items", function () {
  it("should delete all items", function () {
    const { container, queryByText, debug, queryAllByText } = render(
      <TodoApp initialTodos={testTodos} />
    );

    expect(queryByText("Code!")).toBeInTheDocument();
    expect(queryAllByText("Make dinner").length).toEqual(2);
    expect(queryByText("Go to bed")).toBeInTheDocument();

    fireEvent.click(container.querySelector(".EditableTodo-delBtn"));
    fireEvent.click(container.querySelector(".EditableTodo-delBtn"));
    fireEvent.click(container.querySelector(".EditableTodo-delBtn"));

    expect(queryByText("You have no todos.")).toBeInTheDocument();
  });
});

describe("Lists TopToDo", function () {
  it("should have TopToDo", function () {
    const { container, queryByText } = render(
      <TodoApp initialTodos={testTodos} />
    );
    expect(queryByText("Top Todo")).toBeInTheDocument();

    fireEvent.click(container.querySelector(".EditableTodo-delBtn"));
    fireEvent.click(container.querySelector(".EditableTodo-delBtn"));
    fireEvent.click(container.querySelector(".EditableTodo-delBtn"));

    expect(queryByText("Top Todo")).not.toBeInTheDocument();
  });
});
