import React, { createContext, ReactNode, useState, useEffect } from "react";

export const BackendContext = createContext()
export const BackendDetailProvider = ({ children }) => {

    const [responseStatus, setResponseStatus] = useState(null)
    const [isConnected, setIsConnected] = useState(false)

    // Create the context value
    const value = {
        responseStatus,
        setResponseStatus,
        isConnected,
        setIsConnected
    };

    return (
        <BackendContext.Provider value={value}>
            {children}
        </BackendContext.Provider>
    );
};