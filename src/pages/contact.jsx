import React from 'react'
import Pic1 from '../images/pic-1.jpg'
import Thumb1 from '../images/thumb-1.png'
import Thumb2 from '../images/thumb-2.png'
import Thumb3 from '../images/thumb-3.png'
import Thumb4 from '../images/thumb-4.png'
import Thumb5 from '../images/thumb-5.png'
import Thumb6 from '../images/thumb-6.png'
import Thumb7 from '../images/thumb-7.png'
import Thumb8 from '../images/thumb-8.png'
import Thumb9 from '../images/thumb-9.png'

const Contact = () => {
   return (
      <div>


         <header class="header">

            <section class="flex">

               <a href="home.html" class="logo">Educa.</a>

               <form action="search.html" method="post" class="search-form">
                  <input type="text" name="search_box" required placeholder="search courses..." maxlength="100" />
                  <button type="submit" class="fas fa-search"></button>
               </form>

               <div class="icons">
                  <div id="menu-btn" class="fas fa-bars"></div>
                  <div id="search-btn" class="fas fa-search"></div>
                  <div id="user-btn" class="fas fa-user"></div>
                  <div id="toggle-btn" class="fas fa-sun"></div>
               </div>

               <div class="profile">
                  <img src={Pic1} class="image" alt="" />
                  <h3 class="name">shaikh anas</h3>
                  <p class="role">studen</p>
                  <a href="profile.html" class="btn">view profile</a>
                  <div class="flex-btn">
                     <a href="login.html" class="option-btn">login</a>
                     <a href="register.html" class="option-btn">register</a>
                  </div>
               </div>

            </section>

         </header>

         <div class="side-bar">

            <div id="close-btn">
               <i class="fas fa-times"></i>
            </div>

            <div class="profile">
               <img src="images/pic-1.jpg" class="image" alt="" />
               <h3 class="name">shaikh anas</h3>
               <p class="role">studen</p>
               <a href="profile.html" class="btn">view profile</a>
            </div>

            <nav class="navbar">
               <a href="home.html"><i class="fas fa-home"></i><span>home</span></a>
               <a href="about.html"><i class="fas fa-question"></i><span>about</span></a>
               <a href="courses.html"><i class="fas fa-graduation-cap"></i><span>courses</span></a>
               <a href="teachers.html"><i class="fas fa-chalkboard-user"></i><span>teachers</span></a>
               <a href="contact.html"><i class="fas fa-headset"></i><span>contact us</span></a>
            </nav>

         </div>

         <section class="contact">

            <div class="row">

               <div class="image">
                  <img src="images/contact-img.svg" alt="" />
               </div>

               <form action="" method="post">
                  <h3>get in touch</h3>
                  <input type="text" placeholder="enter your name" name="name" required maxlength="50" class="box" />
                  <input type="email" placeholder="enter your email" name="email" required maxlength="50" class="box" />
                  <input type="number" placeholder="enter your number" name="number" required maxlength="50" class="box" />
                  <textarea name="msg" class="box" placeholder="enter your message" required maxlength="1000" cols="30" rows="10"></textarea>
                  <input type="submit" value="send message" class="inline-btn" name="submit" />
               </form>

            </div>

            <div class="box-container">

               <div class="box">
                  <i class="fas fa-phone"></i>
                  <h3>phone number</h3>
                  <a href="tel:1234567890">123-456-7890</a>
                  <a href="tel:1112223333">111-222-3333</a>
               </div>

               <div class="box">
                  <i class="fas fa-envelope"></i>
                  <h3>email address</h3>
                  <a href="mailto:shaikhanas@gmail.com">shaikhanas@gmail.come</a>
                  <a href="mailto:anasbhai@gmail.com">anasbhai@gmail.come</a>
               </div>

               <div class="box">
                  <i class="fas fa-map-marker-alt"></i>
                  <h3>office address</h3>
                  <a href="#">flat no. 1, a-1 building, jogeshwari, mumbai, india - 400104</a>
               </div>

            </div>

         </section>

         <footer class="footer">

            &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights reserved!

         </footer>


      </div>
   )
}

export default Contact