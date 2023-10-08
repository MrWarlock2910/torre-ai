import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = (data, query) => {
    setSearchResults(data.results || []);

    setRecentSearches((prevSearches) => {
      const newSearches = [query, ...prevSearches].slice(0, 10);
      return newSearches;
    });
  };

  const addToFavorites = (user) => {
    setFavorites((prevFavorites) => [...prevFavorites, user]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Torre AI Search</h1>
        <SearchBar onSearch={handleSearch} onAddToFavorites={addToFavorites} />
        <div className="search-results">
          {searchResults.map((user) => (
            <div key={user.username}>
              <p><a href={`https://torre.ai/${user.username}`}>{user.name}</a></p>
              <button onClick={() => addToFavorites(user)}>Add to Favorites</button>
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
        <div className="favorites">
          <h2>Favorites</h2>
          <ul>
            {favorites.map((user) => (
              <li key={user.username}><a href={`https://torre.ai/${user.username}`}>{user.name}</a></li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
