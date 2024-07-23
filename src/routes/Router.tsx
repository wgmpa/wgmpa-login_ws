import { Routes, Route } from "react-router-dom";
import Dashboards from "../pages/Dashboard/Dashboards";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import HomePage from "../pages/Homepage/HomePage";
import ProtectedRoutes from "../components/ProtectedRoutes/ProtectedRoutes";
import PostCreate from "../components/PostCreate/PostCreate";
// import EditPostForms from "../components/Forms/FormsEditPost";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route index path="/dashboards" element={<Dashboards />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/postnews" element={<PostCreate />} />
      </Route>
    </Routes>
  );
};

export default Router;
