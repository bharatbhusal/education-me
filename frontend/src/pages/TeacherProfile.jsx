import React from 'react'
import Pic2 from '../images/pic-2.jpg'
import { NavLink } from 'react-router-dom'
import Thumb1 from '../images/thumb-1.png'
import Thumb2 from '../images/thumb-2.png'
import Thumb3 from '../images/thumb-3.png'
import Thumb4 from '../images/thumb-4.png'
const TeachProfile = () => {
   return (
      <div>

         <section className="teacher-profile">

            <h1 className="heading">profile details</h1>

            <div className="details">
               <div className="tutor">
                  <img src={Pic2} alt="" />
                  <h3>john deo</h3>
                  <span>developer</span>
               </div>
               <div className="flex">
                  <p>total playlists : <span>4</span></p>
                  <p>total videos : <span>18</span></p>
                  <p>total likes : <span>1208</span></p>
                  <p>total comments : <span>52</span></p>
               </div>
            </div>

         </section>

         <section className="courses">

            <h1 className="heading">our courses</h1>

            <div className="box-container">

               <div className="box">
                  <div className="thumb">
                     <img src={Thumb1} alt="" />
                     <span>10 videos</span>
                  </div>
                  <h3 className="title">complete HTML tutorial</h3>
                  <NavLink to={'/playlist'} className="inline-btn">View Playlist
                  </NavLink>
               </div>

               <div className="box">
                  <div className="thumb">
                     <img src={Thumb2} alt="" />
                     <span>10 videos</span>
                  </div>
                  <h3 className="title">complete CSS tutorial</h3>
                  <NavLink to={'/playlist'} className="inline-btn">View Playlist
                  </NavLink>
               </div>

               <div className="box">
                  <div className="thumb">
                     <img src={Thumb3} alt="" />
                     <span>10 videos</span>
                  </div>
                  <h3 className="title">complete javascript tutorial</h3>
                  <NavLink to={'/playlist'} className="inline-btn">View Playlist
                  </NavLink>
               </div>

               <div className="box">
                  <div className="thumb">
                     <img src={Thumb4} alt="" />
                     <span>10 videos</span>
                  </div>
                  <h3 className="title">complete Boostrap tutorial</h3>
                  <NavLink to={'/playlist'} className="inline-btn">View Playlist
                  </NavLink>
               </div>

            </div>

         </section>


      </div>
   )
}

export default TeachProfile