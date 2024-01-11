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
import ContactImg from "../images/contact-img.svg"
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";




const Contact = () => {
   return (
      <div>

         <section className="contact">

            <div className="row">

               <div className="image">
                  <img src={ContactImg} alt="" />
               </div>

               <form action="" method="post">
                  <h3>get in touch</h3>
                  <input type="text" placeholder="enter your name" name="name" required maxLength="50" className="box" />
                  <input type="email" placeholder="enter your email" name="email" required maxLength="50" className="box" />
                  <input type="number" placeholder="enter your number" name="number" required maxLength="50" className="box" />
                  <textarea name="msg" className="box" placeholder="enter your message" required maxLength="1000" cols="30" rows="10"></textarea>
                  <input type="submit" value="send message" className="inline-btn" name="submit" />
               </form>

            </div>

            <div className="box-container">

               <div className="box">
                  <i className="fas fa-phone"><FaPhone />
                  </i>
                  <h3>phone number</h3>
                  <a href="tel:7416476507">741-647-6507</a>
                  <a href="tel:9662476507">966-247-6507</a>
               </div>

               <div className="box">
                  <i className="fas fa-envelope"><FaEnvelope />
                  </i>
                  <h3>email address</h3>
                  <a href="mailto:bharatbhusal78@gmail.com">bharatbhusal78@gmail.com</a>
                  <a href="mailto:bharatbhusal0.2@gmail.com">bharatbhusal0.2@gmail.com</a>
               </div>

               <div className="box">
                  <i className="fas fa-map-marker-alt"><FaMapLocationDot />
                  </i>
                  <h3>office address</h3>
                  <a href="#">flat no. 1, a-1 building, jogeshwari, mumbai, india - 400104</a>
               </div>

            </div>

         </section>

      </div>
   )
}

export default Contact