import React, { useContext, useState } from "react";
import CustomInput from "../../components/InputCostumer/CustomInput ";

import styles from "./styles.module.css";
import { UserContext } from "../../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ToastfyNoti from "../../components/Toastfy/Toastfy";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const { registerUser } = useContext(UserContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerUser({ name, password, email, job });
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className={styles.container_register}>
      <ToastfyNoti />
      <form className={styles.container_form} onSubmit={handleSubmit}>
        <CustomInput
          type="text"
          value={name}
          placeholder="Digite seu Nome"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <CustomInput
          type="text"
          value={job}
          placeholder="Digite seu Emprego"
          required
          onChange={(e) => setJob(e.target.value)}
        />
        <CustomInput
          type="email"
          value={email}
          required
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <CustomInput
          type="password"
          value={password}
          placeholder="Digite sua senha"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit"> registrar</button>
      </form>
      <button onClick={handleLogin}>Voltar</button>
    </div>
  );
};

export default Register;
