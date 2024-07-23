import { useContext, useState } from "react";
import CardList from "../../components/CardList/CardList";
import { NewsContext } from "../../providers/NewsProviders";
import { INewslatter } from "../../Interfaces/newslatter.Interfaces";

import styles from "./styles.module.css";
import CardModal from "../../components/CardModal/CardModal";
import { useNavigate } from "react-router-dom";
import EditPostForms from "../../components/Forms/FormsEditPost";

const Dashboards = () => {
  const { newslatter } = useContext(NewsContext);
  const [idModal, setIdModal] = useState<string | null>(null);
  const [idEdit, setIdEdit] = useState<string | null>(null);

  const navigate = useNavigate();

  const openModal = (id: string) => {
    setIdModal(id);
  };

  const openEdit = (id: string) => {
    setIdEdit(id);
  };

  const createNewLatters = () => {
    navigate("/postnews");
  };

  return (
    <div className={styles.container}>
      <button onClick={createNewLatters}>New</button>
      <div className={styles.container_dashboard}>
        <ul className={styles.container_cardlist}>
          {newslatter.length > 0 &&
            newslatter.map((nt: INewslatter) => (
              <CardList key={nt.id} newslatter={nt} openModal={openModal} />
            ))}
        </ul>
        <div className={styles.container_modal}>
          <div>
            {newslatter.length > 0 &&
              newslatter.map((latter) => {
                if (latter.id === idModal) {
                  return (
                    <CardModal
                      key={latter.id}
                      latter={latter}
                      setIdEdit={openEdit}
                    />
                  );
                }
              })}
          </div>
          {idEdit ? <EditPostForms openModal={setIdEdit} /> : <></>}
        </div>
      </div>
    </div>
  );
};
export default Dashboards;
