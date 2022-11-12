import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import AllRoutes from './Pages/AllRoutes'
import Footer from './Components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
