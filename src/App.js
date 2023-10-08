import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = (data, query) => {
    setSearchResults(data.results || []);

  
    setRecentSearches((prevSearches) => {
      const newSearches = [query, ...prevSearches].slice(0, 10);
      return newSearches;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Torre Ai Search</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="search-results">
          {searchResults.map((user) => (
            <div key={user.username}>
              <p><a href={`https://torre.ai/${user.username}`}>{user.name}</a></p>
            </div>
          ))}
        </div>
        <div className="recent-searches">
          <h2>Recent Searches</h2>
          <ul>
            {recentSearches.map((query, index) => (
              <li key={index}>{query}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
