// src/main.jsx
import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import { StrictMode } from "react";


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
