import React from 'react';
import { MobileBreadcrumb } from './SideBar';

export function Header() {
  return (
    <header className="bg-gray-800 px-4 md:px-15 py-2">
      {/* Mobile Layout - Visible below 768px */}
      <div className="flex flex-col md:hidden">
        {/* Top Row - Hamburger + Title */}
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center space-x-2">
            {/* Only visible below 640px */}
            <div className="block sm:hidden">
              <MobileBreadcrumb />
            </div>
            <h1 className="text-white text-lg font-bold leading-tight">
              AI Speech <span className="text-cyan-400">Diarization</span>
            </h1>
          </div>
        </div>

        {/* Bottom Row - Status indicators */}
        <div className="flex items-center justify-center space-x-2 pb-1">
          <div className="flex items-center bg-white rounded-full px-2 py-0.5 text-xs">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1"></div>
            <span className="text-gray-800 font-medium">API Offline</span>
          </div>
          <div className="flex items-center bg-white rounded-full px-2 py-0.5 text-xs">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1"></div>
            <span className="text-gray-800 font-medium">LLM: Offline</span>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Visible from 768px and up */}
      <div className="hidden md:flex items-center justify-between h-[8vh]">
        <div className="flex items-center">
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            AI Speech <span className="text-cyan-400">Diarization</span>
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-white rounded-full px-3 py-1 text-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            <span className="text-gray-800">API Offline</span>
          </div>
          <div className="flex items-center bg-white rounded-full px-3 py-1 text-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            <span className="text-gray-800">LLM: Offline</span>
          </div>
        </div>
      </div>
    </header>
  );
}
