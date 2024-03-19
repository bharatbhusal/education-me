import React, { createContext, ReactNode, useState, useEffect } from "react";

export const UserContext = createContext()
export const UserDetailProvider = ({ children }) => {

    const [userName, setUserName] = useState("user1")
    const [userMail, setUserMail] = useState("user1@gmail.com")


    // Create the context value
    const value = {
        userName,
        setUserName,
        userMail,
        setUserMail,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};