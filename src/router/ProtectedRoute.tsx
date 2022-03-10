import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { RootState } from '../reducers/rootReducer';

export const ProtectedRoute = ( {children} : { children: JSX.Element}) => {
    const auth = useSelector((state: RootState) => state.auth ); 
    let location = useLocation();
    if (!auth.user) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
}
