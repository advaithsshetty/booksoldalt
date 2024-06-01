// src/BookFilter.js
import React from 'react';
import '../css/BookFilter.css';

const BookFilter = ({ categories, selectedCategory, setSelectedCategory, selectedPriceRange, setSelectedPriceRange }) => {
  const priceRanges = [
    { label: 'All', range: [0, Infinity] },
    { label: 'Under ₹500', range: [0, 500] },
    { label: '₹500 - ₹1000', range: [500, 1000] },
    { label: 'Over ₹1000', range: [1000, Infinity] },
  ];

  return (
    <div className="book-filter-container">
      <h4 className="book-filter-title">Filter Books</h4>

      <div className="mb-2">
        <label className="book-filter-label">Category:</label>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="book-filter-select">
          <option value="All">All</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="mb-2">
        <label className="book-filter-label">Price Range:</label>
        <select value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)} className="book-filter-select">
          {priceRanges.map(price => (
            <option key={price.label} value={price.label}>{price.label}</option>
          ))}
        </select>
      </div>

      <input type='reset' value='Reset Filters' className='btn btn-primary book-filter-reset-btn' onClick={() => { setSelectedCategory('All'); setSelectedPriceRange('All'); }} />
    </div>
  );
};

export default BookFilter;
