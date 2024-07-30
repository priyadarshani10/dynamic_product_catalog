import React from 'react';
import { useProductContext } from '../context/productContext';

const ProductList = () => {
  const { state } = useProductContext();
  const { products, filters, sort, search } = state;

  const filteredProducts = products
    .filter((product) => {
      const categoryMatch = filters.category.length === 0 || filters.category.includes(product.category);
      const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const ratingMatch = product.rating >= filters.rating;
      const searchMatch = product.name.toLowerCase().includes(search.toLowerCase());
      return categoryMatch && priceMatch && ratingMatch && searchMatch;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') {
        return a.price - b.price;
      }
      if (sort === 'price-desc') {
        return b.price - a.price;
      }
      if (sort === 'rating-asc') {
        return a.rating - b.rating;
      }
      return b.rating - a.rating;
    });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <div key={product.id} className="border border-gray-300 p-4 rounded-lg shadow-lg bg-white hover:bg-gray-100 transition">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover mb-4 rounded-lg mx-auto"
            style={{ width: '150px', height: '150px' }}
          />
          <h3 className="text-lg font-bold text-blue-700 mb-2">{product.name}</h3>
          <p className="text-gray-700 text-base mb-2">${product.price}</p>
          <p className="text-yellow-500 text-sm mb-2">{'⭐'.repeat(product.rating)}</p>
          <p className="text-gray-500 text-sm">{product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
