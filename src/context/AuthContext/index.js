import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        // Check if token exists in localStorage
        const token = localStorage.getItem('token');
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (token && userInfo) {
            setIsAuthenticated(true);
            setUserRole(userInfo.role);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, userRole, setIsAuthenticated, setUserRole }}>
            {children}
        </AuthContext.Provider>
    );
};
