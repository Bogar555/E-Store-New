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

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
};

export default function AppSidebar({ collapsed, setCollapsed }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const selectedRole = useSelector(
    (state: any) => state?.auth?.user?.data?.role
  );

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
            backgroundColor: "#2a509a",
            boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
            transition: "width 0.3s ease",
            color: "#fff",
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
              color: "#fff",
              backgroundColor: active ? "#d1d9e9" : "#2a509a",
              fontWeight: active ? "bold" : undefined,
              "&:hover": {
                backgroundColor: "#093998ff",
                color: "#fff",
              },
            }),
            icon: {
              color: "#fff",
            },
          }}
        >
          <MenuItem icon={<FaBars />} onClick={() => setCollapsed(!collapsed)}>
            {!collapsed && "E-Store"}
          </MenuItem>

          {menuConfig.map((menu, idx) => (
            <SubMenu key={idx} icon={menu.icon} label={menu.label}>
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
          <button className="logout-button" onClick={undefined}>
            <FaSignOutAlt className="logout-icon" />
            {!collapsed && <span className="logout-text">Logout</span>}
          </button>

          {!collapsed && (
            <div className="organization-info">
              <div className="copyright">© 2025 Mettler Health Tech Inc.</div>
            </div>
          )}
        </div>
      </Sidebar>
    </div>
  );
}
