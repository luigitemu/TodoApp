import React, { useState } from 'react'
// import { AuthContext } from '../App'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

import {  startLogin } from '../../action/auth';

import "./LoginPage.css"
import { AuthBackground } from '../../components/authBackground/AuthBackground';
import { ToastContainer } from 'react-toastify';

type LocationProps = {
  state: {
    from: Location;
  };
};

export const LoginPage = () => {
  const location = useLocation() as unknown  as LocationProps;
  const dispatch = useDispatch();
    const from = location.state?.from?.pathname || '/'; 
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [disabled, setDisabled] = useState(false);
  
  const onSubmit = (data: any) => { 
    const { email, password } = data ; 
  
    
    dispatch(startLogin(email, password));
    
   }
  return (
  <div className="flex__container" >
    <ToastContainer />
    
    <div className="login__container-form-login">
      <h1 className="login__header">Sign in </h1>
      <div>
        <div>If you don't have an account register</div>
        <div>You can  <Link to="/register" className="login__register-link">Register here!</Link>  </div>
      </div>
      <form 
      style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} 
      onSubmit={handleSubmit(onSubmit)}>

        <div className="login__form-input-section">
          <label>
            <span className="login__form-label">Email:</span>
            <input 
              placeholder="Click to enter your email" 
              autoComplete="off"
              type="email" 
              className="login__form-input" 
              { ...register('email', { required: true })}
            />
            { errors.email && (
              <span className="login__form-error">The email is required</span>
            )}
          </label>
        </div>
        <div className="login__form-input-section">
          <label> 
            <span className="login__form-label">Password:</span>
            <input 
              type="password" 
              placeholder="Click enter your Password" 
              autoComplete="off" 
              className="login__form-input" 
              { ...register('password', { required: true })}
            />
            { errors.password && (
              <span className="login__form-error">The password is required</span>
            )}
          </label>{" "}

        </div>
        <button 
        type="submit" 
        disabled={disabled} 
        className={`${ disabled ? "login__button-disabled" : "login__button-active"} `}>Login</button>
      </form> 
    </div>

    <AuthBackground/>
    
  </div>
  )
}
{/* */}