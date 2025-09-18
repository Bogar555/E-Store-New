import React from 'react';
import { Navigate } from 'react-router-dom';

interface AuthProtectedProps {
  children?: React.ReactNode;
}

const AuthProtected = ({ children }: AuthProtectedProps) => {
  if (!sessionStorage.getItem('isLoggedIn')) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export default AuthProtected;
