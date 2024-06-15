import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListingCard.css'
import { Link } from 'react-router-dom';

const states55 = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
  "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];

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
      <p><Link to={`/company/${name}`}> {name}</Link></p>
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

// c
const ListingCards = () => {
    const [listings, setListings] = useState([]);
    const [filteredListings, setFilteredListings] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    // const [searchStat, setSearchStat] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTriggered, setSearchTriggered] = useState(false);
    const [selectedState, setSelectedState] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(30);

  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get('http://localhost:5000/listingData');
          setListings(response.data);
          setFilteredListings(response.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);
  
    const handleSearch = () => {
      setFilteredListings(listings.filter(listing =>
       ( (
        listing.service.toLowerCase().includes(searchInput.toLowerCase()) ||
        listing.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        listing.tags.join(' ').toLowerCase().includes(searchInput.toLowerCase()) 
      ) &&
        listing.Availability.join(' ').toLowerCase().includes(selectedState.toLowerCase()) 
      )||
      listing.Availability.join(' ').toLowerCase().includes(selectedState.toLowerCase())
        // listing.service.toLowerCase().includes(searchInput.toLowerCase()) ||
        // listing.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        // listing.tags.join(' ').toLowerCase().includes(searchInput.toLowerCase())
        // listing.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        // listing.states.join(' ').toLowerCase().includes(searchInput.toLowerCase())
        ));
      setSearchTriggered(true)
    };
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedListings = filteredListings.slice(startIndex, endIndex);
    
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
  
    return (
      <div className="listing-cards-container">
        <input type="text" placeholder="Search..." value={searchInput} onChange={e => setSearchInput(e.target.value)} />
        <select value={selectedState} onChange={e => setSelectedState(e.target.value)}>
        <option value="" disabled>Select a state</option>
        {states55.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
        <button onClick={handleSearch}>Search</button>
        <p>Number of listings found: {searchTriggered ? filteredListings.length : ''}</p>
        {paginatedListings.map((listing, index) => (
          <ListingCard
            key={index}
            service={listing.service}
            name={listing.name}
            tags={listing.tags}
            description={listing.description}
            states={listing.states}
          />
        ))}
        <div className="pagination">
        {Array(Math.ceil(filteredListings.length / itemsPerPage)).fill(0).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      </div>
    );
  };

export default ListingCards;