import React, { useEffect} from 'react'
import Navbar from './Navbar'
import { Navigate } from 'react-router-dom';
// import { useEffect } from 'react';

export const Home = () => {

useEffect(() => {
          const token = localStorage.getItem('token');
      
          if (!token) {
            return <Navigate to="/Login" />;
          }
        }, []);
  return (
   <>
   <Navbar/>
   </>
  )
}
