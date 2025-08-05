// src/pages/Search.jsx
import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]); // ✅ store results here
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');

    try {
      const res = await axios.get(`https://bsearch-7fxb.onrender.com/api/data/search?name=${query}`);
      const fetchedResults = res.data.data;
      setResults(fetchedResults); // ✅ update local state

      // ✅ navigate to results page and pass the results as state
      navigate('/results', { state: { results: fetchedResults, query } });
    } catch (err) {
      console.error(err);
      setError('Something went wrong while searching.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSearch}
        className="w-full max-w-2xl flex items-center gap-3 bg-white border rounded-2xl shadow-lg px-6 py-4"
      >
        <SearchIcon className="text-gray-500" size={22} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for websites..."
          className="flex-grow bg-transparent outline-none text-gray-900 placeholder-gray-400 text-base"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium"
        >
          Search
        </button>
      </form>
      <button onClick={() => navigate('/add-content')} className="mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium">Add Website</button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {loading && <p className="text-gray-600 mt-4">Loading...</p>}
    </div>
  );
};

export default Search;
