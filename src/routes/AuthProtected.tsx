import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { JSX } from "react";

const AuthProtected = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: any) => state.auth.user);
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export default AuthProtected;