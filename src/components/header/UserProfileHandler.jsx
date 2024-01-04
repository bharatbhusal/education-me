import React from 'react'
import { CiUser, CiDark } from 'react-icons/ci';
const UserProfile = () => {
    return (

        <div className="profile">
            <img src="images/pic-1.jpg" className="image" alt="" />
            <h3 className="name">shaikh anas</h3>
            <p className="role">student</p>
            <a href="profile.html" className="btn">
                View Profile
            </a>
            <div className="flex-btn">
                <a href="login.html" className="option-btn">
                    Login
                </a>
                <a href="register.html" className="option-btn">
                    Register
                </a>
            </div>
        </div>
    )
}

const UserProfileButton = () => {
    const handleUserButtonClick = () => {
        const profile = document.querySelector('.header .flex .profile');
        const search = document.querySelector('.header .flex .search-form');
        profile.classList.toggle('active');
        search.classList.remove('active');
    };

    return (
        <div id="user-btn" className="fas fa-user" onClick={handleUserButtonClick}>
            <CiUser />
        </div>
    )
}

export { UserProfile, UserProfileButton }