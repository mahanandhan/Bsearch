// src/pages/SearchResults.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Access the passed results array and query
  const { results = [], query = '' } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Results for "{query}"
      </h2>

      {results.length === 0 ? (
        <p className="text-center text-gray-600">No results found.</p>
      ) : (
        <div className="max-w-2xl mx-auto space-y-4">
          {results.map((item, index) => (
            <div key={index} className="bg-white border rounded-xl p-4 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {item.url}
              </a>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-6">
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          Back to Search
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
