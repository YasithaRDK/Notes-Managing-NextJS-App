"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-indigo-500 font-extrabold text-3xl">
          QuickNoteZ
        </div>

        {/* Navbar links */}
        <div className="md:flex hidden space-x-4">
          <Link href="/create-note" className="black_btn">
            Create
          </Link>
          <a href="#" className="outline_btn">
            Sign Out
          </a>
        </div>

        {/* Hamburger icon (for mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div
        className={`absolute top-full mt-1 right-1 bg-white md:hidden rounded-md ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          href="/create-note"
          className="block py-2 px-10 ms-14 text-gray-800"
        >
          Create Note
        </Link>
        <Link href="#" className="block py-2 px-10 ms-14 text-gray-800">
          SignOut
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
