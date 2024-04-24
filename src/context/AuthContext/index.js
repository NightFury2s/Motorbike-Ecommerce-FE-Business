import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (token && userInfo) {
            setIsAuthenticated(true);
            setUserRole(userInfo.role);
        }
        setIsLoading(false);
    }, []);

    const isAdmin = () => userRole === 'ADMIN';

    return (
        <AuthContext.Provider value={{ isAuthenticated, userRole, isAdmin, isLoading, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
