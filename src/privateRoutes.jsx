import React from 'react';
import { Navigate, } from 'react-router-dom';
import { Home } from './Home';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  return token ? < Home/> : <Navigate to="/signup" />;
};

export default PrivateRoute;
