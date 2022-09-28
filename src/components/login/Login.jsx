import React from 'react'
import './login.scss';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <section className='login' >
      <form >
        <label htmlFor="email">Email <sup>*</sup></label>
        <input type="text" id='email' name='email' placeholder='Email' />
        
        <label htmlFor="password">Password<sup>*</sup></label>
        <input type="password" name="password" id="password" placeholder='Password' />
        <div className="remember">
          <div className="checkBox">
            <input type="checkbox" name="remember" id="remember" />
            <span className=''>Remember me</span>
          </div>
          <p className="forgot">Forgot your password?</p>
        </div>

        <input type="button" value="LOGIN" className='btnLogin' />
        <div className="mainOr">
          <span className="or"></span> <span>or</span> <span className='or'></span>
        </div>
        <li><Link to='/register'>CREATE NEW ACCOUNT</Link></li>
        <p className="content">
          By providing your email address, you agree to our <br />
          Privacy Policy and Terms of Service.
        </p>
      </form>
    </section>
  )
}

export default Login