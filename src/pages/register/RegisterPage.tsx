import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { AuthBackground } from '../../components/authBackground/AuthBackground'
import "./RegisterPage.css"
import { useDispatch } from 'react-redux';
import { startRegisterUser } from '../../action/auth';
export const RegisterPage = () => {
  
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const formSchema = Yup.object().shape({
    name: Yup.string()
          .required('Name is required'),
    email: Yup.string()
          .email()
          .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password length should be at least 6 characters'),
    password2: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must and should match'),
  })
  
  const validationOpt = { resolver: yupResolver(formSchema) }
  
  const { register, handleSubmit, formState: { errors } } = useForm(validationOpt);
  
  const onSubmit = (data: any) => { 
    const { email, password, name  } = data ; 
    dispatch(startRegisterUser(email,name,password));
    
   }

  return (
    <div className="flex__container">
        <div className="register__container-form-register"> 
            <h1 className="login__header">Sign Up </h1>
            <div>
                <div>If you already have an account register</div>
                <div>You can  <Link to="/login" className="login__register-link">Login here!</Link>  </div>
            </div>
        
        <form 
      style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} 
      onSubmit={handleSubmit(onSubmit)}>

        <div className="login__form-input-section">
          <label>
            <span className="login__form-label">Name:</span>
            <input 
              placeholder="Click to enter your name" 
              autoComplete="off"
              type="text" 
              className="login__form-input" 
              { ...register('name', { required: true })}
            />
            { errors.name && (
              <span className="login__form-error">The name is required</span>
            )}
          </label>
        </div>
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
              placeholder="Click enter your password" 
              autoComplete="off" 
              className="login__form-input" 
              { ...register('password', { required: true })}
            />
            { errors.password && (
              <span className="login__form-error">The password is required</span>
            )}
          </label>{" "}

        </div>
        <div className="login__form-input-section">
          <label> 
            <span className="login__form-label">Confirm password:</span>
            <input 
              type="password" 
              placeholder="Click to confirm  password" 
              autoComplete="off" 
              className="login__form-input" 
              { ...register('password2', { required: true, minLength:6 })}
            />
            { errors.password2 && (
              <span className="login__form-error">The password must match</span>
            )}
          </label>{" "}

        </div>
        <button 
        type="submit"  
        className={`${  disabled? "login__button-disabled" : "login__button-active"} `}>Register</button>
      </form> 
      </div>
        <AuthBackground/>
    </div>
  )
}
