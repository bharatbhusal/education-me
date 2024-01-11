import React from 'react'
import Pic1 from '../images/pic-1.jpg'
import { FaComment } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";


const Profile = () => {
   return (
      <div>
         <section className="user-profile">

            <h1 className="heading">your profile</h1>

            <div className="info">

               <div className="user">
                  <img src={Pic1} alt="" />
                  <h3>shaikh anas</h3>
                  <p>student</p>
                  <a href="update.html" className="inline-btn">update profile</a>
               </div>

               <div className="box-container">

                  <div className="box">
                     <div className="flex">
                        <i className="fas fa-bookmark"><FaBookmark />
                        </i>
                        <div>
                           <span>4</span>
                           <p>saved playlist</p>
                        </div>
                     </div>
                     <a href="#" className="inline-btn">view playlists</a>
                  </div>

                  <div className="box">
                     <div className="flex">
                        <i className="fas fa-heart"><FaHeart />
                        </i>
                        <div>
                           <span>33</span>
                           <p>videos liked</p>
                        </div>
                     </div>
                     <a href="#" className="inline-btn">view liked</a>
                  </div>

                  <div className="box">
                     <div className="flex">
                        <i className="fas fa-comment"><FaComment />
                        </i>
                        <div>
                           <span>12</span>
                           <p>videos comments</p>
                        </div>
                     </div>
                     <a href="#" className="inline-btn">view comments</a>
                  </div>

               </div>
            </div>

         </section>

      </div>
   )
}

export default Profile