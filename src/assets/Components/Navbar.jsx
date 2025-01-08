import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav>
     <Link to="/">Home</Link>
     <br />
     <Link to="/about">About</Link>
     <br />
     <Link to="/contact">Contact Us</Link>
    </nav>
    </>
  )
}

export default Navbar