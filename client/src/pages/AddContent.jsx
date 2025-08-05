import React, { useState } from 'react';
import axios from 'axios';

const AddContent = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!name.trim() || !url.trim()) {
      setMessage('Website name and URL are required.');
      return;
    }

    try {
      const response = await axios.post('https://bsearch-7fxb.onrender.com/api/data/data', {
        name,
        url,
        description
      });

      if (response.data.success) {
        setMessage('✅ Website added successfully!');
        setName('');
        setUrl('');
        setDescription('');
      } else {
        setMessage('❌ Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      setMessage('❌ Failed to submit. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-xl font-semibold text-center mb-6">Add Website Details</h2>

        {/* Website Name */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Enter website name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter the website name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Website URL */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Enter the website URL <span className="text-red-600">*</span>
          </label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter the website URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Website Description */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Enter website description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the website description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
        >
          Submit
        </button>

        {/* Message */}
        {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}
      </form>
    </div>
  );
};

export default AddContent;
