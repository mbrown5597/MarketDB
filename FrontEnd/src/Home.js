// import axios from "axios";
// import React, { useEffect } from "react";
// import {  useState } from "react";
// import {FaSearch} from "react-icons/fa";
// import "./SearchBar.css";
// import "./SearchResult.css";
// import "./SearchResultsList.css";

// const states = [
//   { name: 'Any State', abbreviation: 'AS' },
//   { name: 'Alabama', abbreviation: 'AL' },
//   { name: 'Alaska', abbreviation: 'AK' },
//   { name: 'Arizona', abbreviation: 'AZ' },
//   { name: 'Arkansas', abbreviation: 'AR' },
//   { name: 'California', abbreviation: 'CA' },
//   { name: 'Colorado', abbreviation: 'CO' },
//   { name: 'Connecticut', abbreviation: 'CT' },
//   { name: 'Delaware', abbreviation: 'DE' },
//   { name: 'Florida', abbreviation: 'FL' },
//   { name: 'Georgia', abbreviation: 'GA' },
//   { name: 'Hawaii', abbreviation: 'HI' },
//   { name: 'Idaho', abbreviation: 'ID' },
//   { name: 'Illinois', abbreviation: 'IL' },
//   { name: 'Indiana', abbreviation: 'IN' },
//   { name: 'Iowa', abbreviation: 'IA' },
//   { name: 'Kansas', abbreviation: 'KS' },
//   { name: 'Kentucky', abbreviation: 'KY' },
//   { name: 'Louisiana', abbreviation: 'LA' },
//   { name: 'Maine', abbreviation: 'ME' },
//   { name: 'Maryland', abbreviation: 'MD' },
//   { name: 'Massachusetts', abbreviation: 'MA' },
//   { name: 'Michigan', abbreviation: 'MI' },
//   { name: 'Minnesota', abbreviation: 'MN' },
//   { name: 'Mississippi', abbreviation: 'MS' },
//   { name: 'Missouri', abbreviation: 'MO' },
//   { name: 'Montana', abbreviation: 'MT' },
//   { name: 'Nebraska', abbreviation: 'NE' },
//   { name: 'Nevada', abbreviation: 'NV' },
//   { name: 'New Hampshire', abbreviation: 'NH' },
//   { name: 'New Jersey', abbreviation: 'NJ' },
//   { name: 'New Mexico', abbreviation: 'NM' },
//   { name: 'New York', abbreviation: 'NY' },
//   { name: 'North Carolina', abbreviation: 'NC' },
//   { name: 'North Dakota', abbreviation: 'ND' },
//   { name: 'Ohio', abbreviation: 'OH' },
//   { name: 'Oklahoma', abbreviation: 'OK' },
//   { name: 'Oregon', abbreviation: 'OR' },
//   { name: 'Pennsylvania', abbreviation: 'PA' },
//   { name: 'Rhode Island', abbreviation: 'RI' },
//   { name: 'South Carolina', abbreviation: 'SC' },
//   { name: 'South Dakota', abbreviation: 'SD' },
//   { name: 'Tennessee', abbreviation: 'TN' },
//   { name: 'Texas', abbreviation: 'TX' },
//   { name: 'Utah', abbreviation: 'UT' },
//   { name: 'Vermont', abbreviation: 'VT' },
//   { name: 'Virginia', abbreviation: 'VA' },
//   { name: 'Washington', abbreviation: 'WA' },
//   { name: 'West Virginia', abbreviation: 'WV' },
//   { name: 'Wisconsin', abbreviation: 'WI' },
//   { name: 'Wyoming', abbreviation: 'WY' },
// ];

// const SearchResult = ({ result }) => {
//   return (
//     <div
//       className="search-result"
//       onClick={(e) => alert(`You selected ${result}!`)}
//     >
//       {result}
//     </div>
//   );
// };

// const SearchResultsList = ({ results }) => {
//   return (
//     <div className="results-list">
//       {results.map((result, id) => {
//         // return <SearchResult result={result.name} key={id} />;
//         return (
//           <SearchResult
//             result={typeof result === "string" ? result : result.name}
//             key={id}
//           />
//         );
//       })}
//     </div>
//   );
// };
// // const SearchBar = ({ setResults }) => {
// //   const [input, setInput] = useState("");
  

// //   // console.log(lisitngCount[0])
// //   const fetchData = (value) => {
// //     axios
// //     .get("http://localhost:5000/listingData")
// //     .then((response) => {
// //       const results = response.data.filter((tag) => {
// //         return value && tag && tag.toLowerCase().includes(value);
// //       });
// //       setResults(results);
// //     })
// //     .catch((error) => {
// //       console.error("Error fetching data:", error);
// //     });
// //   };

// //   const handleChange = (value) => {
// //     setInput(value);
// //     fetchData(value);

// //   };

// //   return (
// //     <div className="input-wrapper">
// //       <FaSearch id="search-icon" />
// //       <input
// //         placeholder="Type to search..."
// //         value={input}
// //         onChange={(e) => handleChange(e.target.value)}
// //       />
// //       <button className="validName" onClick={fe}>Search</button>
// //     </div>
// //   );
// // };
// const SearchBar = ({ setResults, setShowHero }) => {
//   const [input, setInput] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   // const [showHero, setShowHero] = useState(false)

//   const fetchData = (value) => {
//     axios
//       .get("http://localhost:5000/listingData")
//       .then((response) => {
//         const results = response.data.filter((tag) => {
//           return value && tag && tag.toLowerCase().includes(value);
//         });
//         setSearchResults(results);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleChange = (value) => {
//     setInput(value);
//   };

//   const handleSearch = () => {
//     fetchData(input);
//     setResults(searchResults);
//     if (searchResults.length >0){
//       setShowHero(true);}
    
//   };

//   return (
//     <div className="input-wrapper">
//       <FaSearch id="search-icon" />
//       <input
//         placeholder="Type to search..."
//         value={input}
//         onChange={(e) => handleChange(e.target.value)}
//       />
//       <button className="validName" onClick={handleSearch}>Search</button>
//       <ul>
//         {searchResults.map((result) => (
//           <li key={result}>{result}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const Dropdown = ({ options }) => {
//     const [selectedState, setSelectedState] = useState('');
//     const handleSelectChange = (event) => {
//       setSelectedState(event.target.value);
//     };
  
//     return (
//       <div className="dropdown">
//         <select value={selectedState} onChange={handleSelectChange}>
//           <option value="">Select a state</option>
//           {options.map((state, index) => (
//             <option key={index} value={state.name}>
//               {state.name}
//             </option>
//           ))}
//         </select>
//       </div>
//     );
//   };

// const Header = ({setShowHero}) => {
//   const [results, setResults] = useState([])
//     return (
//       <header>
//         <div className="logo">SkyScraper</div>
//         <div className="search-bar-container">
//         <SearchBar setResults={setResults}/>
//         <SearchResultsList results={results}/>
//         <Dropdown options={states} />
//         </div>
//       </header>
//     );
//   };

//   const Hero = () => {
//     return (
//       <div className="hero">
//         <div className="hero-text">
//           <h1>We connect thousands of Carriers with market Providers and companies.</h1>
//           <p>
//             <a href="/">Go to Home</a>
//           </p>
//         </div>
//       </div>
//     );
//   };

// const Card = ({ title, subtitle}) => {
//   const [count, setCount] = useState("")
//   axios.get("http://localhost:5000/listingCounts")
//   .then((res) => {
//     console.log((res.data)["COUNT(*)"])
//     setCount((res.data)["COUNT(*)"])
//   })
//   .catch((error) => {
//     console.error(`Error: ${error}`);
//   });
//     return (
//       <div className="card">
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>{count}</p>
//       </div>
//     );
//   };

// const Footer = () => {
//     return (
//       <footer>
//         <p>© 2024 SkyScraper insurance</p>
//         <ul>
//           <li><a href="/">Home</a></li>
//           {/* <li><a href="/register">Register</a></li> */}
//           <li><a href="/login">Login</a></li>
//           {/* <li><a href="/Companies">Login</a></li> */}
//         </ul>
//       </footer>
//     );
//   };

// const Hme = () => {
//     const [showHero, setShowHero] = useState(false)
//     const [name,setName] = useState('')
//     axios.defaults.withCredentials = true;
//     useEffect(()=>{
//       axios.get('http://localhost:5000')
//       .then(res=>{
//         setName(res.data.username)
//       })
//       .catch(err=>{
//         console.log(err)
//       })
//     })
//     return (
//       <div className="app">
//         <Header setShowHero={setShowHero}/>
//         <h3> {name} is logged in</h3>
//         { showHero? <div></div>: <Hero /> }
//         <div className="card-container">
//           <Card title="Listings" subtitle="2,273"/>
//           <Card title="Companies" subtitle="30" count={30} />
//         </div>
//         <Footer />
//       </div>
//     );
//   };
  
//   export default Hme;

import axios from "axios";
import React, { useEffect, useState } from "react";
// import { FaAlignCenter, FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import "./SearchResult.css";
import "./SearchResultsList.css";

// const states = [
//   { name: "Any State", abbreviation: "AS" },
//   { name: "Alabama", abbreviation: "AL" },
//   { name: "Alaska", abbreviation: "AK" },
//   { name: "Arizona", abbreviation: "AZ" },
//   { name: "Arkansas", abbreviation: "AR" },
//   { name: "California", abbreviation: "CA" },
//   { name: "Colorado", abbreviation: "CO" },
//   { name: "Connecticut", abbreviation: "CT" },
//   { name: "Delaware", abbreviation: "DE" },
//   { name: "Florida", abbreviation: "FL" },
//   { name: "Georgia", abbreviation: "GA" },
//   { name: "Hawaii", abbreviation: "HI" },
//   { name: "Idaho", abbreviation: "ID" },
//   { name: "Illinois", abbreviation: "IL" },
//   { name: "Indiana", abbreviation: "IN" },
//   { name: "Iowa", abbreviation: "IA" },
//   { name: "Kansas", abbreviation: "KS" },
//   { name: "Kentucky", abbreviation: "KY" },
//   { name: "Louisiana", abbreviation: "LA" },
//   { name: "Maine", abbreviation: "ME" },
//   { name: "Maryland", abbreviation: "MD" },
//   { name: "Massachusetts", abbreviation: "MA" },
//   { name: "Michigan", abbreviation: "MI" },
//   { name: "Minnesota", abbreviation: "MN" },
//   { name: "Mississippi", abbreviation: "MS" },
//   { name: "Missouri", abbreviation: "MO" },
//   { name: "Montana", abbreviation: "MT" },
//   { name: "Nebraska", abbreviation: "NE" },
//   { name: "Nevada", abbreviation: "NV" },
//   { name: "New Hampshire", abbreviation: "NH" },
//   { name: "New Jersey", abbreviation: "NJ" },
//   { name: "New Mexico", abbreviation: "NM" },
//   { name: "New York", abbreviation: "NY" },
//   { name: "North Carolina", abbreviation: "NC" },
//   { name: "North Dakota", abbreviation: "ND" },
//   { name: "Ohio", abbreviation: "OH" },
//   { name: "Oklahoma", abbreviation: "OK" },
//   { name: "Oregon", abbreviation: "OR" },
//   { name: "Pennsylvania", abbreviation: "PA" },
//   { name: "Rhode Island", abbreviation: "RI" },
//   { name: "South Carolina", abbreviation: "SC" },
//   { name: "South Dakota", abbreviation: "SD" },
//   { name: "Tennessee", abbreviation: "TN" },
//   { name: "Texas", abbreviation: "TX" },
//   { name: "Utah", abbreviation: "UT" },
//   { name: "Vermont", abbreviation: "VT" },
//   { name: "Virginia", abbreviation: "VA" },
//   { name: "Washington", abbreviation: "WA" },
//   { name: "West Virginia", abbreviation: "WV" },
//   { name: "Wisconsin", abbreviation: "WI" },
//   { name: "Wyoming", abbreviation: "WY" },
// ];

// const SearchResult = ({ result }) => {
//   return (
//     <div
//       className="search-result"
//       onClick={(e) => alert(`You selected ${result}!`)}
//     >
//       {result}
//     </div>
//   );
// };

// const SearchResultsList = ({ results }) => {
//   return (
//     <div className="redsults-list">
//       {results.map((result, id) => {
//         // return <SearchResult result={result.name} key={id} />;
//         return (
//           <SearchResult
//             result={typeof result === "string" ? result : result.name}
//             key={id}
//           />
//         );
//       })}
//     </div>
//   );
// };

// const SearchBar = ({ setResults, setShowHero }) => {
//   const [input, setInput] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const fetchData = (value) => {
//     axios
//       .get("http://localhost:5000/listingData")
//       .then((response) => {
//         const results = response.data.filter((tag) => {
//           return value && tag && tag.toLowerCase().includes(value);
//         });
//         setSearchResults(results);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleChange = (value) => {
//     setInput(value);
//   };

//   const handleSearch = () => {
//     fetchData(input);
//     setResults(searchResults);
//     if (searchResults.length > 0) {
//       setShowHero(true);
//     }
//   };

//   return (
//     <div className="input-wrapper">
//       <FaSearch id="search-icon" />
//       <input
//         placeholder="Type to search..."
//         value={input}
//         onChange={(e) => handleChange(e.target.value)}
//       />
//       <button className="validName" onClick={handleSearch}>
//         Search
//       </button>
//       <SearchResultsList results={searchResults} />
//     </div>
//   );
// };

// const Dropdown = ({ options }) => {
//   const [selectedState, setSelectedState] = useState("");

//   const handleSelectChange = (event) => {
//     setSelectedState(event.target.value);
//   };

//   return (
//     <div className="dropdown">
//       <select value={selectedState} onChange={handleSelectChange}>
//         <option value="">Select a state</option>
//         {options.map((state, index) => (
//           <option key={index} value={state.name}>
//             {state.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

const Header = () => {
  // const [results, setResults] = useState([]);

  return (
    <header>
      <div className="logo">SkyScraper</div>
      <div className="search-bar-container">
        {/* <SearchBar setResults={setResults} setShowHero={setShowHero} />
        <SearchResultsList results={results}/>
        <Dropdown options={states} /> */}
        <a href="/Listings">Search Listings</a>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>We connect thousands of Carriers with market Providers and companies.</h1>
        <p>
          <a href="/">Go to Home</a>
        </p>
      </div>
    </div>
  );
};

const Card = ({ title, subtitle }) => {
  const [count, setCount] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/listingCounts").then((res) => {
      setCount(res.data["COUNT(*)"]);
    });
  }, []);

  return (
    <div className="card">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{count}</p>
    </div>
  );
};

const Footer = () =>{
  return (
    <footer>
      <p>© 2024 SkyScraper insurance</p>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {/* <li><a href="/register">Register</a></li> */}
        <li>
          <a href="/login">Login</a>
        </li>
        {/* <li><a href="/Companies">Login</a></li> */}
      </ul>
    </footer>
  );
};

const Hme = () => {
  // const [showHero, setShowHero] = useState(false);
  const [name, setName] = useState("");

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("http://localhost:5000").then((res) => {
      setName(res.data.username);
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <h3>{name} is logged in</h3>
       <Hero />
      <div className="card-container">
        <Card title="Listings" subtitle="2,273" />
        <Card title="Companies" subtitle="30" count={30} />
      </div>
      <Footer />
    </div>
  );
};

export default Hme;