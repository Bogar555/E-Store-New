import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h2>Login</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => navigate("/signup")}>Go to Signup</button>
    </div>
  );
};

export default Login;
