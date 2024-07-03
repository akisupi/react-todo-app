import React from "react";

// iImport component to be able to use in another component or file
import TodoItem from "./TodoItem";

// This component holds a list of todo items
class TodosList extends React.Component {
  render() {
    return (
      <>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </>
    );
  }
}
export default TodosList;
