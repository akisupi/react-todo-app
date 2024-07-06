import React, { useState } from "react";

const InputTodoForm = ({ handleAddTodoItem }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [warning, setWarning] = useState('');

  const handleTodoTitle = (e) => {
    setTodoTitle(() => e.target.value);
  };

  const handleTitleSubmit = (e) => {
    e.preventDefault();

    if (todoTitle.trim()) {
      handleAddTodoItem(todoTitle);
      setTodoTitle("");
      setWarning('');
    } else {
      setWarning("Todo cannot be empty");
    }
  };

  return (
    <>
      <form onSubmit={handleTitleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          value={todoTitle}
          onChange={handleTodoTitle}
        />
        <button>Submit</button>
      </form>
      <span>{warning}</span>
    </>
  );
};
export default InputTodoForm;
