import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h2>Signup</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <select value={role} onChange={(e) => setRole(e.currentTarget.value as any)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleSignup}>Signup</button>
      <button onClick={() => navigate("/login")}>Go to Login</button>
    </div>
  );
};

export default Signup;
