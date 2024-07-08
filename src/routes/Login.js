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
      <div
        className={styles.formWrapper}
        style={{ textAlign: "center", padding: "40px" }}
      >
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          style={{
            padding: "30px 20px",
            texmargin: "0 auto",
            textAlign: "center",
          }}
        >
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(() => e.target.value)}
            style={{
              padding: "10px",
              fontSize: "1.5rem",
              marginBottom: "10px",
              width: "300px",
            }}
          />
          <br />
          <button
            style={{
              fontSize: "2rem",
              backgroundColor: "grey",
              width: "300px",
              padding: "5px",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
