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

import Post11 from '../images/post-1-1.png'
import Post12 from '../images/post-1-2.png'
import Post13 from '../images/post-1-3.png'
import Post14 from '../images/post-1-4.png'
import Post15 from '../images/post-1-5.png'
import Post16 from '../images/post-1-6.png'

const Playlist = () => {
   return (
      <div>

         <section className="playlist-details">

            <h1 className="heading">playlist details</h1>

            <div className="row">

               <div className="column">
                  <form action="" method="post" className="save-playlist">
                     <button type="submit"><i className="far fa-bookmark"></i> <span>save playlist</span></button>
                  </form>

                  <div className="thumb">
                     <img src={Thumb1} alt="" />
                     <span>10 videos</span>
                  </div>
               </div>
               <div className="column">
                  <div className="tutor">
                     <img src={Pic2} alt="" />
                     <div>
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div>
                  </div>

                  <div className="details">
                     <h3>complete HTML tutorial</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.</p>

                     <NavLink to={'/teacher-profile'} className="inline-btn">View Profile
                     </NavLink>
                  </div>
               </div>
            </div>

         </section>

         <section className="playlist-videos">

            <h1 className="heading">playlist videos</h1>

            <div className="box-container">
               <NavLink to={'/watch-video'} className="box"><i className="fas fa-play"></i>
                  <img src={Post11} alt="" />
                  <h3>complete HTML tutorial (part 01)</h3>
               </NavLink>


               <NavLink to={'/watch-video'} className="box"><i className="fas fa-play"></i>
                  <img src={Post12} alt="" />
                  <h3>complete HTML tutorial (part 02)</h3>
               </NavLink>



               <NavLink to={'/watch-video'} className="box"><i className="fas fa-play"></i>
                  <img src={Post13} alt="" />
                  <h3>complete HTML tutorial (part 03)</h3>
               </NavLink>

               <NavLink to={'/watch-video'} className="box"><i className="fas fa-play"></i>
                  <img src={Post14} alt="" />
                  <h3>complete HTML tutorial (part 04)</h3>
               </NavLink>

               <NavLink to={'/watch-video'} className="box"><i className="fas fa-play"></i>
                  <img src={Post15} alt="" />
                  <h3>complete HTML tutorial (part 05)</h3>
               </NavLink>

               <NavLink to={'/watch-video'} className="box"><i className="fas fa-play"></i>
                  <img src={Post16} alt="" />
                  <h3>complete HTML tutorial (part 06)</h3>
               </NavLink>
            </div>

         </section>

      </div>
   )
}

export default Playlist