import React from 'react';
import { useProductContext } from '../context/productContext';

const Filters = () => {
  const { state, dispatch } = useProductContext();
  const { filters } = state;

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    dispatch({
      type: 'SET_FILTER',
      payload: { category: filters.category.includes(category) ? filters.category.filter(c => c !== category) : [...filters.category, category] },
    });
  };

  const handlePriceRangeChange = (e) => {
    const [min, max] = e.target.value.split(',');
    dispatch({
      type: 'SET_FILTER',
      payload: { priceRange: [Number(min), Number(max)] },
    });
  };

  const handleRatingChange = (e) => {
    dispatch({
      type: 'SET_FILTER',
      payload: { rating: Number(e.target.value) },
    });
  };

  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Filters</h2>
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-2">Category</h3>
        <label className="block mb-2">
          <input type="checkbox" value="Electronics" onChange={handleCategoryChange} className="mr-2" /> Electronics
        </label>
        <label className="block">
          <input type="checkbox" value="Clothing" onChange={handleCategoryChange} className="mr-2" /> Clothing
        </label>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-2">Price Range</h3>
        <input
          type="range"
          min="0"
          max="1000"
          step="50"
          onChange={handlePriceRangeChange}
          className="w-full"
        />
        <p className="text-gray-700 mt-2">${filters.priceRange[0]} - ${filters.priceRange[1]}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-2">Rating</h3>
        <input
          type="number"
          min="0"
          max="5"
          step="1"
          onChange={handleRatingChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default Filters;
