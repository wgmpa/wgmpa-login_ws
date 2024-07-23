import React from "react";
import { INewslatter } from "../../Interfaces/newslatter.Interfaces";

import styles from "./styles.module.css";

interface PropsCard {
  newslatter: INewslatter;
  openModal?: (id: string) => void | undefined;
}

const CardList: React.FC<PropsCard> = ({ newslatter, openModal }) => {
  return (
    <li className={styles.conatiner_card}>
      <h3>{newslatter.title}</h3>
      <div className={styles.info}>
        <h4>
          <strong>Athor:</strong> {newslatter.author}
        </h4>
        <span>
          <strong>Category:</strong> {newslatter.category}
        </span>
        <p>{newslatter.content}</p>
      </div>
      <button onClick={() => openModal && openModal(newslatter.id)}>
        Datails
      </button>
    </li>
  );
};

export default CardList;
