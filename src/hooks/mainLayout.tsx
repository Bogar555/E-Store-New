import { useEffect, useState } from "react";
import useMediaQuery from "./mediaQuery";
import NavigationBar from "../components/Navbar";
import AppSidebar from "../components/sidebar";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

 
  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [isMobile]);

  return (
    <div style={{ display: "flex" }}>
  
      <AppSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

 
      <div
        style={{
          marginLeft: collapsed ? "80px" : "250px",
          flex: 1,
          paddingTop: "10px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <NavigationBar />
        <main className="app-content">{children}</main>
        {/* <BackToTop /> */}
      </div>
    </div>
  );
};

export default MainLayout;
