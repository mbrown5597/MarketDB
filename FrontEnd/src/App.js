import React from 'react';
// import './App.css';
import Login from './Login';
import Hme from './Home';
import CompanyList from './CompanyList';
import RegistrationForm from './Register';
import ListingCards from './Results';
import CompanyDetail from './CompayDetails';
import {Route, Routes} from 'react-router-dom'
import { Outlet } from 'react-router-dom';
const WithoutNave =()=>{
  return(
    <div>
    <Outlet/>
    </div>
  )
}


const LayoutWithNav = () => {
  return (
    <div>
      {/* <Hme /> */}
      <Outlet />
    </div>
  );
};
function App() {
  return (



      <div>
        {/* <header>
        <img src={process.env.PUBLIC_URL + ''} alt="Skyscraper Insurance" />
          <h1>Welcome to Skyscraper Insurance Directory</h1>
          <p>We Share Your Vision For A Better Tomorrow</p>
        </header> */}
        <Routes>
        <Route element={<LayoutWithNav/>}>
        <Route path='/' element={<Hme/>}/>
        </Route>
        <Route element={<WithoutNave/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<RegistrationForm/>}/>
        <Route path="/Companies" element={<CompanyList/>}/>
        <Route path="/company/:companyName" element={<CompanyDetail/>} />
        <Route path="/Listings" element={<ListingCards/>}/>
        </Route>
        </Routes>
      </div>

  );

}

export default App