import { Outlet } from "react-router-dom";
import TodosAppNavbar from "./TodosAppNavbar";
import { AuthProvider } from "../context/AuthContext";

const Layout = () => {
  return (
    <div className="wrapper">
      <AuthProvider>
        <TodosAppNavbar />
        <Outlet />
      </AuthProvider>
    </div>
  );
};
export default Layout;
