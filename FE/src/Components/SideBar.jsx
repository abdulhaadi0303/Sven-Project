// Navigation data for sidebar
const navigationItems = [
  { 
    id: 'home', 
    label: 'Home', 
    path: '/', 
    icon: '🏠' 
  },
  { 
    id: 'settings', 
    label: 'Settings', 
    path: '/settings', 
    icon: '⚙️' 
  }
];

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Desktop Navigation Item Component
const NavItem = ({ item }) => {
const location = useLocation();
const isActive = location.pathname === item.path;

return (
  <Link
    to={item.path}
    className={`flex items-center justify-center p-4 rounded-lg transition-colors ${
      isActive 
        ? 'bg-cyan-900 text-white' 
        : 'text-cyan-100 hover:bg-cyan-800 hover:text-white'
    }`}
    title={item.label} // Tooltip on hover
  >
    <span className="text-xl">{item.icon}</span>
  </Link>
);
};

// Desktop Sidebar Component - Export 1
export function Sidebar(){
return (
  <aside className="bg-cyan-700 flex flex-col h-full py-25">
    {/* Sidebar Navigation */}
    <nav className="flex-1 p-2">
      <div className="space-y-2">
        {navigationItems.map(item => (
          <NavItem key={item.id} item={item} />
        ))}
      </div>
    </nav>
  </aside>
);
};

// Mobile Breadcrumb Component with Hamburger Menu - Export 2
export function MobileBreadcrumb() {
const [isOpen, setIsOpen] = useState(false);
const location = useLocation();

return (
  <div className="relative">
    {/* Hamburger Menu Button */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col justify-center items-center w-8 h-8 space-y-1 hover:bg-gray-700 rounded p-1 transition-colors"
    >
      <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
      <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
      <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
    </button>
    
    {/* Backdrop */}
    {isOpen && (
      <div 
        className="fixed inset-0 z-40 bg-black bg-opacity-50" 
        onClick={() => setIsOpen(false)}
      ></div>
    )}
    
    {/* Slide-out Menu */}
    <div className={`fixed top-0 left-0 h-full w-64 bg-cyan-700 z-50 transform transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      {/* Menu Header */}
      <div className="flex items-center justify-between p-4 border-b border-cyan-600">
        <h2 className="text-white text-lg font-semibold">Navigation</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-cyan-600 rounded p-1 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {/* Menu Items */}
      <nav className="p-4">
        <div className="space-y-2">
          {navigationItems.map(item => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-cyan-900 text-white' 
                    : 'text-cyan-100 hover:bg-cyan-800 hover:text-white'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  </div>
);
};