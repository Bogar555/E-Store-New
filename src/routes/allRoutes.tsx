import Dashboard from "../pages/dashboard";

const authProtectedRoutes = [
  {
    path: "/",
    component: <Dashboard />,
  },
];

const publicRoutes: any[] = [
    {
    path: "/",
    component: <Dashboard />,
  },
]; // can add login/signup later

export { authProtectedRoutes, publicRoutes };
