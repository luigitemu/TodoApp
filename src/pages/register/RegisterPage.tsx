import React from 'react'
import { Link } from 'react-router-dom'

import { AuthBackground } from '../../components/authBackground/AuthBackground'
import "./RegisterPage.css"
export const RegisterPage = () => {
  return (
    <div className="flex__container">
        <div className="register__container-form-register"> 
            <h1 className="login__header">Sign Up </h1>
            <div>
                <div>If you already have an account register</div>
                <div>You can  <Link to="/login" className="login__register-link">Login here!</Link>  </div>
            </div>
        </div>
        <AuthBackground/>
    </div>
  )
}
