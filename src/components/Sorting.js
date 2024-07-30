import React from 'react';
import { useProductContext } from '../context/productContext';

const Sorting = () => {
  const { state, dispatch } = useProductContext();
  const { sort } = state;

  const handleSortChange = (e) => {
    dispatch({
      type: 'SET_SORT',
      payload: e.target.value,
    });
  };

  return (
    <div className="mb-4 flex items-center">
      <label htmlFor="sort" className="font-semibold text-gray-800 mr-2">Sort by:</label>
      <select id="sort" value={sort} onChange={handleSortChange} className="p-2 border border-gray-300 rounded bg-white text-gray-700">
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-asc">Rating: Low to High</option>
        <option value="rating-desc">Rating: High to Low</option>
      </select>
    </div>
  );
};

export default Sorting;
