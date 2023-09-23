import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated, redirectPath }) => {
  if (isAuthenticated) {
    return <Route element={element} />;
  } else {
    return <Navigate to={redirectPath} />;
  }
};

export default ProtectedRoute;
