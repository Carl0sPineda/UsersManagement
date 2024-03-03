import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/auth.stores";

const PrivateRoutes = () => {
  const { isAuth } = useAuthStore();
  // const authOwner = !!user?.roles.includes("OWNER");
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
