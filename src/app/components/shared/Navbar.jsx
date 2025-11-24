"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const AuthButtons = () => {
    if (status === "loading") return null;

    if (!session) {
      return (
        <div className="flex flex-col md:flex-row md:items-center md:space-x-2 mt-2 md:mt-0">
          <Link
            href="/login"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-center"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition text-center mt-2 md:mt-0"
          >
            Register
          </Link>
        </div>
      );
    }

    return (
      <div className="relative mt-2 md:mt-0">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 focus:outline-none"
        >
          <FaUserCircle className="text-2xl" />
          <span className="truncate max-w-[100px] md:max-w-[150px]">{session.user?.email}</span>
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-2 z-50">
            <Link
              href="/add-event"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Add Event
            </Link>
            <Link
              href="/manage-events"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Manage Events
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="font-bold text-xl text-indigo-600 cursor-pointer">
                EventPulse
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-indigo-600">
              Events
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </Link>
            <AuthButtons />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-4 space-y-1 bg-white border-t">
          <Link
            href="/"
            className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded"
          >
            Home
          </Link>
          <Link
            href="/events"
            className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded"
          >
            Events
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded"
          >
            Contact
          </Link>
          <AuthButtons />
        </div>
      )}
    </nav>
  );
}
