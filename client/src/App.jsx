import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="py-6 bg-white shadow-md">
        <h1 className="text-4xl font-semibold text-center text-blue-600 tracking-wide">
          Bsearch
        </h1>
      </header>

      <main className="">
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
