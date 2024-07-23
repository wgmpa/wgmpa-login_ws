import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

import styles from "./styles.module.css";

const UserHeader = () => {
  const { user, userLogout } = useContext(UserContext);
  return (
    <div>
      {user && (
        <div className={styles.user_header}>
          <div className={styles.info_user}>
            <span>{user?.name}</span>
            <span>{user?.email}</span>
            <button onClick={userLogout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserHeader;
