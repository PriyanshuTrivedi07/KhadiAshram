import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Protected = ({ children }) => {
    const authStatus = useSelector(state => state.auth.status)
    return authStatus ? children : <Navigate to="/login" />; // if the user is not logged in then show the request login page
};

export default Protected;