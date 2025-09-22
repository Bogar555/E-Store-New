import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./hooks/mainLayout";
import { authProtectedRoutes, publicRoutes } from "./routes/allRoutes";
import AuthProtected from "./routes/AuthProtected";
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Routes>
        {/* Public Routes */}
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            key={idx}
            element={route.component}
          />
        ))}

        {/* Protected Routes */}
        {authProtectedRoutes.map((route, idx) => (
          <Route
            path={route.path}
            key={idx}
            element={
              <>
                <NavigationBar />
                <MainLayout>
                  <AuthProtected allowedRoles={route.allowedRoles}>
                    {route.component}
                  </AuthProtected>
                </MainLayout>
              </>
            }
          />
        ))}
      </Routes>
    </React.Fragment>
  );
}

export default App;
