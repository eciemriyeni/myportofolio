import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Beranda from "./Pages/Beranda";
import Experience from "./Pages/Experience";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Pages/Project";
import Licences from "./Pages/Licences";

function App() {
 

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
        <Route path="/licenses" element={<Licences/>} />
        
      </Routes>
    </div>
  );
}

export default App;
