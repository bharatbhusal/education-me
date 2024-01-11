import React from 'react'
import { NavLink } from 'react-router-dom'
import Pic1 from '../images/pic-1.jpg'
import Pic2 from '../images/pic-2.jpg'
import Pic3 from '../images/pic-3.jpg'
import Pic4 from '../images/pic-4.jpg'
import Pic5 from '../images/pic-5.jpg'
import Pic6 from '../images/pic-6.jpg'
import Pic7 from '../images/pic-7.jpg'
import Pic8 from '../images/pic-8.jpg'
import Pic9 from '../images/pic-9.jpg'


import Thumb1 from '../images/thumb-1.png'
import Thumb2 from '../images/thumb-2.png'
import Thumb3 from '../images/thumb-3.png'
import Thumb4 from '../images/thumb-4.png'
import Thumb5 from '../images/thumb-5.png'
import Thumb6 from '../images/thumb-6.png'
import Thumb7 from '../images/thumb-7.png'
import Thumb8 from '../images/thumb-8.png'
import Thumb9 from '../images/thumb-9.png'

const Courses = () => {
   return (
      <div>
         <section className="courses">

            <h1 className="heading">our courses</h1>

            <div className="box-container" >

               <div className="box" >
                  <div className="tutor" >
                     <img src={Pic2} alt="" />
                     <div className="info" >
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div >
                  </div >
                  <div className="thumb" >
                     <img src={Thumb1} alt="" />
                     <span>10 videos</span>
                  </div >
                  <h3 className="title" > complete HTML tutorial</h3 >
                  <NavLink to={'/playlist'} className="inline-btn">View Playlist
                  </NavLink>
               </div >

               <div className="box" >
                  <div className="tutor" >
                     <img src={Pic3} alt="" />
                     <div className="info" >
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div >
                  </div >
                  <div className="thumb" >
                     <img src={Thumb2} alt="" />
                     <span>10 videos</span>
                  </div >
                  <h3 className="title" > complete CSS tutorial</h3 >
                  <NavLink to={'/playlist'} className="inline-btn">View Playlist
                  </NavLink>
               </div >

               <div className="box" >
                  <div className="tutor" >
                     <img src={Pic4} alt="" />
                     <div className="info" >
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div >
                  </div >
                  <div className="thumb" >
                     <img src={Thumb3} alt="" />
                     <span>10 videos</span>
                  </div >
                  <h3 className="title" > complete JS tutorial</h3 >
                  <NavLink to={'/playlist'} className="inline-btn">View Playlist
                  </NavLink>
               </div >

               <div className="box" >
                  <div className="tutor" >
                     <img src={Pic5} alt="" />
                     <div className="info" >
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div >
                  </div >
                  <div className="thumb" >
                     <img src={Thumb4} alt="" />
                     <span>10 videos</span>
                  </div >
                  <h3 className="title" > complete Boostrap tutorial</h3 >
                  <NavLink to={'/playlist'} className="inline-btn">View Playlist
                  </NavLink>
               </div >

               <div className="box" >
                  <div className="tutor" >
                     <img src={Pic6} alt="" />
                     <div className="info" >
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div >
                  </div >
                  <div className="thumb" >
                     <img src={Thumb5} alt="" />
                     <span>10 videos</span>
                  </div >
                  <h3 className="title" > complete JQuery tutorial</h3 >
                  <NavLink to={'/playlist'} className="inline-btn">View Playlist
                  </NavLink>
               </div >

               <div className="box" >
                  <div className="tutor" >
                     <img src={Pic7} alt="" />
                     <div className="info" >
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div >
                  </div >
                  <div className="thumb" >
                     <img src={Thumb6} alt="" />
                     <span>10 videos</span>
                  </div >
                  <h3 className="title" > complete SASS tutorial</h3 >
                  <NavLink to={'/playlist'} className="inline-btn">View Playlist
                  </NavLink>
               </div >

               <div className="box" >
                  <div className="tutor" >
                     <img src={Pic8} alt="" />
                     <div className="info" >
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div >
                  </div >
                  <div className="thumb" >
                     <img src={Thumb7} alt="" />
                     <span>10 videos</span>
                  </div >
                  <h3 className="title" > complete PHP tutorial</h3 >
                  <NavLink to={'/playlist'} className="inline-btn">View Playlist
                  </NavLink>
               </div >

               <div className="box" >
                  <div className="tutor" >
                     <img src={Pic9} alt="" />
                     <div className="info" >
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div >
                  </div >
                  <div className="thumb" >
                     <img src={Thumb8} alt="" />
                     <span>10 videos</span>
                  </div >
                  <h3 className="title" > complete MySQL tutorial</h3 >
                  <NavLink to={'/playlist'} className="inline-btn">View Playlist
                  </NavLink>
               </div >

               <div className="box" >
                  <div className="tutor" >
                     <img src={Pic1} alt="" />
                     <div className="info" >
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div >
                  </div >
                  <div className="thumb" >
                     <img src={Thumb9} alt="" />
                     <span>10 videos</span>
                  </div >
                  <h3 className="title" > complete react tutorial</h3 >
                  <NavLink to={'/playlist'} className="inline-btn">View Playlist
                  </NavLink>
               </div >

            </div >

         </section >
      </div >
   )
}

export default Courses