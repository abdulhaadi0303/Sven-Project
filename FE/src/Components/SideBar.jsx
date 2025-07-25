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

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Navigation Item Component
const NavItem = ({ item }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;
  
  return (
    <Link
      to={item.path}
      className={`flex items-center justify-center p-3 rounded-lg transition-colors ${
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

// Main Sidebar Component
export function Sidebar(){
  return (
    <aside className="w-[5%] bg-cyan-700 flex flex-col py-25">
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