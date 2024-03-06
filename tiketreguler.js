import logo from './logo.svg';
import React from 'react';
import './grid.css';
import './flex.css';
import Navbar from './components/Navbar';
import Flex from './components/Flex';
import 'bootstrap/dist/css/bootstrap.min.css';

function tiketreguler() {
  return (
    <div className="App">
      <Navbar/>
      <Flex/>
    </div>
  );
}

export default tiketreguler;