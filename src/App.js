import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header,  SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    {/* <Chef />
    <Intro /> */}
    {/* <br/>  */}
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
