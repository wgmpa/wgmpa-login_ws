import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import UserProvider from "./providers/UserProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
