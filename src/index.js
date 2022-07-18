import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './main/Calculator.css';
import logo from './assets/logo192.png'

import Calculator from './main/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <img src={logo} alt="logo-react" />
    <h1>Just a Calculator</h1>
    <Calculator/> 
  </React.StrictMode>
);

