
// export default CompanyList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './company.css';
import logo from './Pics/header_logo.png'; 
import { FaSearch } from 'react-icons/fa'; 

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 21;

  useEffect(() => {
    // Fetch the list of companies from the database
    axios.get('http://localhost:5000/api/companies')
      .then(response => {
        setCompanies(response.data);
        setFilteredCompanies(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the companies!', error);
      });
  }, []);

  const truncateDescription = (description) => {
    const maxLength = 100; 
    return description.length > maxLength ? description.slice(0, maxLength) + '...' : description;
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const executeSearch = () => {
    const filtered = companies.filter(company =>
      company.Company_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (company.HqPhoneNumber && company.HqPhoneNumber.includes(searchTerm))
    );
    setFilteredCompanies(filtered);
    setCurrentPage(1);
  };
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = filteredCompanies.slice(indexOfFirstCompany, indexOfLastCompany);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredCompanies.length / companiesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='CompanyList'>
      <nav className='Company-navbar'>
        <div className='navbar-left'>
          <img src={logo} alt='Logo' className='Companylogo' />
        </div>
        <div className='navbar-right'>
          <div className='Company-search-container'>
          <button className='company-search-button' onClick={executeSearch}>
              <FaSearch />
            </button>
            <br/>
            <input
              type='text'
              placeholder='Search by name or phone'
              value={searchTerm}
              onChange={handleSearch}
              className='company-search-input'
            />
          </div>
          <ul>
            <li><Link to="/Listings">The Market Listings</Link></li>
            <li><Link to="/Protection_Class">Protection Class</Link></li>
            <li><Link to="https://skyscraperinsurance.com/blog/">Our Blogs</Link></li>
          </ul>
        </div>
      </nav>
      <div className='company-directory'>
        <h1 className='directory-title'>Companies Directory</h1>
        <div className='companies-grid'>
        {currentCompanies.map(company => (
            <div key={company.Company_Name} className='company-card'>
              <h2 className='company-name'>{company.Company_Name}</h2>
              <a href={`http://${company.Company_URL}`} className='company-url' target='_blank' rel='noopener noreferrer'>
                {company.Company_URL}
              </a>
              <p className='company-description'>{truncateDescription(company.Description)}</p>
              <Link to={`/company/${company.Company_Name}`} className='more-button'>
                More
              </Link>
            </div>
          ))}
        </div>
        <div className='pagination'>
          {pageNumbers.map(number => (
            <button key={number} onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
