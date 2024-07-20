"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

interface NavbarProps {
  username: string;
}

const Navbar: React.FC<NavbarProps> = ({ username }) => {
  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get(`/api/auth/username/${username}`);
        if (response.status === 200) {
          const data = response.data;
          const loginValue = data[0]?.login;
          console.log(loginValue);
        }
      } catch (error) {
        console.log('API call failed:', error);
      }
    };

    if (username) {
      fetchUsername();
    }
  }, [username]);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">ECOMMERCE</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/categories" legacyBehavior>
                  <a className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Categories</a>
                </Link>
                <Link href="/sale" legacyBehavior>
                  <a className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Sale</a>
                </Link>
                <Link href="/clearance" legacyBehavior>
                  <a className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Clearance</a>
                </Link>
                <Link href="/new-stock" legacyBehavior>
                  <a className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium">New stock</a>
                </Link>
                <Link href="/trending" legacyBehavior>
                  <a className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Trending</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/help" legacyBehavior>
              <a className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Help</a>
            </Link>
            <Link href="/orders-returns" legacyBehavior>
              <a className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Orders & Returns</a>
            </Link>
            <span className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              <button>Hi, John logout</button>
            </span>
            <button className="ml-4 p-2 rounded-full text-gray-800 hover:text-black">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h13M8 12h13m-7 6h7M3 6h.01M3 12h.01M3 18h.01"></path>
              </svg>
            </button>
            <button className="ml-4 p-2 rounded-full text-gray-800 hover:text-black">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 14H5L3 3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21a2 2 0 11-4 0"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-orange-400 text-center py-2">
        <a href="#" className="text-gray-800 hover:text-black">Get 10% off on business sign up</a>
      </div>
    </nav>
  );
};

export default Navbar;
