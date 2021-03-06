import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { startChecking } from '../action/auth';
import { HomePage } from '../pages/home/HomePage';
import { Layout } from '../pages/Layout';
import { LoginPage } from '../pages/login/LoginPage';


// import { RequireAuth } from './RequireAuth';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';
import { RootState } from '../reducers/rootReducer';
import { RegisterPage } from '../pages/register/RegisterPage';
import { Loading } from '../components/loading/Loading';

export const RouterPage = () => {
  const dispatch = useDispatch();
    const { checking, user } = useSelector((state:RootState) => state.auth);

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);
  
    
    if (checking) {
        return <div style={{
          display: 'flex',  
          height: '100vh',
          width: '100vw',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
          overflow: 'hidden'
          }} >
          <Loading/>
        </div>
    }
  return (
    <Routes>
        <Route element={<Layout />}>
          <Route
          path={'/login'}
          element={
            <PublicRoute>
              <LoginPage/>
            </PublicRoute>
          }
          />
          
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          
          <Route path="*" element={ <Navigate to="/"/>} />
        </Route>
      </Routes>
  )
}
