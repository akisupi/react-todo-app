import React from "react";
import ReactDOM from "react-dom";
import "./styles/todoApp.css";
import { BrowserRouter as Router } from "react-router-dom";
// Import component files to be able to use them in another component or file.
import TodosApp from "./components/TodosApp";

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
  // Wrop your root component in StrictMode to get error messages and warnings
  <React.StrictMode>
    <Router>
      <TodosApp />
    </Router>
  </React.StrictMode>
);
