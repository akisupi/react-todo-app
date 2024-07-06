import React from "react";
import TodosItemList from "./TodosItemList";
import { useState } from "react";
import InputTodoForm from "./InputTodoForm";
import { v4 as uuidv4 } from "uuid";

const TodosAppBody = () => {
  // create a dummy todos list. To be updated
  const [todos, setTodos] = useState([
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
  ]);

  // This handler function get the id of a checked todo item
  // and themn change the completed property of that todo item
  const handleChange = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  // this delete handler function filters the todo items and returns todo item whose id
  // does not match the id of the todo item whose delete button is clicked
  const deleteTodoItem = (id) => {
    setTodos([
      // Don't filter the original todo but a copy (...todos)
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const handleAddTodoItem = (todoTitle) => {
    const newTodo = {
      id: uuidv4(),
      title: todoTitle,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <InputTodoForm handleAddTodoItem={handleAddTodoItem} />
      <TodosItemList
        todos={todos}
        handleChange={handleChange}
        deleteTodoItem={deleteTodoItem}
      />
    </>
  );
};

export default TodosAppBody;
