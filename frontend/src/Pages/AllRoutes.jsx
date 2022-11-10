import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import Signup from './Signup';


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes;
