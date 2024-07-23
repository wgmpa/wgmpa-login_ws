import { ReactNode, createContext, useEffect, useState } from "react";
import { getApi } from "../services/api";
import { useNavigate } from "react-router-dom";
import { IUSers } from "../Interfaces/user.interface";
import { toast } from "react-toastify";

interface UserContextType {
  users: IUSers[] | null;
  user?: Partial<IUSers> | null;
  loginUser: (formData: { email: string; password: string }) => void;
  userLogout: () => void;
  registerUser: (formData: {
    name: string;
    email: string;
    job: string;
    password: string;
  }) => void;
}

const defaultValue: UserContextType = {
  users: [],
  user: null,
  userLogout: () => {},
  loginUser: () => {},
  registerUser: () => {},
};

const UserContext = createContext<UserContextType>(defaultValue);

interface IUserProps {
  children: ReactNode;
}

const UserProvider: React.FC<IUserProps> = ({ children }) => {
  const [users, setUsers] = useState<IUSers[] | null>([]);
  const [user, setUser] = useState<Partial<IUSers> | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async () => {
      const token = localStorage.getItem("@TOKEN");
      const userId = localStorage.getItem("@USERID");

      if (token && userId) {
        try {
          const { data } = await getApi.get(`/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const { password, ...userData } = data;
          setUser(userData);
          navigate("/dashboards");
        } catch (error) {
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("@USERID");
        }
      }
    };
    loadUsers();
  }, []);

  const loginUser = async (formData: { email: string; password: string }) => {
    try {
      console.log("Iniciando autenticação...");
      const { data } = await getApi.post("/login", formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", data.user.id);
      console.log("meio da autenticação...");
      setUsers(data);
      console.log("chegou no redirecionamento...");
      navigate("/dashboards");
      console.log("fim do redirecionamento...");
    } catch (error) {
      toast.error("Email ou senha incorretos");
      throw new Error(`Error ${error}`);
    }
  };

  const registerUser = async (formData: {
    name: string;
    email: string;
    job: string;
    password: string;
  }) => {
    try {
      await getApi.post("/users", formData);
      toast.success(
        "Registrado com sucesso, redirecionando para a tela de login"
      );
      setTimeout(() => {
        navigate("/");
      }, 6000);
    } catch (error) {
      toast.error("Falha ao cadastrar");
      throw new Error("Error");
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUsers(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ users, user, loginUser, registerUser, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export { UserContext, UserProvider };
