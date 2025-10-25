import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      {/* Permanent Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg">
        <div className="flex items-center justify-center px-4 py-6 h-20 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-green-400">Makamesco Profile</h2>
        </div>

        <div className="flex flex-col mt-6 space-y-3 px-4">
          <Link
            to="/dashboard"
            className="text-white hover:bg-green-700 px-3 py-2 rounded transition"
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="text-white hover:bg-green-700 px-3 py-2 rounded transition"
          >
            Profile
          </Link>
          <Link
            to="/projects"
            className="text-white hover:bg-green-700 px-3 py-2 rounded transition"
          >
            Projects
          </Link>
          <Link
            to="/donate"
            className="text-white hover:bg-green-700 px-3 py-2 rounded transition"
          >
            Donate
          </Link>
        </div>
      </div>

      {/* Add margin-left so content isn’t hidden behind the sidebar */}
      <div className="ml-64 p-6">
        {/* Place your page content here */}
      </div>
    </div>
  );
}
