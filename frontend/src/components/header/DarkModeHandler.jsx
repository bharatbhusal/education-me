import React, { useEffect, useState } from 'react'

import { CiDark } from 'react-icons/ci';

const DarkModeToggleButton = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('dark-mode')
    );

    const enableDarkMode = () => {
        setDarkMode(true);
        document.body.classList.add('dark');
        localStorage.setItem('dark-mode', true);
    };

    const disableDarkMode = () => {
        setDarkMode(false);
        document.body.classList.remove('dark');
        localStorage.setItem('dark-mode', false);
    };

    useEffect(() => {
        if (darkMode)
            enableDarkMode();
        else
            disableDarkMode();
    }, [darkMode]);

    const handleToggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };


    return (
        <div id="toggle-btn" className={`fas ${darkMode ? 'fa-moon' : 'fa-sun'}`} onClick={handleToggleDarkMode}>
            <CiDark />
        </div>
    )
}

export { DarkModeToggleButton }