import React from 'react'
import './register.scss';
import { Link } from 'react-router-dom';



const Register = () => {
    return (
        <div className='register'>
            <form >
                <label htmlFor="firstName">First Name <sup>*</sup></label>
                <input type="text" id='firstName' name='fname' placeholder='First Name' />

                <label htmlFor="lastName">Last Name <sup>*</sup></label>
                <input type="text" id='lastName' name='lname' placeholder='Last Name' />

                <label htmlFor="email">Email <sup>*</sup></label>
                <input type="text" id='email' name='email' placeholder='Email' />

                <label htmlFor="password">Password <sup>*</sup></label>
                <input type="password" name="password" id="password" placeholder='Password' />

                <label htmlFor="confirmPsw">Confirm Password<sup>*</sup></label>
                <input type="password" name="confirmPsw" id="confirmPsw" placeholder='Confirm Password' />

                <input type="button" value="CREATE NEW ACCOUNT" className='btnLogin' />
                <div className="mainOr">
                    <span className="or"></span> <span>or</span> <span className='or'></span>
                </div>
                <li><Link to='/register'>LOGIN</Link></li>
            </form>
        </div>
    )
}

export default Register