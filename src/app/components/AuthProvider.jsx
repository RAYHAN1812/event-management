"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the Context
const AuthContext = createContext();

// 2. Create the Provider Component
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on initial render
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('eventpulse_user');
      if (storedUser) setUser(JSON.parse(storedUser));
    } catch (error) {
      console.error("Error loading user from localStorage:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Core Auth Functions
  const login = (userData) => {
    localStorage.setItem('eventpulse_user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('eventpulse_user');
    setUser(null);
  };

  const contextValue = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
  };

  if (loading) {
    return <div className="text-center p-20 text-indigo-600 font-semibold">Loading session...</div>;
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Custom Hook
export function useAuth() {
  return useContext(AuthContext);
}
