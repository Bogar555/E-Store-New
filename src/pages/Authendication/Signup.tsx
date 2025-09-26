import { Box, Button, Container, Divider, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "user">("user");
  const navigate = useNavigate();

  const handleSignup = () => {
    let users = [];

    try {
      const saved = localStorage.getItem("users");
      users = saved ? JSON.parse(saved) : [];
      if (!Array.isArray(users)) users = []; // Ensure it’s an array
    } catch (err) {
      users = [];
    }

    // Check if user already exists
    if (users.some((u: any) => u.email === email)) {
      alert("User already exists");
      return;
    }

    const newUser = { name, email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful");
  };

  return (
    // <div>
    //   <h2>Signup</h2>
    //   <input
    //     placeholder="Name"
    //     value={name}
    //     onChange={(e) => setName(e.currentTarget.value)}
    //   />
    //   <input
    //     placeholder="Email"
    //     value={email}
    //     onChange={(e) => setEmail(e.currentTarget.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.currentTarget.value)}
    //   />
    //   <select value={role} onChange={(e) => setRole(e.currentTarget.value as any)}>
    //     <option value="user">User</option>
    //     <option value="admin">Admin</option>
    //   </select>
    //   <button onClick={handleSignup}>Signup</button>
    //   <button onClick={() => navigate("/")}>Go to Login</button>
    // </div>
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 4,
        }}
      >
        <Paper elevation={6} sx={{ p: 4, width: "100%", borderRadius: 2 }}>
          <Typography component="h1" variant="h4" gutterBottom color="primary">
            Create Account
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Join us today! Fill in your details to get started.
          </Typography>
          <Box component="form" noValidate>
            <TextField
              margin="normal"
              fullWidth
              label="Full Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <select
              value={role}
              onChange={(e) => setRole(e.currentTarget.value as any)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            <Button
              type="submit"
              onClick={handleSignup}
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>

            <Divider sx={{ my: 2 }}>
              <Typography variant="body2" color="textSecondary">
                OR
              </Typography>
            </Divider>

            <Box textAlign="center">
              <Typography variant="body2" display="inline">
                Already have an account?{" "}
              </Typography>
              <Button
                component={Link}
                to="/"
                variant="text"
                color="primary"
              >
                Login
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Signup;
