import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const api = "http://localhost:9000/api/auth/signup";

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Form submitted with:", { name, password });  // Log the userName and password
  
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password })  // Send userName as key
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Sign-up successful! Please log in.");
        setName("");  // Clear userName
        setPassword("");  // Clear password
        navigate("/login");
      } else {
        alert(data.message || "User already exists! Please log in.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h1 className="text-center mb-4">Create User</h1>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>

            <p className="text-center mt-3">
              Already have an account? <a href="/login">Log in</a>
            </p>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
