import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/auth.stores";

const PrivateRoutes = () => {
  const { user } = useAuthStore();
  // const authOwner = !!user?.roles.includes("OWNER");
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
