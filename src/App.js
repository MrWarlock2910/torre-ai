import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (data) => {
    setSearchResults(data.results || []);
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
      </header>
    </div>
  );
}

export default App;
