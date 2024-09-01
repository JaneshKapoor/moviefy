import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src="/logo.png" alt="Moviefy Logo" className="h-8 w-auto mr-3" />
        <span className="text-2xl font-bold">Moviefy</span>
      </div>
      <div className="flex-1 mx-4">
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Search for movies, actors, etc."
        />
      </div>
      <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
