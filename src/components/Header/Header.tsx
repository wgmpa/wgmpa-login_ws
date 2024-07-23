import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";

import UserHeader from "../UserHeader/UserHeader";

/*Images*/
import Logo from "../../assets/img/wgmp.png";

/*Styles */
import styles from "./styles.module.css";
import { useContext, useState } from "react";
import Login from "../../pages/Login/Login";
import { UserContext } from "../../providers/UserProvider";

const Header = () => {
  const { user } = useContext(UserContext);
  const [click, setClick] = useState<boolean>();

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header className={`container ${styles.container_header}`}>
      <div className={styles.header_menu}>
        <img src={Logo} alt="logo" />

        <nav className={click ? styles.header_info_active : styles.header_info}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <div className={click ? styles.header_user_active : styles.header_user}>
          <UserHeader />
        </div>
        {!user && (
          <div className={styles.header_login}>
            <Login />
          </div>
        )}
      </div>
      <div className={styles.toogle_menu}>
        <FcMenu size={50} onClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;
