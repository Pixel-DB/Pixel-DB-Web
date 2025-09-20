import { useGetUser } from "@/hooks/useUser";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useGetUser();

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }
  return children;
};

export default ProtectedRoute;
