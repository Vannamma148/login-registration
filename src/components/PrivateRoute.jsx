// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const PrivateRoute = ({ element }) => {
//   const { user, loading } = useAuth();

//   console.log("PrivateRoute: User state is", user);
//   console.log("PrivateRoute: Loading state is", loading);

//   // While checking the auth state, show a loading indicator
//   if (loading) {
//     console.log("PrivateRoute: Checking auth state...");
//     return <div>Loading...</div>; // Add a simple loader
//   }

//   // If not logged in, redirect to login page
//   if (!user) {
//     console.log("PrivateRoute: No user found, redirecting to login...");
//     return <Navigate to="/" replace />;
//   }

//   // User is authenticated, render the protected route
//   console.log("PrivateRoute: User is authenticated, rendering protected route.");
//   return element;
// };

// export default PrivateRoute;
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ element }) => {
  const { user, loading } = useAuth();

  if (loading) {
    console.log("PrivateRoute: Checking auth state...");
    return null; // You can also add a loading spinner here
  }

  if (!user) {
    console.log("PrivateRoute: No user found, redirecting to login...");
    return <Navigate to="/" replace />;
  }

  console.log("PrivateRoute: User is authenticated, rendering protected route.");
  return element;
};

export default PrivateRoute;
