import React, { useState, useEffect } from 'react';
import {
  createContext,
  useContextSelector,
} from "use-context-selector";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:3001/checkAuth',{
            method: 'GET',
            headers: { 
              'Authorization': `Bearer ${localStorage.getItem('token')}` // Add authorization header
            }});
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        }
      } catch (error) {
        console.error('Failed to check auth', error);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (selector) => useContextSelector(AuthContext, selector);

export { AuthContext, AuthProvider , useAuth};