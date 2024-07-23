import React, { useContext, useState } from "react";
import CustomInput from "../InputCostumer/CustomInput ";

import styles from "./styles.module.css";
import { PostContext } from "../../providers/PostProviders";
interface PropsEdit {
  openModal?: (id: string) => void | undefined;
}
const EditPostForms: React.FC<PropsEdit> = ({ openModal }) => {
  const [title, setTile] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { editPostForm } = useContext(PostContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editPostForm({ title, author, category, content });
    openModal && openModal("");
  };

  return (
    <form className={styles.container_form} onSubmit={handleSubmit}>
      <h2>Edit your NewsLatter</h2>
      <CustomInput
        type="text"
        value={title}
        required
        placeholder="Title"
        onChange={(e) => setTile(e.target.value)}
      />

      <CustomInput
        type="text"
        value={author}
        required
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <CustomInput
        type="text"
        value={category}
        required
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <textarea
        value={content}
        maxLength={2000}
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />
      <button>Postar</button>
    </form>
  );
};

export default EditPostForms;
