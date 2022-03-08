import React from 'react';

import loginImage from "../../assets/login_dude.png";
import './AuthBackground.css';


export const AuthBackground = () => {
  return (
    <div className="flex__container-bg-blue">
    <div className="flex__container-blue-background">
      <img src={ loginImage } alt="" className="image_dude" />
    </div>
  </div>
  )
}
