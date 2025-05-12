// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Main from "./components/Main";
// import PrivateRoute from "./components/PrivateRoute"; // Adjusted the path
// import { AuthProvider } from "./context/AuthContext";

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Protected Route */}
//           <Route path="/main" element={<PrivateRoute element={<Main />} />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Main from "./components/Main";
// import PrivateRoute from "./components/PrivateRoute";
// import { AuthProvider } from "./context/AuthContext";

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Protected Route */}
//           <Route path="/main" element={<PrivateRoute element={<Main />} />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Route */}
          <Route path="/main" element={<PrivateRoute element={<Main />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
