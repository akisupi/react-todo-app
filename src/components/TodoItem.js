import React from "react";

// This component holds and manages a todo item
class TodoItem extends React.Component {
  render() {
    return <li>{this.props.todo.title}</li>;
  }
}
export default TodoItem;
