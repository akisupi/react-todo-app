import React from "react";
import TodosItemList from "./TodosItemList";
import { useState, useEffect } from "react";
import InputTodoForm from "./InputTodoForm";
import { v4 as uuidv4 } from "uuid";

const TodosAppBody = () => {
  // create a dummy todos list. To be updated
  const [todos, setTodos] = useState(getInitialTodos());

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
    setTodos(() => [...todos, newTodo]);
  };

  // After editing, set the todo title to the new title
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    // store todos items in browser local storage
    const temp = JSON.stringify(todos); //convert javascript object into strings
    localStorage.setItem("todos", temp); // store todos in browser local storage
  }, [todos]);

  function getInitialTodos() {
    // get stored items from browser
    const temp = localStorage.getItem("todos");
    // convert the retrieved data into javascript object
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  return (
    <>
      <InputTodoForm handleAddTodoItem={handleAddTodoItem} />
      <TodosItemList
        todos={todos}
        handleChange={handleChange}
        deleteTodoItem={deleteTodoItem}
        setUpdate={setUpdate}
      />
    </>
  );
};

export default TodosAppBody;
