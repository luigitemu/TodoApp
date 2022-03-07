import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/home/HomePage';
import { Layout } from '../pages/Layout';
import { LoginPage } from '../pages/login/LoginPage';


// import { RequireAuth } from './RequireAuth';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';

export const RouterPage = () => {
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
