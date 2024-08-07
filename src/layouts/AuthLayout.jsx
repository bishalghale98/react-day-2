import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = ({ user }) => {
  return <>{user ? <Outlet /> : <Navigate to={"/auth/Login"} />}</>;
};

export default AuthLayout;
