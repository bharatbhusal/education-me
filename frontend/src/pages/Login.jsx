import React, { useEffect, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { useUserDetail } from '../contexts/useUserContext';
import { login } from "../controllers/getUser"

const Login = () => {
  const navigate = useNavigate();

  const validateForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Get the values of specific form fields by their names
    const email = formData.get('email');
    const password = formData.get('password');
    try
    {
      await login(email, password)
    } catch (error)
    {
      console.log(error.message)
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
            placeholder="email"
            required
            maxLength="50"
            className="box"
          />
          <p>Your Password <span>*</span></p>
          <input
            type="password"
            name="password"
            placeholder="password"
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
