import logo from './logo.svg';
import React from 'react';
import './grid.css';
import './flex.css';
import Navbar from './components/Navbar';
import Flex2 from './components/Flex2';
import Button from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function tiket() {
  return (
    <div className="App">
      <Navbar/>
      <Flex2/>
      <Button/>
    </div>
  );
}

export default tiket;
