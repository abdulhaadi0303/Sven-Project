import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { Sidebar, MobileBreadcrumb } from './Components/SideBar';
import { HomePage } from './Components/HomePage';
import { SettingsPage } from './Components/SettingsPage.jsx';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 640); // Hide sidebar below 640px (Tailwind's "sm")
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="h-screen bg-gray-50 flex">
        {/* Fixed Sidebar - only render above 640px */}
        {showSidebar && (
          <div
            className={`
              fixed
              left-0
              top-0
              h-full
              z-40
              w-[5%]
              max-[1000px]:w-[6%]
              max-[850px]:w-[7.5%]
            `}
          >
            <Sidebar />
          </div>
        )}

        {/* Main content area */}
        <div
          className={`
            flex flex-col
            ${showSidebar ? 'ml-[5%] max-[1000px]:ml-[6%] max-[850px]:ml-[7.5%] w-[95%] max-[1000px]:w-[94%] max-[850px]:w-[92.5%]' : 'w-full'}
          `}
        >
          <Header />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;