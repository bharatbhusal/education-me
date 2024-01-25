import React from 'react'
import { Form, useNavigate } from 'react-router-dom';

const Register = () => {
   const navigate = useNavigate();

   let xmlDoc;

   const handleRegistration = (e) => {
      e.preventDefault();
      const registrationData = {
         name: e.target.name.value,
         email: e.target.email.value,
         password: e.target.pass.value,
      };

      const existingXMLData = localStorage.getItem('xmlData') || '<users></users>';
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(existingXMLData, 'application/xml');

      const newUser = xmlDoc.createElement('user');
      newUser.innerHTML = `
    <name>${registrationData.name}</name>
    <email>${registrationData.email}</email>
    <password>${registrationData.password}</password>
  `;

      xmlDoc.documentElement.appendChild(newUser);

      localStorage.setItem('xmlData', new XMLSerializer().serializeToString(xmlDoc));


      navigate('/login');
   };
   return (
      <div>

         <section className="form-container">

            <form action="" method="post" encType="multipart/form-data" onSubmit={handleRegistration}>
               <h3>register now</h3>
               <p>your name <span>*</span></p>
               <input type="text" name="name" placeholder="enter your name" required maxLength="50" className="box" pattern="[A-Za-z ]+" title="Alphabets and spaces only" />
               <p>your email <span>*</span></p>
               <input type="email" name="email" placeholder="enter your email" required maxLength="50" className="box" title="Must include a valid mail id" />
               <p>your password <span>*</span></p>
               <input type="password" name="pass" placeholder="enter your password" required maxLength="20" className="box" />
               <p>confirm password <span>*</span></p>
               <input type="password" name="c_pass" placeholder="confirm your password" required maxLength="20" className="box" />
               {/* <p>select profile <span>*</span></p> */}
               {/* <input type="file" accept="image/*" required className="box" /> */}
               <input type="submit" value="register new" name="submit" className="btn" />
            </form>

         </section>

      </div>
   )
}

export default Register