import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AboutUs, FindUs, Footer, Gallery, Header,  SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
  <>
    <Routes>
      <Route path="/" element={<Header />}/>
      <Route path="/register" element={<AboutUs/>}/>
      </Routes></>
  
  );
};

export default App;
