import React, { useState, useEffect} from "react";
import validate from "../../../services/validator";
import handleSignup from "../handlers/handleSignup";
import {closeSignUp, handleBlur, handleFocus} from '../handlers/animations'

export default function SignUp () {    
    useEffect(()=>{
        validate('#sigup-form', handleSignup);
    },[]);

    const [signupName, setSignupName] = useState('');
    const [userName, setUserName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupRePassword, setSignupRePassword] = useState('');

    const [showPass, setShowPass] = useState(false);

    return (
        <div className='signup-container container-component'>
          <div className='toggle-login' onClick={closeSignUp}><i className="fa-solid fa-chevron-left"></i> Sign In</div>
          <p className='signup-title title'>Register</p>
          <form id='sigup-form' className='form'>
            <div className='form-group'>
              <input  id = 'user-name' className='my-input' 
                name='user-name'
                type='text' constraints='required&username'
                value={userName}
                onInput={(e) => setUserName(e.target.value)}
                onBlur={handleBlur} onFocus={handleFocus}
              />
              <label htmlFor='user-name'>User Name</label>
              <p className='message'></p>
            </div>
            <div className='form-group'>
              <input id = 'signup-email' className='my-input' 
                name='signup-email'
                type='email' constraints='required&email'
                value={signupEmail}
                onInput={(e) => setSignupEmail(e.target.value)}
                onBlur={handleBlur} onFocus={handleFocus}
              />
              <label htmlFor='signup-email'>Email</label>
              <p className='message'></p>
            </div>
            <div className='form-group'>
              <input id = 'signup-password' className='my-input'
                name='signup-password'
                type = {showPass ? 'text': 'password'}
                constraints='required&min=8'
                value={signupPassword}
                onInput={(e) => setSignupPassword(e.target.value)}
                onBlur={handleBlur} onFocus={handleFocus}
              />
              <label htmlFor='signup-password'>Password</label>
              <div className='show-password' onClick={() => setShowPass(!showPass)}>
                <i className= {`fa-solid fa-eye-slash ${showPass ? '' : 'fa-eye'}`} ></i>
              </div>
              <p className='message'></p>
            </div>
            <div className='form-group'>
              <input id = 'signup-repassword' className='my-input'
                name='signup-repassword'
                type = {showPass ? 'text': 'password'}
                constraints='required&min=8'
                value={signupRePassword}
                onInput={(e) => setSignupRePassword(e.target.value)}
                onBlur={handleBlur} onFocus={handleFocus}
              />
              <label htmlFor='signup-repassword'>Confirm Password</label>
              <div className='show-password' onClick={() => setShowPass(!showPass)}>
                <i className={`fa-solid fa-eye-slash ${showPass ? '' : 'fa-eye'}`}></i>
              </div>
              <div className='message'></div>
            </div>
            <button className='signup-btn btn btn-submit'>Register</button>
          </form>
        </div>
    );
}