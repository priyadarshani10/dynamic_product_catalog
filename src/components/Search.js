import React, { useState } from 'react';
import { useProductContext } from '../context/productContext';

const Search = () => {
  const { dispatch } = useProductContext();
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    dispatch({
      type: 'SET_SEARCH',
      payload: e.target.value,
    });
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search products..."
        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Search;

