import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { baseMenuConfig } from "../routes/menuConfig";
import "../style/sidebar.css";
import { useState } from "react";

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
};

export default function AppSidebar({ collapsed, setCollapsed }: SidebarProps) {
  const location = useLocation();
   const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const selectedRole = useSelector(
    (state: any) => state?.auth?.user?.data?.role
  );
// const getIcon = (iconName: string) => {
//     const IconComponent = (MuiIcons as any)[iconName];
//     if (!IconComponent) {
//       return <MuiIcons.HelpOutline fontSize="small" />;
//     }
//     return <IconComponent fontSize="small" />;
//   };
  const menuConfig = baseMenuConfig.map((section) => ({
    ...section,
    // items: section.items.filter(
    //   (item) => !item.roles || item.roles.includes(selectedRole)
    // ),
  }));
  //   const handleLogout = async () => {
  //     const result = await dispatch(logoutUser());

  //     if (logoutUser.fulfilled.match(result)) {
  //       navigate("/");
  //       dispatch(logout());
  //       toast.success(result?.payload?.message);
  //     } else {
  //       toast.success("server side error !!");
  //     }
  //   };
  return (
    <div
      style={{
        position: "fixed",
        top: "65px",
        left: 0,
        width: collapsed ? "60px" : "200px",
        height: "91vh",
        transition: "all 0.3s ease",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Sidebar
        collapsed={collapsed}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#f094efff",
            boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
            transition: "width 0.3s ease",
            color: "#000000ff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "91vh",
          },
        }}
      >
        <Menu
          closeOnClick
          menuItemStyles={{
            button: ({ active }) => ({
              color: "#000000ff",
              backgroundColor: active ? "#f7bbf1ff" : "#f094efff",
              fontWeight: active ? "bold" : undefined,
              "&:hover": {
                backgroundColor: "#f094efff",
                color: "#fff",
              },
            }),
            icon: {
              color: "#000000ff",
            },
          }}
        >
          <MenuItem icon={<FaBars />} onClick={() => setCollapsed(!collapsed)}>
            {!collapsed && "E-Store"}
          </MenuItem>

          {menuConfig.map((menu, idx) => (
            <SubMenu key={idx} 
            icon={menu.icon} 
            label={menu.label}
            >
              {menu.items.map((item, i) => (
                <MenuItem
                  key={i}
                  icon={item.icon}
                  component={<Link to={item.path} />}
                  active={location.pathname === item.path}
                >
                  {item.label}
                </MenuItem>
              ))}
            </SubMenu>
            
          ))}
        </Menu>
        <div className="sidebar-footer">
          <button className="logout-button" onClick={()=>navigate("/login")}>
            <FaSignOutAlt className="logout-icon" />
            {!collapsed && <span className="logout-text">Logout</span>}
          </button>

          {!collapsed && (
            <div className="organization-info">
              <div className="copyright">© 2025 E-Store.</div>
            </div>
          )}
        </div>
      </Sidebar>
    </div>
  );
}
