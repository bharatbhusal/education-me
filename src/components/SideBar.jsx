import React from 'react'
import Pic1 from "../images/pic-1.jpg"
import App from "../App.jsx"
const SideBar = () => {

    const handleCloseButtonClick = () => {
        const sideBar = document.querySelector('.side-bar');
        const body = document.body;
        sideBar.classList.remove('active');
        body.classList.remove('active');
    };


    return (
        <div className="side-bar">

            <div id="close-btn">
                <i className="fas fa-times"></i>
            </div>

            <div className="profile">
                <img src={Pic1} className="image" alt="" />
                <h3 className="name">shaikh anas</h3>
                <p className="role">student</p>
                <a href="profile.html" className="btn">view profile</a>
            </div>

            <nav className="navbar">
                <a href={<App />}><i className="fas fa-home"></i><span>home</span></a>
                <a href="about.html"><i className="fas fa-question"></i><span>about</span></a>
                <a href="courses.html"><i className="fas fa-graduation-cap"></i><span>courses</span></a>
                <a href="teachers.html"><i className="fas fa-chalkboard-user"></i><span>teachers</span></a>
                <a href="contact.html"><i className="fas fa-headset"></i><span>contact us</span></a>
            </nav>
        </div>
    )
}

export default SideBar