import React from 'react';
import { Navigate } from "react-router-dom";
import Profile from '../pages/Profile'

const PrivateProfile = ({props, children}) => {
    const login = localStorage.getItem('login')
        return login ? <Profile {...props}>{children}</Profile> : <Navigate to="/" />
      
}

export default PrivateProfile 