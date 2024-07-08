import { useState, useRef } from "react";
import styles from "../styles/TodoItem.module.css";
import { IoTrashOutline } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { useAuthContext } from "../context/AuthContext";

// This component holds and manages a todo item
const TodoItem = ({ todo, handleChange, deleteTodoItem, setUpdate }) => {
  const [editing, setEditing] = useState(false);
  // const [updateInput, setUpdateInput] = useState(todo.title);
  const editInputRef = useRef(null);

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const handleEditing = () => {
    setEditing(true);
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const handleUpdatedDone = (e) => {
    if (e.key === "Enter") {
      setUpdate(editInputRef.current.value, todo.id);
      setEditing(false);
    }
  };

  const { user } = useAuthContext();

  return (
    <>
      <li className={styles.item}>
        <div className={styles.content} style={viewMode}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleChange(todo.id)}
          />
          {/* Dynamically style todo items based on whether completed or not */}
          <span style={todo.completed ? completedStyle : null}>
            {todo.title}
          </span>
          {user && (
            <button onClick={handleEditing}>
              <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
            </button>
          )}
          <button onClick={() => deleteTodoItem(todo.id)}>
            <IoTrashOutline style={{ color: "#5e5e5e", fontSize: "16px" }} />
          </button>
        </div>
        <input
          type="text"
          // value={todo.title}
          ref={editInputRef}
          defaultValue={todo.title}
          className="styles.textInput"
          style={editMode}
          // onChange={(e) => setUpdateInput(e.target.value)}
          onKeyDown={handleUpdatedDone}
        />
      </li>
    </>
  );
};
export default TodoItem;
