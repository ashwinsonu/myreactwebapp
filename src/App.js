 import React from 'react';
 import Navbar  from './components/navbar';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Services from './components/pages/Services';
import Products from './components/pages/Products';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/home'  element={<Home />} />
      <Route path='/services' exact element={<Services/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      </Routes>

    </Router>
    
    </>
     
  );
}

export default App;
