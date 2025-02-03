// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);  // Use context to get login function
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("http://localhost:9000/api/auth/login", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, password })
      });

      const data = await res.json();
      if (data.token) {
        login(data.token);  // Call the login function from context
        alert(data.message);
        navigate("/mainform ")   //chat page after login
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "12px" }}>
        <h3 className="text-center mb-3">Login to ChatApp</h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-3">
          Don't have an account? <a href="/signup">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
