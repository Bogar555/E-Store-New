import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./hooks/mainLayout";
import { authProtectedRoutes, publicRoutes } from "./routes/allRoutes";
import AuthProtected from "./routes/AuthProtected";
import NavigationBar from "./components/Navbar";
import { ProductProvider } from "./components/context/ProductContext";
import { UserProvider } from "./components/context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Routes>
            {publicRoutes.map((route, idx) => (
              <Route
                path={route.path}
                key={idx}
                element={<>{route.component}</>}
              />
            ))}{" "}
            {authProtectedRoutes.map((route, idx) => (
              <Route
                path={route.path}
                key={idx}
                element={
                  <>
                    {" "}
                    <NavigationBar />{" "}
                    <MainLayout>
                      {" "}
                      <AuthProtected>{route.component}</AuthProtected>{" "}
                    </MainLayout>{" "}
                  </>
                }
              />
            ))}
      </Routes>

      {/* <ToastContainer theme='dark' autoClose={1000}/> */}
    </React.Fragment>
    // <div><h1>Hello</h1></div>
  );
}
export default App;
