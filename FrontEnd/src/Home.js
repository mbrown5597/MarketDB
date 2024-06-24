


// import React, {useState} from "react";

// import { useNavigate } from 'react-router-dom';
// // import './NavBar.css';
// import "./HomePage.css"
// import logo from './Pics/a1.png'
// import { FaSearch, FaSignInAlt, FaMapMarkerAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// l = <Router/>
// const Hme = () => {


//   return (
//     <div className="home-page">
//       <header className="header">
//       <img src={logo} alt="Skyscraper Insurance Logo" className="logo" />
//       <div className="header-text">
//       <h2>Welcome to Skyscraper Insurance Directory <br/> <br/>We Share Your Vision For A Better Tomorrow</h2>
//       {/* <h2>We Share Your Vision For A Better Tomorrow</h2> */}
//       </div>
//     </header>
//       <nav className="navbar">
//       <ul>
//       <li>
//             <Link to="/Listings">Search Listings</Link>
//       </li>
//       <li>
//             <Link to="/Companies">Company Directory</Link>
//       </li>
//       <li><Link to="/Protection_Class">Protection Class</Link> </li>
//        <li>
//           <Link to="https://skyscraperinsurance.com/blog/">Our Blogs</Link> 
//           {/* <a href="/login"> login</a> */}
//          </li>

//           {/* <li>
//             <Link to="/register">Join us</Link>
//           </li> */} 
//       </ul>
//       </nav>

//     </div>

// );
// };

// export default Hme;


import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./HomePage.css";
import logo from './Pics/a1.png';
import { FaSearch, FaSignInAlt, FaMapMarkerAlt } from 'react-icons/fa';

const HomeScreen = () => {
  const [insurance, setInsurance] = useState('');
  const [state, setState] = useState('');
  const history = useNavigate();

  const handleSearch = () => {
    history(`/listings?insurance=${insurance}&state=${state}`);
  };

  return (
    <div className="home-screen">
      <header>
        <div className="login">
          <FaSignInAlt /> Login
        </div>
      </header>
      <div className="logo-container">
        <img src={logo} alt="RiskBean Logo" className="logo" />
        <br/>
        <br/>
        <p>Risk Bean: Cultivating Confidence, Harvesting Success</p>
      </div>
      <div className="search-container">
        <div className="search-box">
          <div className="btn btn_common" onClick={handleSearch}> 
            <FaSearch onClick={handleSearch} className="searchButton"/>
            </div>

          <input
            type="text"
            placeholder="What are you wishing to insure?"
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
          />
        </div>
        <div className="location-box">
          <FaMapMarkerAlt />
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Which State?</option>
            {[
              'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 
              'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 
              'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 
              'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
              'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 
              'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 
              'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 
              'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 
              'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 
              'West Virginia', 'Wisconsin', 'Wyoming'
            ].map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

