import React, { ReactNode, createContext, useEffect, useState } from "react";
import { INewslatter } from "../Interfaces/newslatter.Interfaces";
import { getApi } from "../services/api";

interface PropsContext {
  newslatter: INewslatter[];
}
const defaultValue: PropsContext = {
  newslatter: [],
};
const NewsContext = createContext<PropsContext>(defaultValue);

interface PropsNews {
  children: ReactNode;
}

const NewsProviders: React.FC<PropsNews> = ({ children }) => {
  const [newslatter, setNewslatter] = useState<INewslatter[]>([]);

  useEffect(() => {
    const getNewsLatter = async () => {
      const { data } = await getApi.get("/news");
      setNewslatter(data);
    };
    getNewsLatter();
  }, [newslatter]);

  return (
    <NewsContext.Provider value={{ newslatter }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProviders, NewsContext };
