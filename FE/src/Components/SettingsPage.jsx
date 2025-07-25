import React from 'react';


// Settings Page Component
export const SettingsPage = () => (
  <div className="bg-white rounded-lg shadow-sm h-full p-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Settings</h1>
    <p className="text-gray-600 text-lg mb-4">
      Configure your application settings.
    </p>
    <div className="space-y-4">
      <div className="border-b pb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Audio Settings</h3>
        <p className="text-gray-600 text-sm">Configure audio processing parameters</p>
      </div>
      <div className="border-b pb-4">
        <h3 className="font-semibold text-gray-700 mb-2">API Configuration</h3>
        <p className="text-gray-600 text-sm">Manage API connections and endpoints</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">User Preferences</h3>
        <p className="text-gray-600 text-sm">Customize your user experience</p>
      </div>
    </div>
  </div>
);