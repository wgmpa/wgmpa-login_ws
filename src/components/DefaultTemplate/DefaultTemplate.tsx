import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface PropsTemplate {
  children: ReactNode;
}

const DefaultTemplate: React.FC<PropsTemplate> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultTemplate;
