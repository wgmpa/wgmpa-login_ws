import Login from "../Login/Login";
import styles from "./styles.module.css";

const HomePage = () => {
  return (
    <div className={styles.container_homepage}>
      <div className={styles.homepage}>
        <div className={styles.container_login}>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
