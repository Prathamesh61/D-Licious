import './App.css';

import React, { useEffect, useState } from 'react';
import AllRoutes from './Pages/AllRoutes'

import Navbar from './Components/Navbar';
import axios from 'axios';


import Footer from './Components/footer/Footer';

function App() {
  
  

  return (
    <div className="App">
    <Navbar   />
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
