import { Navigate } from "react-router-dom";
import type { JSX } from "react";

interface AuthProtectedProps {
  children: JSX.Element;
  allowedRoles?: string[]; // optional: which roles can access
}

const AuthProtected = ({ children, allowedRoles }: AuthProtectedProps) => {
  const role = localStorage.getItem("role"); // get role from login

  if (!role) return <Navigate to="/login" />; // not logged in
  if (allowedRoles && !allowedRoles.includes(role)) return <Navigate to="/login" />;

  return children;
};

export default AuthProtected;
