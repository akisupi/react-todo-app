import { NavLink, Outlet } from "react-router-dom";
import TodosAppHeader from "../components/TodosAppHeader";

const About = () => {
  return (
    <>
      <TodosAppHeader>
        <h1>About</h1>
      </TodosAppHeader>
      <div className="about">
        <ul className="about_list">
          <li>
            <NavLink to="about-app">About app</NavLink>
          </li>
          <li>
            <NavLink to="about-developer">About developer</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
export default About;
