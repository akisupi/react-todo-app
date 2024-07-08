import React from "react";

// import components to use them in another component or file
import TodosAppHeader from "../components/TodosAppHeader";
import TodosAppBody from "../components/TodosAppBody";

const Home = () => {
  return (
    <>
      <div className="todos">
        <TodosAppHeader>
          <h1>Todos</h1>
          <p>Find your tasks to complete...</p>
        </TodosAppHeader>
        <TodosAppBody />
      </div>
    </>
  );
};

export default Home;
