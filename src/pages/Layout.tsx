import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import { AuthStatus } from '../router/AuthStatus'

export const Layout = () => {
  return (
    <div>
    <Outlet />
  </div>
  )
}
