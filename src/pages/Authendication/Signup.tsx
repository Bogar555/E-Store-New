import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Divider,
} from "@mui/material";

type UserRecord = {
  username: string;
  email: string;
  password: string;
};

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"admin" | "customer">("customer");

  const [selected, setSelected] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setRole(e.target.value as "admin" | "customer");
//   };

  const handleRegister = () => {
    const users: UserRecord[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered! Now you can login.");
  };

  return (
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
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
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
              onChange={(e) => setRole(e.currentTarget.value as "admin" | "customer")}
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>

            <Button
              type="submit"
              onClick={handleRegister}
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
              <Button component={Link} to="/" variant="text" color="primary">
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
