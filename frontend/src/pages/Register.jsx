import React from 'react';
import { Form, useNavigate } from 'react-router-dom';

const Register = () => {
   const navigate = useNavigate();

   const handleRegistration = async (e) => {
      e.preventDefault();

      const registrationData = {
         id: crypto.randomUUID(),
         name: e.target.name.value,
         email: e.target.email.value,
         password: e.target.pass.value,
      };

      try
      {
         const response = await fetch('/users', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationData),
         });

         if (!response.ok)
         {
            throw new Error('Network response was not ok');
         }

         const result = await response.text();
         console.log(result); // handle the result as needed

         navigate('/login');
      } catch (error)
      {
         console.error('Error:', error.message);
      }
   };

   return (
      <div>
         <section className="form-container">
            <form
               action=""
               method="post"
               encType="multipart/form-data"
               onSubmit={handleRegistration}
            >
               <h3>Register Now</h3>
               <p>Your Name <span>*</span></p>
               <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  maxLength="50"
                  className="box"
                  pattern="[A-Za-z ]+"
                  title="Alphabets and spaces only"
               />
               <p>Your Email <span>*</span></p>
               <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  maxLength="50"
                  className="box"
                  title="Must include a valid mail id"
               />
               <p>Your Password <span>*</span></p>
               <input
                  type="password"
                  name="pass"
                  placeholder="Enter your password"
                  required
                  maxLength="20"
                  className="box"
               />
               <p>Confirm Password <span>*</span></p>
               <input
                  type="password"
                  name="c_pass"
                  placeholder="Confirm your password"
                  required
                  maxLength="20"
                  className="box"
               />
               <input
                  type="submit"
                  value="Register New"
                  name="submit"
                  className="btn"
               />
            </form>
         </section>
      </div>
   );
};

export default Register;
