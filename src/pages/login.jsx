import React from 'react'

const Login = () => {

  const validateForm = () => {
    console.log("validated")
  }
  return (
    <div>

      <section className="form-container">
        <form
          action=""
          method="post"
          encType="multipart/form-data"
          onSubmit={validateForm}
        >
          <h3>login now</h3>
          <p>your email <span>*</span></p>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            required
            maxLength="50"
            className="box"
          />
          <p>your password <span>*</span></p>
          <input
            type="password"
            name="pass"
            placeholder="enter your password"
            required
            maxLength="20"
            className="box"
          />

          <input type="submit" value="login new" name="submit" className="btn" />
        </form>
      </section>

    </div>
  )
}

export default Login