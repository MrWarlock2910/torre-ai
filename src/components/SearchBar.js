
import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    console.log("helko")
    try {
      const response = await axios.post(
        'https://torre.ai/api/entities/_search',
        {
          'query': query,
          'identityType': 'person',
          'meta': false,
          'limit': 10,
          'excludeContacts': true,
          'excludedPeople': []
        },
        {
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
          }
        }
      );
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="search-bar">
      <TextField
        variant="outlined"
        fullWidth
        size="small"
        placeholder="Search people by name"
        value={query}
        onChange={function (e) {
          setQuery(e.target.value)
          
        } 
      }
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
