import React, { useEffect, useState } from 'react';
import { DarkModeToggleButton } from './header/DarkModeHandler';
import { UserProfile, UserProfileButton } from './header/UserProfileHandler';
import { SearchButton, SearchBox } from './header/SearchButtonHandler';
import { MenuButton } from './header/MenuButtonHandler'
import App from '../App';
const Header = () => {


    return (
        <header className="header">
            <section className="flex">
                <a href="home.html" className="logo">
                    Educate Me
                </a>
                <SearchBox />

                <div className="icons">
                    <MenuButton />
                    <SearchButton />
                    <UserProfileButton />
                    <DarkModeToggleButton />
                </div>
                <UserProfile />
            </section>
        </header>
    );
};

export default Header;
