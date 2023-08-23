
import React from 'react'
import { Link } from "react-router-dom"
import { BsEnvelope } from 'react-icons/bs';

import PasswordShowHide from './PasswordShow';
import './User.css'
const Login = () => {
  return (
    <section className='contain'>
      <div className="cont">
      <div className="forms">
          <div className="formm login">
            <span className='title'>Login</span>
            <form action="#">
              <div className="input">
                <input type="text" placeholder='Enter your email' required/>
                <BsEnvelope className='icn'/>
              </div>
              <div className="input">
               
              <PasswordShowHide/>
              
              
              </div>

              <div className="checkbox-text d_flex">
                <div className="checkbox-content">  
                <input type="checkbox" id='logCheck' />
                <label htmlFor="logCheck" className='text'>Remember me</label>
                </div>
                <a href="" className='text'>forgot password</a>
              </div>
              <div className="input button">
                <input type="button" value='Login Now' />
              </div>
            </form>
            <div className="login-signup">
                <span className='text'>
                  Not a member?
                  <Link to='/Registration'>
                  <a href="" className="text signup-text">Signup now</a>
                  </Link>
                </span>
            </div>
          </div>
          </div>
      </div>
    {/* <div>Log</div> */}
    </section>
  )
}

export default Login
