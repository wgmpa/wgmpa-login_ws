import React, { useContext, useState } from "react";
import CustomInput from "../InputCostumer/CustomInput ";

import styles from "./styles.module.css";
import { PostContext } from "../../providers/PostProviders";

const FormsPost = () => {
  const [title, setTile] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { postCreate } = useContext(PostContext);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postCreate({ title, author, category, content });
  };

  return (
    <form className={styles.container_form} onSubmit={handleSubmit}>
      <h2>Post your NewsLatter</h2>
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

export default FormsPost;
