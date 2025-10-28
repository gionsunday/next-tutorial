"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);

  const handleLogout = () => setIsLoggedIn(false);

  const router = useRouter();

  const handleAlert = () => alert("Hello from AuthContext!");

  const handleNavigate = (path) => {
    window.location.href = path;
  }

  const handleNavigation = (path) => {
    router.push(path);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout, handleAlert }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
