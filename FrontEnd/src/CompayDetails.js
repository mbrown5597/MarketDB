import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CompanyDetail = () => {

    const { companyName } = useParams();
    const [company, setCompany] = useState(null);
    const [showLocations, setShowLocations] = useState(false);
    // const [error, setError] = useState(null); // Add state for error handling

    useEffect(() => {
    axios.get(`http://localhost:5000/api/company/${companyName}`)
      .then(response => {
        setCompany(response.data);
      })
      .catch(error => {
        console.error('Error fetching company details:', error);
     
      });
  }, [companyName]);



  if (!company) {
    return <div>Loading...</div>; // Render loading indicator while data is fetched
  }

  return (
    <div>
      <h1>{company.Company_Name}</h1>
      <p><strong>URL:</strong> <a href={company.Company_URL} target="_blank" rel="noopener noreferrer">{company.Company_URL}</a></p>
      <p><strong>Description:</strong> {company.Description}</p>
      <p><strong>HQ Address:</strong> {company.HQAddress}</p>
      <p><strong>HQ Phone Number:</strong> {company.HqPhoneNumber}</p>
      <button onClick={() => setShowLocations(!showLocations)}>
        {showLocations ? 'Hide Other Locations' : 'Show Other Locations'}
      </button>
      {showLocations && (
        <div>
          <h3>Other Locations:</h3>
          <ul>
            {company.OtherLocationsInfo.split(',').map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CompanyDetail;
