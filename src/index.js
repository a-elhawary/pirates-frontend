import React from 'react';
import ReactDOM from 'react-dom/client';
//import Events from "./pages/Events/Events";
//import RegisterForm from "./pages/Register/RegisterForm";
//import LoginForm from "./pages/Login/LoginForm";
//import Header from "./Components/Header/Header";
import AddInterviewSlot from './pages/AddInterviewSlot/AddInterviewSlot';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));        
root.render( 
    <AddInterviewSlot/>
  );