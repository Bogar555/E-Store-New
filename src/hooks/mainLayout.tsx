import { useEffect, useState } from "react";
import useMediaQuery from "./mediaQuery";
import NavigationBar from "../components/Navbar";
import AppSidebar from "../components/sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setCollapsed(isMobile); // collapse if mobile, expand if desktop
  }, [isMobile]);

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <AppSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main content */}
      <div
        style={{
          marginLeft: !isMobile ? (collapsed ? "80px" : "250px") : "0px",
          flex: 1,
          paddingTop: "10px",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <NavigationBar />
        <main className="app-content" style={{ padding: "1rem" }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
