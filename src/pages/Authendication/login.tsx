import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
  let users = [];

  try {
    const saved = localStorage.getItem("users");
    users = saved ? JSON.parse(saved) : [];
    if (!Array.isArray(users)) users = [];
  } catch (err) {
    users = [];
  }

  const user = users.find(
    (u: any) => u.email === email && u.password === password
  );

  if (!user) {
    alert("Invalid credentials");
    return;
  }

  localStorage.setItem("role", user.role);
  navigate(user.role === "admin" ? "/admin" : "/user");
};


  return (
    // <div>
    //   <h2>Login</h2>
    //   <input
    //     placeholder="Email"
    //     value={email}
    //     onChange={(e) => setEmail(e.currentTarget.value)}
    //   />
    //   <input
    //     placeholder="Password"
    //     type="password"
    //     value={password}
    //     onChange={(e) => setPassword(e.currentTarget.value)}
    //   />
    //   <button onClick={handleLogin}>Login</button>
    //   <button onClick={() => navigate("/signup")}>Go to Signup</button>
    // </div>
     <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          sx={{ backgroundColor: "#f5f5f5" }}
        >
          <Paper elevation={3} sx={{ padding: 4, width: 300 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Login
            </Typography>
    
            <TextField
              fullWidth
              name="email"
              label="Email"
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
              margin="normal"
              variant="outlined"
            />
    
            <TextField
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password} 
              onChange={e => setPassword(e.currentTarget.value)}
              margin="normal"
              variant="outlined"
            />
    
            <Box mt={2} display="flex" justifyContent="space-between">
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                sx={{ flex: 1, mr: 1 }}
              >
                Login
              </Button>
    
              <Button
                variant="outlined"
                color="secondary"
                component={Link}
                to="/signup"
                sx={{ flex: 1, ml: 1 }}
              >
                Register
              </Button>
            </Box>
          </Paper>
        </Box>
  );
};

export default Login;
