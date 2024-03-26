"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {session && (
        <nav className="sticky top-0 z-10 p-4 bg-white border-b-2 border-gray-300">
          <div className="container flex items-center justify-between mx-auto">
            {/* Logo */}
            <Link href="/" className="text-3xl font-extrabold text-indigo-500">
              QuickNoteZ
            </Link>

            {/* Navbar links */}
            <div className="hidden space-x-4 md:flex">
              <Link href="/create-note" className="outline_btn">
                Create
              </Link>
              <button
                type="button"
                className="black_btn"
                onClick={() => {
                  signOut();
                }}
              >
                Sign Out
              </button>
            </div>

            {/* Hamburger icon (for mobile) */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
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
              className="block px-10 py-2 text-gray-800 ms-14"
            >
              Create Note
            </Link>
            <button
              onClick={() => {
                signOut();
              }}
              className="block px-10 py-2 text-gray-800 ms-14"
            >
              SignOut
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
