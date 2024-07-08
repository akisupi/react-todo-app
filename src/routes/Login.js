import { useState } from "react";
import styles from "../styles/Login.module.css";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import TodosAppHeader from "../components/TodosAppHeader";

const Login = () => {
  const [username, setUsername] = useState("");
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    login(username);
    navigate("/", { replace: true });
    navigate(from, { replace: true });
  };

  return (
    <div>
      <TodosAppHeader>
        <h1>Login</h1>
      </TodosAppHeader>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(() => e.target.value)}
          />
          <br />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
