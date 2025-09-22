import { Dashboard } from "@mui/icons-material";
import AdminPage from "../pages/Authendication/AdminPage";
import Login from "../pages/Authendication/login";
import Signup from "../pages/Authendication/Signup";

const authProtectedRoutes = [
  { path: "/admin", component: <AdminPage />, allowedRoles: ["admin"] },
  { path: "/user", component: <Dashboard />, allowedRoles: ["user"] },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <Signup /> },
];

export { authProtectedRoutes, publicRoutes };
