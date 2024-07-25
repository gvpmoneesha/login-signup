import React, { useState } from 'react'
import './LoginSignup.css'

function LoginSignup() {

  const [action,setAction] = useState("Sign Up");

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>

        <div className='inputs'>
          {action==="Login"?<div></div>:
          <div className='input'>
            <i className="bi bi-person-fill"></i>
            <input type='text' placeholder='Name' />
          </div>
        }

          <div className='input'>
            <i className="bi bi-envelope-fill"></i>
            <input type='email' placeholder='Email' />
          </div>

          <div className='input'>
            <i className="bi bi-key-fill"></i>
            <input type='password' placeholder='Password' />
          </div>

          {action==="Sign Up"?<div></div>:
          <div className='forgot-password'>Lost password? <span>Click here</span></div>
          }
          
          <div className='submit-button'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}  onClick={()=>{setAction("Login")}}>Login</div>
          </div>
      </div>
    </div>
        
  )
}

export default LoginSignup