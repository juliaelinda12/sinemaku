import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './index.css';
import App from './App';
import Tiket from './tiket';
import Sinemapay from './sinemapay';
import Tiketreguler from './tiketreguler';

const rootElement = document.getElementById('root');
render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='App' element={<App />} />
            <Route path='tiket' element={<Tiket />} />
            <Route path='sinemapay' element={<Sinemapay />} />
            <Route path='tiketreguler' element={<Tiketreguler />} />
    </Routes>
    </BrowserRouter>,
rootElement
);

