"use client"

import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { logout } from '@/utils/actions/UserService';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    logout().then(() => router.push('/'));
  };

  // Active link style function
  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <div className="min-h-screen flex">
     

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Fixed with your exact styling */}
      <div 
        className={`fixed lg:static w-64 min-h-screen bg-purple-300 flex flex-col gap-6 p-4 font-semibold text-gray-700 z-50
          transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {isAdmin ? (
          <>
            <h2 className="font-bold text-xl px-4">Admin Home</h2>
            <ul className="flex flex-col gap-6 px-4">
              <li>
                <Link
                  href="/dashboard/adminDashboard"
                  className={`block px-2 py-1 rounded ${
                    isActive('/dashboard/adminDashboard')
                      ? 'font-bold bg-[#a9106b] text-white'
                      : 'text-[#374177]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/manage"
                  className={`block px-2 py-1 rounded ${
                    isActive('/dashboard/manage')
                      ? 'font-bold bg-[#a9106b] text-white'
                      : 'text-[#374177]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Manage Users
                </Link>
              </li>
              {/* Other admin links... */}
            </ul>
          </>
        ) : (
          <>
            <h2 className="font-bold text-xl px-4">User Home</h2>
            <ul className="flex flex-col gap-6 px-4">
              <li>
                <Link
                  href="/dashboard/editBiodata"
                  className={`block px-2 py-1 rounded ${
                    isActive('/dashboard/editBiodata')
                      ? 'font-bold bg-[#a9106b] text-white'
                      : 'text-[#374177]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Edit Biodata
                </Link>
              </li>
              {/* Other user links... */}
            </ul>
          </>
        )}

        <button 
          onClick={handleLogout} 
          className="bg-[#a9106b] text-white p-2"
        >
          Logout
        </button>
        <hr />
        <ul className="flex flex-col gap-6 px-4">
          <li>
            <Link 
              href="/" 
              className="text-[#374177] hover:text-[#a9106b]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 w-[90%] mx-auto">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden fixed bottom-6 right-6 bg-[#a9106b] text-white p-3 rounded-full shadow-lg z-40"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;