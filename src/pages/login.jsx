import React from 'react';
import { Form, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

  const validateForm = (e) => {
    e.preventDefault();
    const loginData = {
      email: e.target.email.value,
      password: e.target.pass.value,
    };

    const storedData = localStorage.getItem('xmlData');
    if (storedData) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(storedData, 'application/xml');

      const users = xmlDoc.getElementsByTagName('user');
      let validUser = false;

      for (let i = 0; i < users.length; i++) {
        const userEmail = users[i].getElementsByTagName('email')[0].textContent;
        const userPassword = users[i].getElementsByTagName('password')[0].textContent;

        if (userEmail === loginData.email && userPassword === loginData.password) {
          validUser = true;
          break;
        }
      }

      if (validUser) {
        navigate('/');
      } else {
        alert('Invalid login credentials');
      }
    } else {
      alert('User not registered');
    }
  };

  return (
    <div>
      <section className="form-container">
        <Form
          method="post"
          encType="multipart/form-data"
          onSubmit={validateForm}
        >
          <h3>login now</h3>
          <p>Your Email <span>*</span></p>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            required
            maxLength="50"
            className="box"
          />
          <p>Your Password <span>*</span></p>
          <input
            type="password"
            name="pass"
            placeholder="enter your password"
            required
            maxLength="20"
            className="box"
          />

          <input type="submit" value="login new" name="submit" className="btn" />
        </Form>
      </section>
    </div>
  );
};

export default Login;
