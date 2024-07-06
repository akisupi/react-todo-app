import React from "react";
import ReactDOM from "react-dom";

// Import component files to be able to use them in another component or file.
import TodosApp from "./components/TodosApp";

ReactDOM.render(
  // Wrop your root component in StrictMode to get error messages and warnings
  <React.StrictMode>
    <TodosApp />
  </React.StrictMode>,
  document.getElementById("root")
);
