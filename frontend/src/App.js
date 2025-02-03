import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Add Navigate for redirection
import "./App.css";
import MainForm from "./components/MainForm";
import ChatRoom from "./components/ChatRoom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/navbar";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider> {/* Wrap the app with AuthProvider */}
      <div className="container-fluid bg-light text-dark d-flex justify-content-center align-items-center " style={{ height: "100vh" }}>
        <Router>
          <Navbar />
          <Routes>
            {/* Default Route: Check if logged in, otherwise go to Signup */}
            <Route
              path="/"
              element={<ProtectedRoute redirectTo="/mainform"><Signup /></ProtectedRoute>}
            />

            {/* Other Routes */}
            <Route path="/chat/:roomName" element={<ChatRoom />} />
            <Route
              path="/login"
              element={
                <ProtectedRoute redirectTo="/mainform">
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <ProtectedRoute redirectTo="/mainform">
                  <Signup />
                </ProtectedRoute>
              }
            />
            <Route path="/mainform" element={<MainForm />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
