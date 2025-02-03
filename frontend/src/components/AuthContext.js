// AuthContext.js
import React, { createContext, useState, useEffect } from "react";

// Create context for authentication
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in (if token exists in localStorage)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Function to handle login
  const login = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
