import TodosAppHeader from "../components/TodosAppHeader";
import { useAuthContext } from "../context/AuthContext";
import styles from "../styles/Profile.module.css";

const Profile = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <TodosAppHeader>
        <h1>Profile</h1>
      </TodosAppHeader>
      <div className={styles.profile}>
        <h2 style={{ textTransform: "capitalize" }}>Hello, {user}</h2>
        <p>welcoe to your profile</p>
      </div>
    </div>
  );
};
export default Profile;
