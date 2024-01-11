import React from 'react'
import AboutImg from "../images/about-img.svg"
import { FaGraduationCap } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


import Pic2 from '../images/pic-2.jpg'
import Pic3 from '../images/pic-3.jpg'
import Pic4 from '../images/pic-4.jpg'
import Pic5 from '../images/pic-5.jpg'
import Pic6 from '../images/pic-6.jpg'
import Pic7 from '../images/pic-7.jpg'
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>

            <section class="about">

                <div class="row">

                    <div class="image">
                        <img src={AboutImg} alt="" />
                    </div>

                    <div class="content">
                        <h3>why choose us?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum quasi illo? Distinctio expedita commodi, nemo a quam error repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur quaerat tenetur.</p>
                        <NavLink className="inline-btn" to={"/register"}>
                            get started
                        </NavLink>
                    </div>

                </div>

                <div class="box-container">

                    <div class="box">
                        <i class="fas fa-graduation-cap"><FaGraduationCap /></i>
                        <div>
                            <h3>+10k</h3>
                            <p>online courses</p>
                        </div>
                    </div>

                    <div class="box">
                        <i class="fas fa-user-graduate"><FaUserGraduate />
                        </i>
                        <div>
                            <h3>+40k</h3>
                            <p>brilliant students</p>
                        </div>
                    </div>

                    <div class="box">
                        <i class="fas fa-chalkboard-user"><FaChalkboardTeacher /></i>
                        <div>
                            <h3>+2k</h3>
                            <p>expert tutors</p>
                        </div>
                    </div>

                    <div class="box">
                        <i class="fas fa-briefcase"><FaBriefcase /></i>
                        <div>
                            <h3>100%</h3>
                            <p>job placement</p>
                        </div>
                    </div>

                </div>

            </section>

            <section class="reviews">

                <h1 class="heading">student's reviews</h1>

                <div class="box-container">

                    <div class="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div class="student">
                            <img src={Pic2} alt="" />
                            <div>
                                <h3>john deo</h3>
                                <div class="stars">
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star-half-alt"><FaStarHalfAlt />
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div class="student">
                            <img src={Pic3} alt="" />
                            <div>
                                <h3>john deo</h3>
                                <div class="stars">
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star-half-alt"><FaStarHalfAlt />
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div class="student">
                            <img src={Pic4} alt="" />
                            <div>
                                <h3>john deo</h3>
                                <div class="stars">
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star-half-alt"><FaStarHalfAlt />
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div class="student">
                            <img src={Pic5} alt="" />
                            <div>
                                <h3>john deo</h3>
                                <div class="stars">
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star-half-alt"><FaStarHalfAlt />
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div class="student">
                            <img src={Pic6} alt="" />
                            <div>
                                <h3>john deo</h3>
                                <div class="stars">
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star-half-alt"><FaStarHalfAlt />
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div class="student">
                            <img src={Pic7} alt="" />
                            <div>
                                <h3>john deo</h3>
                                <div class="stars">
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star"><FaStar />
                                    </i>
                                    <i class="fas fa-star-half-alt"><FaStarHalfAlt />
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About