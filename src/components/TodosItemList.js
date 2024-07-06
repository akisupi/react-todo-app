import React from "react";

// iImport component to be able to use in another component or file
import TodoItem from "./TodoItem";

// This component holds a list of todo items
const TodosItemList = ({ todos, handleChange, deleteTodoItem }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChange={handleChange}
          deleteTodoItem={deleteTodoItem}
        />
      ))}
    </>
  );
};
export default TodosItemList;
