// // src/components/Main.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth"; // Import the signOut function
// import { auth } from "../firebaseConfig"; // Import the auth instance

// const Main = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth); // Sign out the user from Firebase
//       navigate("/"); // Redirect to login page
//     } catch (error) {
//       console.error("Error logging out: ", error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-md w-80 text-center">
//         <h2 className="text-2xl mb-4">Welcome, {auth.currentUser?.email}</h2>
//         <p className="mb-4">You are logged in successfully.</p>
//         <button
//           onClick={handleLogout}
//           className="w-full bg-red-500 text-white p-2 rounded"
//         >
//           Log Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Main;


import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/"); // Redirect to login page after logout
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl mb-4">Welcome, {user?.email}</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Main;
