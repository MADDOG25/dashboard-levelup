import { Navigate } from "react-router-dom";
import { useAuth } from "../useAuth";
interface PrivateRouteProps {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; //o aplicar un spinner
  }

  return user ? children : <Navigate to="/signin" />;
}
