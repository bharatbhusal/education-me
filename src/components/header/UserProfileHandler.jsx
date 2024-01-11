import React from 'react'
import { CiUser } from 'react-icons/ci';
import Pic1 from '../../images/pic-1.jpg'
import { NavLink } from 'react-router-dom';

const handleUserButtonClick = () => {
    const profile = document.querySelector('.header .flex .profile');
    const search = document.querySelector('.header .flex .search-form');
    profile.classList.toggle('active');
    search.classList.remove('active');
};
const UserProfile = () => {

    return (

        <div className="profile">
            <img src={Pic1} className="image" alt="" />
            <h3 className="name">shaikh anas</h3>
            <p className="role">student</p>

            <NavLink to={'/profile'} className="btn" onClick={handleUserButtonClick} >View Profile
            </NavLink>
            <div className="flex-btn">

                <NavLink to={'/login'} onClick={handleUserButtonClick} className="option-btn">Login
                </NavLink>

                <NavLink to={'/register'} className="option-btn" onClick={handleUserButtonClick} >Register
                </NavLink>
            </div>
        </div>
    )
}

const UserProfileButton = () => {

    return (
        <div id="user-btn" className="fas fa-user" onClick={handleUserButtonClick}>
            <CiUser />
        </div>
    )
}

export { UserProfile, UserProfileButton }