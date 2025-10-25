import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button (visible only on small screens) */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-green-600 text-white p-2 rounded-md shadow-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex items-center justify-center px-4 py-6 h-20 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-green-400">Makamesco Profile</h2>
        </div>

        <div className="flex flex-col mt-6 space-y-3 px-4">
          <Link
            to="/dashboard"
            className="text-white hover:bg-green-700 px-3 py-2 rounded transition"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="text-white hover:bg-green-700 px-3 py-2 rounded transition"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
          <Link
            to="/projects"
            className="text-white hover:bg-green-700 px-3 py-2 rounded transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/donate"
            className="text-white hover:bg-green-700 px-3 py-2 rounded transition"
            onClick={() => setIsOpen(false)}
          >
            Donate
          </Link>
        </div>
      </div>

      {/* Page content wrapper */}
      <div className="md:ml-64 p-6 transition-all duration-300">
        {/* Your main content will appear here */}
      </div>
    </>
  );
}
