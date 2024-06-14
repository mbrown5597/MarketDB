


import React from "react";

import { Link  } from "react-router-dom";
// import './NavBar.css';
import "./HomePage.css"
import logo from './Pics/Skyscraper-logo.png'

// l = <Router/>
const Hme = () => {


  return (
    <div className="home-page">
      <header className="header">
      <img src={logo} alt="Skyscraper Insurance Logo" className="logo" />
      <div className="header-text">
      <h2>Welcome to Skyscraper Insurance Directory <br/> <br/>We Share Your Vision For A Better Tomorrow</h2>
      {/* <h2>We Share Your Vision For A Better Tomorrow</h2> */}
      </div>
    </header>
      <nav className="navbar">
      <ul>
      <li>
            <Link to="/Listings">Search Listings</Link>
      </li>
      <li>
            <Link to="/Companies">Company Directory</Link>
      </li>
      <li><Link to="/Protection_Class">Protection Class</Link> </li>
       <li>
          <Link to="https://skyscraperinsurance.com/blog/">Our Blogs</Link> 
          {/* <a href="/login"> login</a> */}
         </li>

          {/* <li>
            <Link to="/register">Join us</Link>
          </li> */} 
      </ul>
      </nav>

    </div>

);
};

export default Hme;