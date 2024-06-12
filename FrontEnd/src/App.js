import React from 'react';
import './App.css';
import Login from './Login';
import Hme from './Home';
import Companies from './Companies';
import RegistrationForm from './Register';
import ListingCards from './Results';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul style={{ display: "flex", justifyContent: "space-around", color:'black'}}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Companies">Companies</Link>
            </li>
            <li>
              <Link to="/register">Join us</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/Listings">Listings</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path='/' element={<Hme/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<RegistrationForm/>}/>
        <Route path="/Companies" element={<Companies/>}/>
        <Route path="/Listings" element={<ListingCards/>}/>
        </Routes>
      </div>
      
    </Router>
  );

}

export default App