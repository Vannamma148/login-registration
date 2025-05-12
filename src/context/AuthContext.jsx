// import React, { useContext, useState, useEffect } from "react";
// import { auth } from "../firebaseConfig";
// import { onAuthStateChanged } from "firebase/auth";

// const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // Default to true to handle initial auth check

//   useEffect(() => {
//     console.log("AuthContext: Initializing auth listener...");

//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       console.log("Auth state changed:", user);
//       setUser(user);
//       setLoading(false); // Update loading state after auth state is determined
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("AuthContext: Initializing auth listener...");

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user);
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Logout function
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      setUser(null); // Reset user state to null after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
