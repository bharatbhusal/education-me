import React from 'react';
import { DarkModeToggleButton } from './header/DarkModeHandler';
import { UserProfile, UserProfileButton } from './header/UserProfileHandler';
import { SearchButton, SearchBox } from './header/SearchButtonHandler';
import { MenuButton } from './header/MenuButtonHandler'
import { NavLink } from 'react-router-dom';
const Header = () => {


    return (
        <header className="header">
            <section className="flex">

                <UserProfile />

                <div className="icons">
                    <MenuButton />
                    <SearchButton />
                    <UserProfileButton />
                    <DarkModeToggleButton />
                </div>
                <SearchBox />
                <NavLink to={'/'} className="logo">Educate Me.
                </NavLink>
            </section>
        </header>
    );
};

export default Header;
