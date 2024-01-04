import React from 'react'
import { IoMdMenu, IoMdSearch } from 'react-icons/io';

const MenuButton = () => {
    const handleMenuButtonClick = () => {
        const sideBar = document.querySelector('.side-bar');
        const body = document.body;
        sideBar.classList.toggle('active');
        body.classList.toggle('active');
    };
    return (
        <div id="menu-btn" className="fas fa-bars" onClick={handleMenuButtonClick}>
            <IoMdMenu />
        </div>

    )
}

export { MenuButton }