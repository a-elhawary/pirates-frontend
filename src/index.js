import React from 'react';
import ReactDOM from 'react-dom/client';
import Events from "./pages/Events/Events";
import RegisterForm from "./pages/Register/RegisterForm";
import EventRegistration from "./pages/EventRegistration/EventRegistration";
import LoginForm from "./pages/Login/LoginForm";
import AddEvent from './pages/AddEvent/AddEvent';
import AddInterviewSlot from './pages/AddInterviewSlot/AddInterviewSlot';
import Event from "./pages/Event/Event"
import NotFound from "./pages/NotFound/NotFound"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import EventSlots from "./pages/EventSlots/EventSlots"
import MySlots from "./pages/MySlots/MySlots"
import Interviews from "./pages/Interviews/Interviews"

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


// TODO add home
const root = ReactDOM.createRoot(document.getElementById('root'));        
root.render( 
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/create" element={<AddEvent />} />
        <Route path="/event/:id/register" element={<EventRegistration />} />
        <Route path="/event/:id/slots" element={<EventSlots />} />
        <Route path="/event/:id/slots/add" element={<AddInterviewSlot />} />
        <Route path="/slots" element={<MySlots />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);