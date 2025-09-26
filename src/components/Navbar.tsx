import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import "../style/navbar.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';


export default function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const handleLogout = async () => {
    navigate("/");
  };

//   const name = localStorage.getItem("users") || "";
//   console.log("name",name)
//   const user = { name };
// console.log("user",user)
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

const name = localStorage.getItem("user");
const user = name ? JSON.parse(name) : null;
const firstLetter = user?.email ? user.email.charAt(0).toUpperCase() : "?";
console.log("firstLetter",user)

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      bg="light"
      className="nav_bar"
    >
      <Container
        fluid
        className="d-flex justify-content-between align-items-center px-4 nav_contain"
      >
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => setExpanded(false)}
          className="d-flex align-items-center"
        >
          <img src="/src/assets/logo.png" alt="Logo" className="nav_logo" />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav " className="nav_side">
          <Nav className="ms-auto d-flex align-items-center gap-3 nav_side_flex">
            <Nav.Link
              as={Link}
              to="/orders"
              className="nav_link d-flex align-items-center gap-2"
              onClick={() => setExpanded(false)}
            >
              <Inventory2OutlinedIcon fontSize="small" />
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/"
              className="nav_link"
              onClick={() => setExpanded(false)}
            >
              <HomeOutlinedIcon fontSize="small" />
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/cart"
              className="nav_link"
              onClick={() => setExpanded(false)}
            >
              <ShoppingCartOutlinedIcon fontSize="small" />
            </Nav.Link>

            <IconButton
              onClick={handleMenuOpen}
              size="small"
              sx={{ ml: 2 }}
              aria-label="user menu"
            >
              {user.email ? (
                <Avatar sx={{ bgcolor: "#e49ef4" }}>
                  {firstLetter}
                </Avatar>
              ) : (
                <Avatar />
              )}
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem>
                <Typography variant="body2">{user.email}</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleLogout();
                  handleMenuClose();
                }}
              >
                <button>
                <Typography variant="body2">Logout</Typography>
                </button>
              </MenuItem>
            </Menu>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
