import React, { createContext, ReactNode, useState, useEffect } from "react";

export const UserContext = createContext()
export const UserDetailProvider = ({ children }) => {

    const [userName, setUserName] = useState(null)
    const [userMail, setUserMail] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    // Create the context value
    const value = {
        userName,
        setUserName,
        userMail,
        setUserMail,
        isLoggedIn,
        setIsLoggedIn,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};