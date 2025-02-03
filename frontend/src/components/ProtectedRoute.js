import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext"; // Import the AuthContext

const ProtectedRoute = ({ children, redirectTo }) => {
  const { isLoggedIn } = useContext(AuthContext); // Access the login state from context

  if (isLoggedIn) {
    // If user is logged in, redirect them to the desired page (mainform)
    return <Navigate to={redirectTo} />;
  }

  return children; // If not logged in, render the protected page
};

export default ProtectedRoute;
