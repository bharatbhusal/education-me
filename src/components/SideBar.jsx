import React from 'react'
import Pic1 from "../images/pic-1.jpg"
import { NavLink } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";


const SideBar = () => {

    const handleCloseButtonClick = () => {
        const sideBar = document.querySelector('.side-bar');
        const body = document.body;
        sideBar.classList.toggle('active');
        body.classList.toggle('active');
    };


    return (
        <div className="side-bar">

            <div className="profile">
                <img src={Pic1} className="image" alt="" />
                <h3 className="name">shaikh anas</h3>
                <p className="role">student</p>
                <NavLink onClick={handleCloseButtonClick} to={'profile'} className="btn">view profile
                </NavLink>
            </div>

            <nav className="navbar">
                <NavLink onClick={handleCloseButtonClick} to={'/'} className={({ isActive, isPending }) =>
                    isActive
                        ? "active"
                        : isPending
                            ? "pending"
                            : ""}>
                    <i className="fas fa-home"><FaHome />
                    </i><span>home</span>
                </NavLink>

                <NavLink onClick={handleCloseButtonClick} to={'about'} className={({ isActive, isPending }) =>
                    isActive
                        ? "active"
                        : isPending
                            ? "pending"
                            : ""}>
                    <i className="fas fa-question"><FaQuestion />
                    </i><span>about</span>
                </NavLink>

                <NavLink onClick={handleCloseButtonClick} to={'courses'} className={({ isActive, isPending }) =>
                    isActive
                        ? "active"
                        : isPending
                            ? "pending"
                            : ""}>
                    <i className="fas fa-graduation-cap"><FaGraduationCap />
                    </i><span>courses</span>
                </NavLink>

                <NavLink onClick={handleCloseButtonClick} to={'teachers'} className={({ isActive, isPending }) =>
                    isActive
                        ? "active"
                        : isPending
                            ? "pending"
                            : ""}>
                    <i className="fas fa-chalkboard-user"><FaChalkboardTeacher />
                    </i><span>teachers</span>
                </NavLink>

                <NavLink onClick={handleCloseButtonClick} to={'contact'} className={({ isActive, isPending }) =>
                    isActive
                        ? "active"
                        : isPending
                            ? "pending"
                            : ""}>
                    <i className="fas fa-headset"><TfiHeadphoneAlt />
                    </i><span>contact us</span>
                </NavLink>
            </nav>
        </div >
    )
}

export default SideBar