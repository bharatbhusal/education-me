import React from 'react'
import Vid1 from '../videos/vid-1.mp4'
import Post11 from '../images/post-1-1.png'
import Pic2 from '../images/pic-2.jpg'
import { NavLink } from 'react-router-dom'
import Comments from './watch-video/Comments'

const WatchVideo = () => {
   return (
      <div>
         <section className="watch-video">

            <div className="video-container">
               <div className="video">
                  <video src={Vid1} controls poster={Post11} id="video"></video>
               </div>
               <h3 className="title">complete HTML tutorial (part 01)</h3>
               <div className="info">
                  <p className="date"><i className="fas fa-calendar"></i><span>22-10-2022</span></p>
                  <p className="date"><i className="fas fa-heart"></i><span>44 likes</span></p>
               </div>
               <div className="tutor">
                  <img src={Pic2} alt="" />
                  <div>
                     <h3>john deo</h3>
                     <span>developer</span>
                  </div>
               </div>
               <form action="" method="post" className="flex">
                  <NavLink to={'/playlist'} className="inline-btn">View Playlist
                  </NavLink>
                  <button><i className="far fa-heart"></i><span>like</span></button>
               </form>
               <p className="description">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque labore ratione, hic exercitationem mollitia obcaecati culpa dolor placeat provident porro.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum architecto dolor fugiat illo, iure velit nihil laboriosam cupiditate voluptatum facere cumque nemo!
               </p>
            </div>

         </section>

         <Comments />
      </div>
   )
}

export default WatchVideo