import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
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
                <Link href="/categories">
                  <a className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Categories</a>
                </Link>
                <Link href="/sale">
                  <a className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Sale</a>
                </Link>
                <Link href="/clearance">
                  <a className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Clearance</a>
                </Link>
                <Link href="/new-stock">
                  <a className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium">New stock</a>
                </Link>
                <Link href="/trending">
                  <a className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Trending</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/help">
              <a className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Help</a>
            </Link>
            <Link href="/orders-returns">
              <a className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Orders & Returns</a>
            </Link>
            <span className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Hi, John</span>
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
      <div className="bg-gray-100 text-center py-2">
        <a href="#" className="text-gray-800 hover:text-black">Get 10% off on business sign up</a>
      </div>
    </nav>
  );
};

export default Navbar;
