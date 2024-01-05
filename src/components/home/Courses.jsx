import React from 'react'
import Pic2 from '../../images/pic-2.jpg'
import Pic3 from '../../images/pic-3.jpg'
import Pic4 from '../../images/pic-4.jpg'
import Pic5 from '../../images/pic-5.jpg'
import Pic6 from '../../images/pic-6.jpg'
import Pic7 from '../../images/pic-7.jpg'
import Thumb1 from '../../images/thumb-1.png'
import Thumb2 from '../../images/thumb-2.png'
import Thumb3 from '../../images/thumb-3.png'
import Thumb4 from '../../images/thumb-4.png'
import Thumb5 from '../../images/thumb-5.png'
import Thumb6 from '../../images/thumb-6.png'

const Courses = () => {
    return (
        <section className="courses">

            <h1 className="heading">our courses</h1>

            <div className="box-container">

                <div className="box">
                    <div className="tutor">
                        <img src={Pic2} alt="" />
                        <div className="info">
                            <h3>john deo</h3>
                            <span>21-10-2022</span>
                        </div>
                    </div>
                    <div className="thumb">
                        <img src={Thumb1} alt="" />
                        <span>10 videos</span>
                    </div>
                    <h3 className="title">complete HTML tutorial</h3>
                    <a href="playlist.html" className="inline-btn">view playlist</a>
                </div>

                <div className="box">
                    <div className="tutor">
                        <img src={Pic3} alt="" />
                        <div className="info">
                            <h3>john deo</h3>
                            <span>21-10-2022</span>
                        </div>
                    </div>
                    <div className="thumb">
                        <img src={Thumb2} alt="" />
                        <span>10 videos</span>
                    </div>
                    <h3 className="title">complete CSS tutorial</h3>
                    <a href="playlist.html" className="inline-btn">view playlist</a>
                </div>

                <div className="box">
                    <div className="tutor">
                        <img src={Pic4} alt="" />
                        <div className="info">
                            <h3>john deo</h3>
                            <span>21-10-2022</span>
                        </div>
                    </div>
                    <div className="thumb">
                        <img src={Thumb3} alt="" />
                        <span>10 videos</span>
                    </div>
                    <h3 className="title">complete JS tutorial</h3>
                    <a href="playlist.html" className="inline-btn">view playlist</a>
                </div>

                <div className="box">
                    <div className="tutor">
                        <img src={Pic5} alt="" />
                        <div className="info">
                            <h3>john deo</h3>
                            <span>21-10-2022</span>
                        </div>
                    </div>
                    <div className="thumb">
                        <img src={Thumb4} alt="" />
                        <span>10 videos</span>
                    </div>
                    <h3 className="title">complete Boostrap tutorial</h3>
                    <a href="playlist.html" className="inline-btn">view playlist</a>
                </div>

                <div className="box">
                    <div className="tutor">
                        <img src={Pic6} alt="" />
                        <div className="info">
                            <h3>john deo</h3>
                            <span>21-10-2022</span>
                        </div>
                    </div>
                    <div className="thumb">
                        <img src={Thumb5} alt="" />
                        <span>10 videos</span>
                    </div>
                    <h3 className="title">complete JQuery tutorial</h3>
                    <a href="playlist.html" className="inline-btn">view playlist</a>
                </div>

                <div className="box">
                    <div className="tutor">
                        <img src={Pic7} alt="" />
                        <div className="info">
                            <h3>john deo</h3>
                            <span>21-10-2022</span>
                        </div>
                    </div>
                    <div className="thumb">
                        <img src={Thumb6} alt="" />
                        <span>10 videos</span>
                    </div>
                    <h3 className="title">complete SASS tutorial</h3>
                    <a href="playlist.html" className="inline-btn">view playlist</a>
                </div>

            </div>

            <div className="more-btn">
                <a href="courses.html" className="inline-option-btn">view all courses</a>
            </div>

        </section>

    )
}

export default Courses