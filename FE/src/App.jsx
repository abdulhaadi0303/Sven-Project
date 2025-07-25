import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { Sidebar } from './Components/SideBar';
import { HomePage } from './Components/HomePage';
import { SettingsPage } from './Components/SettingsPage.jsx'; 

const App = () => {
  return (
    <Router>
      <div className="h-screen bg-gray-50 flex">
        {/* Sidebar Component - 7.5% width */}
        <Sidebar />

        {/* Main content area - 92.5% width */}
        <div className="w-[92.5%] flex flex-col">
          <Header />
          
          {/* Main content area - remaining height after header */}
          <main className="flex-1 p-6">
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