import React from 'react'
import AboutImg from "../images/about-img.svg"
import { FaGraduationCap } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import StudentReview from './about/StudentReview';

const About = () => {
    return (
        <div>

            <section className="about">
                <div className="row">
                    <div className="image">
                        <img src={AboutImg} alt="" />
                    </div>
                    <div className="content">
                        <h3>why choose us?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum quasi illo? Distinctio expedita commodi, nemo a quam error repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur quaerat tenetur.</p>
                        <NavLink className="inline-btn" to={"/register"}>
                            get started
                        </NavLink>
                    </div>
                </div>

                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-graduation-cap"><FaGraduationCap /></i>
                        <div>
                            <h3>+10k</h3>
                            <p>online courses</p>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-user-graduate"><FaUserGraduate />
                        </i>
                        <div>
                            <h3>+40k</h3>
                            <p>brilliant students</p>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-chalkboard-user"><FaChalkboardTeacher /></i>
                        <div>
                            <h3>+2k</h3>
                            <p>expert tutors</p>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-briefcase"><FaBriefcase /></i>
                        <div>
                            <h3>100%</h3>
                            <p>job placement</p>
                        </div>
                    </div>

                </div>

            </section>

            <StudentReview />
        </div>
    )
}

export default About