import React from "react";

// import components to use them in another component or file
import Header from "./Header";
import Todoslist from "./TodosList";

class TodoContainer extends React.Component {
    // create a dummy todos list. To be updated
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

  render() {
    return (
      <>
        <Header />
        {/* Pass down todos to child component */}
        <Todoslist todos={this.state.todos} />
      </>
    );
  }
}
export default TodoContainer;
