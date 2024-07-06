// This component holds and manages a todo item
const TodoItem = ({ todo, handleChange, deleteTodoItem }) => {
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChange(todo.id)}
        />
        {todo.title}
        <button onClick={() => deleteTodoItem(todo.id)}>Delete</button>
      </li>
    </>
  );
};
export default TodoItem;
