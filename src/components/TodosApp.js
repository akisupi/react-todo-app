import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";


import Home from "../routes/Home";
import About from "../routes/About";
import Login from "../routes/Login";
import Profile from "../routes/Profile";
import NotMatch from "../routes/NotMatch";
import Layout from "./Layout";
import SinglePage from "../routes/SinglePage";

const TodosApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          {/* let's do dynamic routing */}
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<ProtectedRoute>
          <Profile />
        </ProtectedRoute>} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};
export default TodosApp;
