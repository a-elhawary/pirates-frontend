import React from 'react';
import ReactDOM from 'react-dom/client';
import Events from "./pages/Events/Events";
import RegisterForm from "./pages/Register/RegisterForm";
import LoginForm from "./pages/Login/LoginForm";
import AddEvent from './pages/AddEvent/AddEvent';
import AddInterviewSlot from './pages/AddInterviewSlot/AddInterviewSlot';
import Event from "./pages/Event/Event"
/*import RootLayout from './Routes/RootLayout';

import { BrowserRouter, Routes } from 'react-router-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Events" element={<RootLayout/>} >
      <Route index element = {<Events/>}/>
      <Route path=":event"  element = {<Event/>}/>
    </Route>

  )
);*/

const root = ReactDOM.createRoot(document.getElementById('root'));        
root.render( 
<RegisterForm/>  
);