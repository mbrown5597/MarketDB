import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';


const ListingCard = ({ service, name, tags, description, states, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
  if (isExpanded) {
    setExpandedCards(expandedCards.filter((cardIndex) => cardIndex !== index));
  } else {
    setExpandedCards([...expandedCards, index]);
  }
  setIsExpanded(!isExpanded);
};

const [expandedCards, setExpandedCards] = useState([]);
return (
  <div className="card">

    <p className="service">{service}</p>
    {/* <p><Link to={`/company/${name}`}> {name}</Link></p> */}
    <p className="tags"> {tags.join(', ')}</p>
    {isExpanded && (
      <>
        <p className="description"> {description}</p>
        <p className="states">Available in: {states.join(', ')}</p>
      </>
    )}
    <button onClick={handleToggle}>{isExpanded ? 'Show less' : 'Show more'}</button>
 
  </div>
);
};


const CompanyDetail = () => {

    const { companyName } = useParams();
    const { name } = useParams();
    const [company, setCompany] = useState(null);
    const [listing, setListing] = useState(null);
    const [showLocations, setShowLocations] = useState(false);
    const [showListings, setShowListings] = useState(false);
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const paginatedListings = listing.slice(startIndex, endIndex);
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

  useEffect(() => {
    axios.get(`http://localhost:5000/api/listing/${companyName}`)
      .then(response => {
        setListing(response.data);
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
      <p><strong>URL:</strong> <a href={`http://${company.Company_URL}`} target="_blank" rel="noopener noreferrer">{company.Company_URL}</a></p>
      <p><strong>Description:</strong> {company.Description}</p>
      <p><strong>HQ Address:</strong> {company.HQAddress}</p>
      <p><strong>HQ Phone Number:</strong> {company.HQPhoneNumber}</p>
      <button onClick={() => setShowLocations(!showLocations)}>
        {showLocations ? 'Hide Other Locations' : 'Show Other Locations'}
      </button>
      {showLocations && (
        <div>
          <h3>Other Locations:</h3>
          <ul>
            {company.OtherLocations.split(',').map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
        </div>
      )}
      {/* <button onClick={() => setShowListings(!showListings)}>
        {showListings ? 'Hide Listings' : 'Show Listings'}
      </button> */}
      {showListings && (
        <div>
          <h3>Listings:</h3>
          {/* <ul>
            {listing.name.split(',').map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul> */}
          {console.log(listing)}
          {
          Object.keys(listing).map((list,value) => (
            console.log(list.id)
          // <ListingCard
          //   key={list.valueOf}
          //   service={listing[list].service}
          //   name={listing[list].name}
          //   tags={listing[list].tags}
          //   description={listing[list].description}
          //   states={listing[list].availability}
          // />
        ))
        }
        </div>
      )}
    </div>
  );
};

export default CompanyDetail;
