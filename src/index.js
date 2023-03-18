import React from 'react';
import ReactDOM from 'react-dom/client';
import RegisterForm from './pages/Register/RegisterForm';
import LoginForm from './pages/Login/LoginForm';
import AddEvent from './pages/AddEvent/AddEvent';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));        
root.render(  <BrowserRouter>
    <AddEvent/>
  </BrowserRouter>);