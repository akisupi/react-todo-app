import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";

const InputTodoForm = ({ handleAddTodoItem }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [warning, setWarning] = useState("");

  const handleTodoTitle = (e) => {
    setTodoTitle(() => e.target.value);
  };

  const handleTitleSubmit = (e) => {
    e.preventDefault();

    if (todoTitle.trim()) {
      handleAddTodoItem(todoTitle);
      setTodoTitle("");
      setWarning("");
    } else {
      setWarning("Todo cannot be empty");
    }
  };

  return (
    <>
      <form onSubmit={handleTitleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add todo..."
          value={todoTitle}
          onChange={handleTodoTitle}
          className="input-text"
        />
        <button className="input-submit">
          <GoArrowRight />
        </button>
      </form>
      <span className="submit-warning">{warning}</span>
    </>
  );
};
export default InputTodoForm;
