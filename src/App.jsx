import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./assets/Components/Navbar";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./assets/Components/Home";
import About from "./assets/Components/About";
import Contact from "./assets/Components/Contact";


function App() {


  const router= createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/></>
    },
    {
      path:"/contact",
      element:<><Navbar/><Contact/></>
    },
  ])


  return (
    <>
    <RouterProvider router={router}/>      //this is the latest way of react touter 

    {/* <Navbar/>   */}


        {/* <Router>                    // this is the old way of using react router
            <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router> */}
    </>
  );
}

export default App;
