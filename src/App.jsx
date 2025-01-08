import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./assets/Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Components/Home";
import About from "./assets/Components/About";
import Contact from "./assets/Components/Contact";


function App() {

  return (
    <>
        <Router>
            <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
