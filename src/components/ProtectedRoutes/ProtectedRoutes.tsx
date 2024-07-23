import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Navigate, Outlet } from "react-router-dom";
import PostProviders from "../../providers/PostProviders";
// import PostProviders from "../../providers/PostProviders";

const ProtectedRoutes: React.FC = () => {
  const { user } = useContext(UserContext);
  if (user) {
    return (
      <PostProviders>
        <Outlet />
      </PostProviders>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
