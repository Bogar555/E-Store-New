import React from 'react';
import { Route, Routes } from "react-router-dom";
import MainLayout from "./hooks/mainLayout";
import { authProtectedRoutes } from "./routes/allRoutes";
import AuthProtected from "./routes/AuthProtected";
import 'bootstrap/dist/css/bootstrap.min.css';

 function App() {

  return (
   <React.Fragment>
      <Routes>
 
        {/* {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            key={idx}
            element={
              <>
                {route.component}
              </>
            }
          />
        ))} */}
 
        {authProtectedRoutes.map((route, idx) => (
          <Route
            path={route.path}
            key={idx}
            element={
              <MainLayout>
                <AuthProtected>{route.component}</AuthProtected>
              </MainLayout>
            }
          />
        ))}

 
      </Routes>

      {/* <ToastContainer theme='dark' autoClose={1000}/> */}
    </React.Fragment>
  // <div><h1>Hello</h1></div>
  )
}
 export default App;