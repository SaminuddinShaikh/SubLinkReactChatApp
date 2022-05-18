import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/auth'

export default function PrivateRoute() {
    const {user} = useContext(AuthContext);
  return (
      <>
      {user ? <Outlet /> : <Navigate to="/login" />}
      </>
  );
}
