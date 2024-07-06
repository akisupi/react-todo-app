import React from "react";

// import components to use them in another component or file
import TodosAppHeader from "./TodosAppHeader";
import TodosAppBody from "./TodosAppBody";
import TodosAppNavbar from "./TodosAppNavbar";

const TodosApp = () => {
  return (
    <>
      <TodosAppNavbar />
      <TodosAppHeader />
      <TodosAppBody />
    </>
  );
};

export default TodosApp;
