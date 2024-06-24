

// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import axios from 'axios';
// // // // // // import './ListingCard.css';
// // // // // // import { Link } from 'react-router-dom';
// // // // // // const states55 = [
// // // // // //   "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
// // // // // //   "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
// // // // // //   "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
// // // // // //   "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
// // // // // //   "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
// // // // // //   "Wisconsin", "Wyoming"
// // // // // // ];

// // // // // // const ListingCard = ({ service, name, tags, description, states, index }) => {
// // // // // //   const [isExpanded, setIsExpanded] = useState(false);
// // // // // //   const [expandedCards, setExpandedCards] = useState([]);

// // // // // //   const handleToggle = () => {
// // // // // //     if (isExpanded) {
// // // // // //       setExpandedCards(expandedCards.filter((cardIndex) => cardIndex !== index));
// // // // // //     } else {
// // // // // //       setExpandedCards([...expandedCards, index]);
// // // // // //     }
// // // // // //     setIsExpanded(!isExpanded);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="card">
// // // // // //       <div className="card-header">
// // // // // //         <p className="service">{service}</p>
// // // // // //         <p><Link to={`/company/${name}`}>{name}</Link></p>
// // // // // //       </div>
// // // // // //       <div className="card-body">
// // // // // //         <p className="tags">{tags.join(', ')}</p>
// // // // // //         {isExpanded && (
// // // // // //           <>
// // // // // //             <p className="description">{description}</p>
// // // // // //             <p className="states">Available in: {states.join(', ')}</p>
// // // // // //           </>
// // // // // //         )}
// // // // // //         <button className="toggle-button" onClick={handleToggle}>{isExpanded ? 'Show less' : 'Show more'}</button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // const ListingCards = () => {
// // // // // //   const [listings, setListings] = useState([]);
// // // // // //   const [filteredListings, setFilteredListings] = useState([]);
// // // // // //   const [searchInput, setSearchInput] = useState('');
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [error, setError] = useState(null);
// // // // // //   const [searchTriggered, setSearchTriggered] = useState(false);
// // // // // //   const [selectedState, setSelectedState] = useState('');
// // // // // //   const [currentPage, setCurrentPage] = useState(1);
// // // // // //   const [itemsPerPage] = useState(30);

// // // // // //   useEffect(() => {
// // // // // //     const fetchData = async () => {
// // // // // //       setLoading(true);
// // // // // //       try {
// // // // // //         const response = await axios.get('http://localhost:5000/listingData');
// // // // // //         setListings(response.data);
// // // // // //         setFilteredListings(response.data);
// // // // // //       } catch (error) {
// // // // // //         setError(error.message);
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };
// // // // // //     fetchData();
// // // // // //   }, []);

// // // // // //   const handleSearch = () => {
// // // // // //     setFilteredListings(
// // // // // //       listings.filter(listing =>
// // // // // //         (listing.service.toLowerCase().includes(searchInput.toLowerCase()) ||
// // // // // //           listing.name.toLowerCase().includes(searchInput.toLowerCase()) ||
// // // // // //           listing.tags.join(' ').toLowerCase().includes(searchInput.toLowerCase())
// // // // // //         ) &&
// // // // // //         listing.states.join(' ').toLowerCase().includes(selectedState.toLowerCase())
// // // // // //       )
// // // // // //     );
// // // // // //     setSearchTriggered(true);
// // // // // //   };

// // // // // //   const handlePageChange = (pageNumber) => {
// // // // // //     setCurrentPage(pageNumber);
// // // // // //   };

// // // // // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // // // // //   const endIndex = startIndex + itemsPerPage;
// // // // // //   const paginatedListings = filteredListings.slice(startIndex, endIndex);

// // // // // //   if (loading) {
// // // // // //     return <p>Loading...</p>;
// // // // // //   }

// // // // // //   if (error) {
// // // // // //     return <p>Error: {error}</p>;
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="listing-cards-container">
// // // // // //       <div className="search-bar">
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           placeholder="What are you wishing to insure?"
// // // // // //           value={searchInput}
// // // // // //           onChange={e => setSearchInput(e.target.value)}
// // // // // //           className="search-input"
// // // // // //         />
// // // // // //         <select
// // // // // //           value={selectedState}
// // // // // //           onChange={e => setSelectedState(e.target.value)}
// // // // // //           className="state-select"
// // // // // //         >
// // // // // //           <option value="" disabled>Which State?</option>
// // // // // //           {states55.map((state) => (
// // // // // //             <option key={state} value={state}>{state}</option>
// // // // // //           ))}
// // // // // //         </select>
// // // // // //       </div>
// // // // // //       <button className="search-button" onClick={handleSearch}>Search</button>
// // // // // //       <p>Number of listings found: {searchTriggered ? filteredListings.length : ''}</p>
// // // // // //       {paginatedListings.map((listing, index) => (
// // // // // //         <ListingCard
// // // // // //           key={index}
// // // // // //           service={listing.service}
// // // // // //           name={listing.name}
// // // // // //           tags={listing.tags}
// // // // // //           description={listing.description}
// // // // // //           states={listing.states}
// // // // // //           index={index}
// // // // // //         />
// // // // // //       ))}
// // // // // //       <div className="pagination">
// // // // // //         {Array(Math.ceil(filteredListings.length / itemsPerPage)).fill(0).map((_, index) => (
// // // // // //           <button key={index} onClick={() => handlePageChange(index + 1)}>
// // // // // //             {index + 1}
// // // // // //           </button>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ListingCards;
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import axios from 'axios';
// // // // // import './ListingCard.css';
// // // // // import { Link } from 'react-router-dom';
// // // // // import { FaSearch } from 'react-icons/fa';

// // // // // const states55 = [
// // // // //   "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
// // // // //   "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
// // // // //   "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
// // // // //   "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
// // // // //   "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
// // // // //   "Wisconsin", "Wyoming"
// // // // // ];

// // // // // const ListingCard = ({ service, name, tags, description, states, index }) => {
// // // // //   const [isExpanded, setIsExpanded] = useState(false);
// // // // //   const [expandedCards, setExpandedCards] = useState([]);

// // // // //   const handleToggle = () => {
// // // // //     if (isExpanded) {
// // // // //       setExpandedCards(expandedCards.filter((cardIndex) => cardIndex !== index));
// // // // //     } else {
// // // // //       setExpandedCards([...expandedCards, index]);
// // // // //     }
// // // // //     setIsExpanded(!isExpanded);
// // // // //   };

// // // // //   return (
// // // // //     <div className="card">
// // // // //       <div className="card-header">
// // // // //         <p className="service">{service}</p>
// // // // //         <p><Link to={`/company/${name}`}>{name}</Link></p>
// // // // //       </div>
// // // // //       <div className="card-body">
// // // // //         <p className="tags">{tags.join(', ')}</p>
// // // // //         {isExpanded && (
// // // // //           <>
// // // // //             <p className="description">{description}</p>
// // // // //             <p className="states">Available in: {states.join(', ')}</p>
// // // // //           </>
// // // // //         )}
// // // // //         <button className="toggle-button" onClick={handleToggle}>{isExpanded ? 'Show less' : 'Show more'}</button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const ListingCards = () => {
// // // // //   const [listings, setListings] = useState([]);
// // // // //   const [filteredListings, setFilteredListings] = useState([]);
// // // // //   const [searchInput, setSearchInput] = useState('');
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [searchTriggered, setSearchTriggered] = useState(false);
// // // // //   const [selectedState, setSelectedState] = useState('');
// // // // //   const [currentPage, setCurrentPage] = useState(1);
// // // // //   const [itemsPerPage] = useState(30);

// // // // //   useEffect(() => {
// // // // //     const fetchData = async () => {
// // // // //       setLoading(true);
// // // // //       try {
// // // // //         const response = await axios.get('http://localhost:5000/listingData');
// // // // //         setListings(response.data);
// // // // //         setFilteredListings(response.data);
// // // // //       } catch (error) {
// // // // //         setError(error.message);
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };
// // // // //     fetchData();
// // // // //   }, []);

// // // // //   const handleSearch = () => {
// // // // //     setFilteredListings(
// // // // //       listings.filter(listing =>
// // // // //         (listing.service.toLowerCase().includes(searchInput.toLowerCase()) ||
// // // // //           listing.name.toLowerCase().includes(searchInput.toLowerCase()) ||
// // // // //           listing.tags.join(' ').toLowerCase().includes(searchInput.toLowerCase())
// // // // //         ) &&
// // // // //         listing.states.join(' ').toLowerCase().includes(selectedState.toLowerCase())
// // // // //       )
// // // // //     );
// // // // //     setSearchTriggered(true);
// // // // //   };

// // // // //   const handlePageChange = (pageNumber) => {
// // // // //     setCurrentPage(pageNumber);
// // // // //   };

// // // // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // // // //   const endIndex = startIndex + itemsPerPage;
// // // // //   const paginatedListings = filteredListings.slice(startIndex, endIndex);

// // // // //   useEffect(() => {
// // // // //     handleSearch();
// // // // //   }, [searchInput, selectedState]);

// // // // //   if (loading) {
// // // // //     return <p>Loading...</p>;
// // // // //   }

// // // // //   if (error) {
// // // // //     return <p>Error: {error}</p>;
// // // // //   }

// // // // //   return (
// // // // //     <div className="listing-cards-container">
// // // // //       <div className="search-bar">
// // // // //         <div className="search-input-container">
// // // // //           <FaSearch className="search-icon" />
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="What are you wishing to insure?"
// // // // //             value={searchInput}
// // // // //             onChange={e => setSearchInput(e.target.value)}
// // // // //             className="search-input"
// // // // //           />
// // // // //         </div>
// // // // //         <select
// // // // //           value={selectedState}
// // // // //           onChange={e => setSelectedState(e.target.value)}
// // // // //           className="state-select"
// // // // //         >
// // // // //           <option value="" disabled>Which State?</option>
// // // // //           {states55.map((state) => (
// // // // //             <option key={state} value={state}>{state}</option>
// // // // //           ))}
// // // // //         </select>
// // // // //       </div>
// // // // //       <p>Number of listings found: {searchTriggered ? filteredListings.length : ''}</p>
// // // // //       {paginatedListings.map((listing, index) => (
// // // // //         <ListingCard
// // // // //           key={index}
// // // // //           service={listing.service}
// // // // //           name={listing.name}
// // // // //           tags={listing.tags}
// // // // //           description={listing.description}
// // // // //           states={listing.states}
// // // // //           index={index}
// // // // //         />
// // // // //       ))}
// // // // //       <div className="pagination">
// // // // //         {Array(Math.ceil(filteredListings.length / itemsPerPage)).fill(0).map((_, index) => (
// // // // //           <button key={index} onClick={() => handlePageChange(index + 1)}>
// // // // //             {index + 1}
// // // // //           </button>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ListingCards;

// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';
// // // // import './ListingCard.css';
// // // // import { Link } from 'react-router-dom';
// // // // import { FaSearch } from 'react-icons/fa';

// // // // const states55 = [
// // // //   "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
// // // //   "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
// // // //   "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
// // // //   "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
// // // //   "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
// // // //   "Wisconsin", "Wyoming"
// // // // ];

// // // // const ListingCard = ({ service, name, tags, description, states }) => {
// // // //   return (
// // // //     <div className="card">
// // // //       <div className="card-content">
// // // //         <div className="card-info">
// // // //           <p className="service">{service}</p>
// // // //           <p><Link to={`/company/${name}`}>{name}</Link></p>
// // // //           <p className="tags">{tags.join(', ')}</p>
// // // //           <p className="description">{description}</p>
// // // //           <p className="states">Available in: {states.join(', ')}</p>
// // // //         </div>
// // // //         <button className="view-button">View Listing</button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const ListingCards = () => {
// // // //   const [listings, setListings] = useState([]);
// // // //   const [filteredListings, setFilteredListings] = useState([]);
// // // //   const [searchInput, setSearchInput] = useState('');
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState(null);
// // // //   const [searchTriggered, setSearchTriggered] = useState(false);
// // // //   const [selectedState, setSelectedState] = useState('');
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const [itemsPerPage] = useState(30);

// // // //   useEffect(() => {
// // // //     const fetchData = async () => {
// // // //       setLoading(true);
// // // //       try {
// // // //         const response = await axios.get('http://localhost:5000/listingData');
// // // //         setListings(response.data);
// // // //         setFilteredListings(response.data);
// // // //       } catch (error) {
// // // //         setError(error.message);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };
// // // //     fetchData();
// // // //   }, []);

// // // //   const handleSearch = () => {
// // // //     setFilteredListings(
// // // //       listings.filter(listing =>
// // // //         (listing.service.toLowerCase().includes(searchInput.toLowerCase()) ||
// // // //           listing.name.toLowerCase().includes(searchInput.toLowerCase()) ||
// // // //           listing.tags.join(' ').toLowerCase().includes(searchInput.toLowerCase())
// // // //         ) &&
// // // //         listing.states.join(' ').toLowerCase().includes(selectedState.toLowerCase())
// // // //       )
// // // //     );
// // // //     setSearchTriggered(true);
// // // //   };

// // // //   const handlePageChange = (pageNumber) => {
// // // //     setCurrentPage(pageNumber);
// // // //   };

// // // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // // //   const endIndex = startIndex + itemsPerPage;
// // // //   const paginatedListings = filteredListings.slice(startIndex, endIndex);

// // // //   return (
// // // //     <div className="listing-cards-container">
// // // //       <header className="header">
// // // //         <div className="logo">RiskBean</div>
// // // //         <div className="login">Login</div>
// // // //       </header>
// // // //       <div className="search-bar">
// // // //         <div className="search-input-container">
// // // //           <FaSearch className="search-icon" onClick={handleSearch} />
// // // //           <input
// // // //             type="text"
// // // //             placeholder="What are you wishing to insure?"
// // // //             value={searchInput}
// // // //             onChange={e => setSearchInput(e.target.value)}
// // // //             className="search-input"
// // // //           />
// // // //         </div>
// // // //         <select
// // // //           value={selectedState}
// // // //           onChange={e => setSelectedState(e.target.value)}
// // // //           className="state-select"
// // // //         >
// // // //           <option value="" disabled>Which State?</option>
// // // //           {states55.map((state) => (
// // // //             <option key={state} value={state}>{state}</option>
// // // //           ))}
// // // //         </select>
// // // //       </div>
// // // //       <p>Number of listings found: {searchTriggered ? filteredListings.length : ''}</p>
// // // //       <div className="card-list">
// // // //         {paginatedListings.map((listing, index) => (
// // // //           <ListingCard
// // // //             key={index}
// // // //             service={listing.service}
// // // //             name={listing.name}
// // // //             tags={listing.tags}
// // // //             description={listing.description}
// // // //             states={listing.states}
// // // //           />
// // // //         ))}
// // // //       </div>
// // // //       <div className="pagination">
// // // //         {Array(Math.ceil(filteredListings.length / itemsPerPage)).fill(0).map((_, index) => (
// // // //           <button key={index} onClick={() => handlePageChange(index + 1)}>
// // // //             {index + 1}
// // // //           </button>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ListingCards;


// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import './ListingCard.css';
// // // import { Link } from 'react-router-dom';
// // // import { FaSearch, FaSignInAlt } from 'react-icons/fa';

// // // const states55 = [
// // //   "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
// // //   "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
// // //   "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
// // //   "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
// // //   "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
// // //   "Wisconsin", "Wyoming"
// // // ];

// // // const ListingCard = ({ service, name, tags, description, states, isExpanded, onToggle }) => {
// // //   return (
// // //     <div className="card">
// // //       <div className="card-content">
// // //         <div className="card-info">
// // //           <p className="service">{service}</p>
// // //           <p><Link to={`/company/${name}`}>{name}</Link></p>
// // //           {isExpanded && (
// // //             <>
// // //               <p className="tags">{tags.join(', ')}</p>
// // //               <p className="description">{description}</p>
// // //               <p className="states">Available in: {states.join(', ')}</p>
// // //             </>
// // //           )}
// // //         </div>
// // //         <button className="view-button" onClick={onToggle}>
// // //           {isExpanded ? 'Show Less' : 'View Listing'}
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const ListingCards = () => {
// // //   const [listings, setListings] = useState([]);
// // //   const [filteredListings, setFilteredListings] = useState([]);
// // //   const [searchInput, setSearchInput] = useState('');
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [searchTriggered, setSearchTriggered] = useState(false);
// // //   const [selectedState, setSelectedState] = useState('');
// // //   const [expandedCardIndex, setExpandedCardIndex] = useState(null);
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [itemsPerPage] = useState(30);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       setLoading(true);
// // //       try {
// // //         const response = await axios.get('http://localhost:5000/listingData');
// // //         setListings(response.data);
// // //         setFilteredListings(response.data);
// // //       } catch (error) {
// // //         setError(error.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchData();
// // //   }, []);

// // //   const handleSearch = () => {
// // //     setFilteredListings(
// // //       listings.filter(listing =>
// // //         (listing.service.toLowerCase().includes(searchInput.toLowerCase()) ||
// // //           listing.name.toLowerCase().includes(searchInput.toLowerCase()) ||
// // //           listing.tags.join(' ').toLowerCase().includes(searchInput.toLowerCase())
// // //         ) &&
// // //         listing.states.join(' ').toLowerCase().includes(selectedState.toLowerCase())
// // //       )
// // //     );
// // //     setSearchTriggered(true);
// // //   };

// // //   const handleToggle = (index) => {
// // //     setExpandedCardIndex(expandedCardIndex === index ? null : index);
// // //   };

// // //   const handlePageChange = (pageNumber) => {
// // //     setCurrentPage(pageNumber);
// // //   };

// // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // //   const endIndex = startIndex + itemsPerPage;
// // //   const paginatedListings = filteredListings.slice(startIndex, endIndex);

// // //   return (
// // //     <div className="listing-cards-container">
// // //       <header className="header-result">
// // //         <div className="logo">RiskBean</div>
// // //         <div className="login"><FaSignInAlt /> Login</div>
// // //       </header>
// // //       <div className="search-bar">
// // //         <div className="search-input-container">
// // //           <FaSearch className="search-icon" onClick={handleSearch} />
// // //           <input
// // //             type="text"
// // //             placeholder="What are you wishing to insure?"
// // //             value={searchInput}
// // //             onChange={e => setSearchInput(e.target.value)}
// // //             className="search-input"
// // //           />
// // //         </div>
// // //         <select
// // //           value={selectedState}
// // //           onChange={e => setSelectedState(e.target.value)}
// // //           className="state-select"
// // //         >
// // //           <option value="" disabled>Which State?</option>
// // //           {states55.map((state) => (
// // //             <option key={state} value={state}>{state}</option>
// // //           ))}
// // //         </select>
// // //       </div>
// // //       <p>Number of listings found: {searchTriggered ? filteredListings.length : ''}</p>
// // //       <div className="card-list">
// // //         {paginatedListings.map((listing, index) => (
// // //           <ListingCard
// // //             key={index}
// // //             service={listing.service}
// // //             name={listing.name}
// // //             tags={listing.tags}
// // //             description={listing.description}
// // //             states={listing.states}
// // //             isExpanded={expandedCardIndex === index}
// // //             onToggle={() => handleToggle(index)}
// // //           />
// // //         ))}
// // //       </div>
// // //       <div className="pagination">
// // //         {Array(Math.ceil(filteredListings.length / itemsPerPage)).fill(0).map((_, index) => (
// // //           <button key={index} onClick={() => handlePageChange(index + 1)}>
// // //             {index + 1}
// // //           </button>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ListingCards;


import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ListingCard.css';
import { FaSearch, FaSignInAlt, FaMapMarkerAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import logo from './Pics/a2.png';

const ListingComponent = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const resultsPerPage = 20;
  const location = useLocation();
  const initialRender = useRef(true);
  const isInitialSearch = useRef(true);

  useEffect(() => {
    axios.get('http://localhost:5000/listingData')
      .then(response => {
        setListings(response.data);
        const uniqueStates = [...new Set(response.data.map(listing => listing.states).flat())];
        setStates(uniqueStates);
        setTotalPages(Math.ceil(response.data.length / resultsPerPage));

        const params = new URLSearchParams(location.search);
        const insurance = params.get('insurance');
        const state = params.get('state');
        setSearchTerm(insurance || '');
        setSelectedState(state || '');
        if (insurance || state) {
          isInitialSearch.current = true;
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setLoading(false);
      });
  }, [location.search]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    if (isInitialSearch.current) {
      handleSearch(searchTerm, selectedState);
      isInitialSearch.current = false;
    }
  }, [listings]);

  const handleSearch = (searchTermParam = searchTerm, stateParam = selectedState) => {
    let filtered = listings;

    if (stateParam) {
      filtered = filtered.filter(listing =>
        listing.states.includes(stateParam)
      );
    }

    if (searchTermParam) {
      filtered = filtered.filter(listing =>
        listing.service.toLowerCase().includes(searchTermParam.toLowerCase()) ||
        listing.tags.join(' ').toLowerCase().includes(searchTermParam.toLowerCase())
      );
    }

    setFilteredListings(filtered);
    setTotalPages(Math.ceil(filtered.length / resultsPerPage));
    setCurrentPage(1); // Reset to first page on new search
  };

  const paginate = (listings, page) => {
    const startIndex = (page - 1) * resultsPerPage;
    return listings.slice(startIndex, startIndex + resultsPerPage);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 5;
    const halfPageNumbers = Math.floor(maxPageNumbers / 2);

    let startPage = Math.max(1, currentPage - halfPageNumbers);
    let endPage = Math.min(totalPages, currentPage + halfPageNumbers);

    if (currentPage <= halfPageNumbers) {
      endPage = Math.min(totalPages, maxPageNumbers);
    }
    if (currentPage + halfPageNumbers >= totalPages) {
      startPage = Math.max(1, totalPages - maxPageNumbers + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          key={i}
          className={`page-number ${i === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </span>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="listing-container">
      <div className="header-results">
        <Link to='/' className="logo-results">
        <img src={logo} alt="Logo" className="logo-results" /> </Link>
        <div className='search-container-res'>
          <div className='search_wrap search_wrap_2'>
            <div className="search_box">
              <div className="btn btn_common" onClick={() => handleSearch()}>
                <FaSearch className='fas fa-search' />
              </div>
              <input
                type="text"
                placeholder="What are you wishing to insure?"
                className="search-input-results"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="state-section">
          <FaMapMarkerAlt className="location-icon" />
          <select
            className="state-dropdown"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Which State?</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <button className="login-button">
          <span className="login-icon"><FaSignInAlt /></span> Login
        </button>
      </div>
      
      {/* <div className="listings">
        
        {paginate(filteredListings, currentPage).map((listing, index) => (
          <div key={index} className="listing-item">
            <div className="listing-info">
              {listing.service} - <Link to={`/company/${listing.name}`}>{listing.name}</Link>
            </div>
            <button onClick={() => setSelectedListing(listing)} className="view-button">
              View Listing
            </button>
          </div>
        ))}
      </div> */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='listings'>
          {paginate(filteredListings, currentPage).map((listing, index) => (
            <div key={index} className="listing-item">
              <div className="listing-info">
                {listing.service} - <Link to={`/company/${listing.name}`}>{listing.name}</Link>
              </div>
              <button onClick={() => setSelectedListing(listing)} className="view-button">
                View Listing
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="pagination">
        <span className="page-arrow" onClick={() => handlePageChange(currentPage - 1)}>
          <FaArrowLeft />
        </span>
        {renderPageNumbers()}
        <span className="page-arrow" onClick={() => handlePageChange(currentPage + 1)}>
          <FaArrowRight />
        </span>
      </div>
      {selectedListing && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedListing.service}</h2>
            <h4><Link to={`/company/${selectedListing.name}`}>{selectedListing.name}</Link> </h4>
            <br/>
            <p>{selectedListing.description}</p>
            <br/>
            {/* <p>Available in: {selectedListing.states.join(', ')}</p> */}
            <div className="states-container">
              {selectedListing.states.map((state, index) => (
              <span key={index} className="state-box">{state}</span>
              ))}
          </div>
            <button onClick={() => setSelectedListing(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingComponent;



