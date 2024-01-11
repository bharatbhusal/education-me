import React from 'react';
import { Form, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const validateForm = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log("validated");
    console.log("Email:", e.target.email.value);
    console.log("Password:", e.target.pass.value);
    navigate('/')
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
