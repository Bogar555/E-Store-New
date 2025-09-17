import Dashboard from "../pages/dashboard";

const authProtectedRoutes = [
  {
    path: "/",
    component: <Dashboard />,
  },
//   {
//     path: "/changePassword",
//     component: <ChangePassword />,
//   },
//   { path: "/patient", component: <Patient /> },
//   { path: "/patient/:pid", component: <Patient /> },
//   { path: "/PatientTable", component: <Patientindex /> },
//   { path: "/orgList", component: <Organizationindex /> },
//   { path: "/orgRegister", component: <OrganizationRegister /> },
//   { path: "/orgRegister/:orgId", component: <OrganizationRegister /> },
//   { path: "/staffIndex", component: <StaffIndex /> },
//   { path: "/staffRegister", component: <StaffRegister /> },
//   { path: "/staffRegister/:staffId", component: <StaffRegister /> },
//   { path: "/physicianIndex", component: <PhysicianIndex /> },
//   { path: "/physicianRegister", component: <PhysicianRegister /> },
//   { path: "/physicianRegister/:phyId", component: <PhysicianRegister /> },
];
const publicRoutes = [
//   { path: "/", component: <LoginIndex /> },
//   { path: "/forgotpassword", component: <Forgotpassword /> },
];
export { authProtectedRoutes, publicRoutes };