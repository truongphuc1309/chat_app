import { useEffect, useState } from "react";

import handleLogin from "../handlers/handleLogin";
import handleGgLogin from "../handlers/handleGgLogin";
import handleFbLogin from "../handlers/handleFbLogin";
import validate from "../../../services/validator"
import {openSignUp, handleBlur, handleFocus} from "../handlers/animations"

export default function LogIn (){
    useEffect(()=>{
        validate('#login-form', handleLogin);
    },[]);

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    
    return (
        <div className='login-container container-component'>
          <div className='toggle-signup' onClick={openSignUp}>Sign Up <i className="fa-solid fa-chevron-right"></i></div>
          <p className='login-title title'>Sign In</p>
          <form id='login-form' className='form'>
            <div className='form-group'>
              <input id='login-email' className='my-input'
                type='email'
                name='login-email' constraints='required&email'
                value={loginEmail}
                onInput={(e) => setLoginEmail(e.target.value)}
                onBlur={handleBlur} onFocus={handleFocus}
              />
              <label htmlFor='login-email'>Email</label>
              <p className='message'></p>
            </div>
            <div className='form-group'>
              <input id='login-password' className='my-input password' 
                type={showPass ? 'text': 'password'}
                name='login-password' constraints='required&min=8'
                value={loginPassword}
                onInput={(e) => setLoginPassword(e.target.value)}
                onBlur={handleBlur} onFocus={handleFocus}
              />
              <label htmlFor='login-password'>Password</label>
              <div className='show-password' onClick={() => setShowPass(!showPass)}>
                <i className= {`fa-solid fa-eye-slash ${showPass ? '' : 'fa-eye'}`}></i>
              </div>
              <p className='message'></p>
            </div>
            <a href='' className='forget-password'>Forget your password ?</a>
            <button className='login-btn btn btn-submit' type='submit'>Sign In</button>
          </form>
          <div className='connection-container'>
            <div div className='connection-component'>
                  <p>or connect with:</p>
            </div>
            <div className='connection-component'>
              <div className='connection-item' onClick={handleFbLogin}>
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div  className='connection-item' onClick={handleGgLogin}>
                <i className="fa-brands fa-google-plus-g"></i>
              </div>
            </div>
          </div>
        </div>
    );
}