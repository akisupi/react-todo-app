import React from "react";
import ReactDOM from "react-dom";

// Import component files to be able to use them in another component or file.
import TodoContainer from "./components/TodoContainer";

ReactDOM.render(
  // Wrop your root component in StrictMode to get error messages and warnings
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
