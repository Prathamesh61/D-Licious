import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import AllRoutes from './Pages/AllRoutes'
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
