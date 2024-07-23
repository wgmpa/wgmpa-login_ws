import React, { ReactNode, createContext, useContext, useState } from "react";
import { INewslatter } from "../Interfaces/newslatter.Interfaces";
import { UserContext } from "./UserProvider";
import { getApi } from "../services/api";
import { useNavigate } from "react-router-dom";

interface IPostContextype {
  posts: INewslatter[] | null;
  newPosts: INewslatter | null;

  postCreate: (postData: {
    author: string;
    content: string;
    category: string;
    title: string;
  }) => void;

  setDelPost: React.Dispatch<React.SetStateAction<INewslatter[]>>;
  deletePost: (id: string) => void;
  delPosts?: INewslatter[] | null;

  setEditPost: (postData: INewslatter | null) => void;
  editPostForm: (postData: {
    author: string;
    content: string;
    category: string;
    title: string;
  }) => void;
}

const defaultValue: IPostContextype = {
  posts: [],
  newPosts: null,
  delPosts: null,
  setEditPost: () => {},
  setDelPost: () => {},
  postCreate: () => {},
  editPostForm: () => [],
  deletePost: () => {},
};

export const PostContext = createContext<IPostContextype>(defaultValue);

interface IPropsPost {
  children: ReactNode;
}

const PostProviders: React.FC<IPropsPost> = ({ children }) => {
  const { user } = useContext(UserContext);
  const [postList, setPostList] = useState<INewslatter[]>([]);
  const [editPost, setEditPost] = useState<INewslatter | null>(null);
  const [delPost, setDelPost] = useState<INewslatter[]>([]);

  const navigate = useNavigate();

  const postCreate = async (postData: {
    author: string;
    content: string;
    category: string;
    title: string;
  }) => {
    try {
      const newPost = { ...postData, author: user?.name };
      const token = localStorage.getItem("@TOKEN");
      const { data } = await getApi.post("/news", newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPostList([...postList, data]);
      navigate("/dashboards");
    } catch (error) {
      throw new Error(`Erro em ${error}`);
    }
  };

  const editPostForm = async (postData: {
    author: string;
    content: string;
    category: string;
    title: string;
  }) => {
    if (!editPost) return;

    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await getApi.patch(`/news/${editPost.id}`, postData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newPostList = postList.map((pt) => {
        if (pt.id == editPost.id) {
          return data;
        } else {
          return pt;
        }
      });
      setPostList(newPostList);
      navigate("/dashboards");
    } catch (error) {
      throw new Error(`Erro em ${error}`);
    }
  };

  const deletePost = async (id: string) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await getApi.delete(`/news/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newsPostList = postList.filter((post) => post.id !== id);
      setPostList(newsPostList);
    } catch (error) {
      throw new Error(`Erro em ${error}`);
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts: postList,
        newPosts: editPost,
        delPosts: delPost,
        postCreate,
        editPostForm,
        deletePost,
        setEditPost,
        setDelPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProviders;
