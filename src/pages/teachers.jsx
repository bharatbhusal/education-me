import React from 'react'
import Pic2 from '../images/pic-2.jpg'
import Pic3 from '../images/pic-3.jpg'
import Pic4 from '../images/pic-4.jpg'
import Pic5 from '../images/pic-5.jpg'
import Pic6 from '../images/pic-6.jpg'
import Pic7 from '../images/pic-7.jpg'
import Pic8 from '../images/pic-8.jpg'



const Teachers = () => {
   return (
      <div>

         <section class="teachers">

            <h1 class="heading">expert teachers</h1>

            <form action="" method="post" class="search-tutor">
               <input type="text" name="search_box" placeholder="search tutors..." required maxlength="100" />
               <button type="submit" class="fas fa-search" name="search_tutor"></button>
            </form>

            <div class="box-container">

               <div class="box offer">
                  <h3>become a tutor</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque ipsam fuga ex et aliquam.</p>
                  <a href="register.html" class="inline-btn">get started</a>
               </div>

               <div class="box">
                  <div class="tutor">
                     <img src={Pic2} alt="" />
                     <div>
                        <h3>john deo</h3>
                        <span>developer</span>
                     </div>
                  </div>
                  <p>total playlists : <span>4</span></p>
                  <p>total videos : <span>18</span></p>
                  <p>total likes : <span>1208</span></p>
                  <a href="teacher_profile.html" class="inline-btn">view profile</a>
               </div>

               <div class="box">
                  <div class="tutor">
                     <img src={Pic3} alt="" />
                     <div>
                        <h3>john deo</h3>
                        <span>developer</span>
                     </div>
                  </div>
                  <p>total playlists : <span>4</span></p>
                  <p>total videos : <span>18</span></p>
                  <p>total likes : <span>1208</span></p>
                  <a href="teacher_profile.html" class="inline-btn">view profile</a>
               </div>

               <div class="box">
                  <div class="tutor">
                     <img src={Pic4} alt="" />
                     <div>
                        <h3>john deo</h3>
                        <span>developer</span>
                     </div>
                  </div>
                  <p>total playlists : <span>4</span></p>
                  <p>total videos : <span>18</span></p>
                  <p>total likes : <span>1208</span></p>
                  <a href="teacher_profile.html" class="inline-btn">view profile</a>
               </div>

               <div class="box">
                  <div class="tutor">
                     <img src={Pic5} alt="" />
                     <div>
                        <h3>john deo</h3>
                        <span>developer</span>
                     </div>
                  </div>
                  <p>total playlists : <span>4</span></p>
                  <p>total videos : <span>18</span></p>
                  <p>total likes : <span>1208</span></p>
                  <a href="teacher_profile.html" class="inline-btn">view profile</a>
               </div>

               <div class="box">
                  <div class="tutor">
                     <img src={Pic6} alt="" />
                     <div>
                        <h3>john deo</h3>
                        <span>developer</span>
                     </div>
                  </div>
                  <p>total playlists : <span>4</span></p>
                  <p>total videos : <span>18</span></p>
                  <p>total likes : <span>1208</span></p>
                  <a href="teacher_profile.html" class="inline-btn">view profile</a>
               </div>

               <div class="box">
                  <div class="tutor">
                     <img src={Pic7} alt="" />
                     <div>
                        <h3>john deo</h3>
                        <span>developer</span>
                     </div>
                  </div>
                  <p>total playlists : <span>4</span></p>
                  <p>total videos : <span>18</span></p>
                  <p>total likes : <span>1208</span></p>
                  <a href="teacher_profile.html" class="inline-btn">view profile</a>
               </div>

               <div class="box">
                  <div class="tutor">
                     <img src={Pic8} alt="" />
                     <div>
                        <h3>john deo</h3>
                        <span>developer</span>
                     </div>
                  </div>
                  <p>total playlists : <span>4</span></p>
                  <p>total videos : <span>18</span></p>
                  <p>total likes : <span>1208</span></p>
                  <a href="teacher_profile.html" class="inline-btn">view profile</a>
               </div>

            </div>

         </section>

      </div>
   )
}

export default Teachers