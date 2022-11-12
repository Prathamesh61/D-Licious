import './App.css';

import React, { useEffect, useState } from 'react';
import AllRoutes from './Pages/AllRoutes'
import Navbar from './Components/Navbar';
import axios from 'axios';

function App() {
  
  

  return (
    <div className="App">
    <Navbar   />
      <AllRoutes />
    </div>
  );
}

export default App;
