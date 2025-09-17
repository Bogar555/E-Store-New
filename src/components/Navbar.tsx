import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar } from "react-bootstrap";
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export default function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//   const handleLogout = async () => {
//     setExpanded(false);
//     const result = await dispatch(logoutUser());

//     if (logoutUser.fulfilled.match(result)) {
//       navigate("/");
//       dispatch(logout());
//       toast.success(result?.payload?.message);
//     } else {
//       toast.success("server side error !!");
//     }
//     navigate("/");
//   };

  const handleChangePassword = () => {
    setExpanded(false);
    navigate("/changePassword");
  };

  const selectedRole = useSelector((state: any) => state?.auth?.user?.data);
  const user = {
    name: selectedRole?.username || "",
    role: selectedRole?.role || "",
    profilePic: "",
  };
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Navbar expand="lg" fixed="top" expanded={expanded} className="nav_bar">
      <Container
      className="nav_container">
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => setExpanded(false)}
          className="d-flex align-items-center">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          {/* E-Store */}
        </Navbar.Brand>

        <IconButton onClick={handleMenuOpen} size="small" sx={{ ml: 2 }}>
          {user.profilePic ? (
            <Avatar src={user.profilePic} alt={user.name} />
          ) : (
            <Avatar sx={{ bgcolor: deepOrange[500] }}>
              {user.name.charAt(0)}
            </Avatar>
          )}
        </IconButton>

        {/* <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}>
          <MenuItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center" }}>
              <AccountCircleIcon fontSize="small" sx={{ mr: 1 }} />
              {user.name} / {user.role}
            </Typography>
          </MenuItem>
          {user?.role !== "superadmin" && (
            <MenuItem onClick={handleChangePassword}>
              <LockResetIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center" }}>
                Change Password
              </Typography>
            </MenuItem>
          )}

          <MenuItem onClick={handleLogout}>
            {" "}
            <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center" }}>
              Logout
            </Typography>
          </MenuItem>
        </Menu> */}
      </Container>
    </Navbar>
  );
}
