import React from 'react';

export function Header(){
  return (
    <header className="h-[10vh] bg-gray-800 flex items-center justify-between px-15">
      {/* Left side - Logo/Title */}
      <div className="flex items-center">
        <h1 className="text-white text-3xl font-bold">
          AI Speech <span className="text-cyan-400">Diarization</span>
        </h1>
      </div>
      
      {/* Right side - Status indicators */}
      <div className="flex items-center space-x-4">
        {/* API Status */}
        <div className="flex items-center bg-white rounded-full px-3 py-1 text-sm">
          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
          <span className="text-gray-800">API Offline</span>
        </div>
        
        {/* LLM Status */}
        <div className="flex items-center bg-white rounded-full px-3 py-1 text-sm">
          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
          <span className="text-gray-800">LLM: Offline</span>
        </div>
      </div>
    </header>
  );
};