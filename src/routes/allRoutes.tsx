import { AdminUpload } from "../pages/Authendication/AdminPage";
import Login from "../pages/Authendication/login";
import Signup from "../pages/Authendication/Signup";
import Dashboard from "../pages/dashboard";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  // { path: "/admin", component: <AdminUpload /> },
];
const publicRoutes = [
  { path: "/", component: <Login /> },
  { path: "/signup", component: <Signup /> },
];

export { authProtectedRoutes, publicRoutes };
