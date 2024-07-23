import React, { useContext, useState } from "react";
import CustomInput from "../../components/InputCostumer/CustomInput ";
import styles from "./styles.module.css";
import { UserContext } from "../../providers/UserProvider";
import { Link } from "react-router-dom";
import ToastfyNoti from "../../components/Toastfy/Toastfy";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { loginUser } = useContext(UserContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userLogin = {
      email,
      password,
    };
    loginUser(userLogin);
  };

  return (
    <div className={styles.container_login}>
      <form className={styles.container_form} onSubmit={handleSubmit}>
        <CustomInput
          type="email"
          value={email}
          placeholder="Digite seu email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomInput
          type="password"
          value={password}
          required
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>login</button>
      </form>
      <span className={styles.register}>
        Não tem cadastro, <Link to="/register">cadastre-se</Link>
      </span>
      <ToastfyNoti />
    </div>
    // cadastresse
  );
};

export default Login;
