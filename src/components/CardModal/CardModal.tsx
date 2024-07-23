import React, { useContext } from "react";
import { INewslatter } from "../../Interfaces/newslatter.Interfaces";

import styles from "./styles.module.css";
import { PostContext } from "../../providers/PostProviders";
interface PropsModal {
  latter: INewslatter;
  setIdEdit?: (id: string) => void;
}

const CardModal: React.FC<PropsModal> = ({ latter, setIdEdit }) => {
  const { setEditPost, deletePost } = useContext(PostContext);
  return (
    <div className={styles.conatiner_card}>
      <h3>{latter.title}</h3>
      <div className={styles.info}>
        <p>
          <strong>Athor:</strong> {latter.author}
        </p>
        <span>
          <strong>Category:</strong> {latter.category}
        </span>
        <span>{latter.content}</span>
      </div>
      <button
        onClick={() => {
          setEditPost(latter);
          setIdEdit ? setIdEdit(latter.id) : null;
        }}
      >
        Editar
        {/* <Link to="/editpost">Editar</Link> */}
      </button>
      <button onClick={() => deletePost(latter.id)}>Excluir</button>
    </div>
  );
};
export default CardModal;
