import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './component/pages/Home.js';
import Event from './component/pages/Event.js';
import Volunteer from './component/pages/Volunteer.js';
import Camp from './component/pages/Camp.js';


const App = () => {
  return (
    <BrowserRouter>
    <div className="body py-1">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cap" element={<Camp/>} />
          <Route path="/Event" element={<Event/>}/>
          <Route path="/Volunteer" element={<Volunteer/>} />
        </Routes>
    </div>


    </BrowserRouter>
  );
};
export default App;
