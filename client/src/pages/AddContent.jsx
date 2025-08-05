import React from 'react';

const AddContent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-xl font-semibold text-center mb-6">Add Website Details</h2>

        {/* Website Name */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Enter website name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
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
            placeholder="Enter the website URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Optional Submit Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddContent;
