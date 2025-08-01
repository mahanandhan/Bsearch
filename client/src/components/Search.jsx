import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search for:', query);
    // Your future API call goes here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-900 dark:to-zinc-800 transition-all px-4">
      <form
        onSubmit={handleSearch}
        className="w-full max-w-2xl flex items-center gap-3 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-2xl shadow-lg px-6 py-4 transition-all"
      >
        <SearchIcon className="text-gray-500 dark:text-gray-400" size={22} />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-base"
          placeholder="Search for websites, resources, or topics..."
        />

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-all cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
