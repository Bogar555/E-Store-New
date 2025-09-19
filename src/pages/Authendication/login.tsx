import {  Box, Button, Paper, TextField, Typography} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginSuccess } from "../../slice/auth/authSlice";
import { useDispatch } from "react-redux";

type UserRecord = {
  email: string;
  password: string;
  role: "admin" | "customer";
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({  password, remember });
  };

  const dispatch = useDispatch();

const handleLogin = () => {
  const users: UserRecord[] = JSON.parse(localStorage.getItem("users") || "[]");
  const found = users.find((u) => u.email === email && u.password === password);

  if (!found) {
    alert("Invalid credentials");
    return;
  }

  dispatch(loginSuccess(found));
  navigate(found.role === "admin" ? "/admin" : "/customer");
};

  return (
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
