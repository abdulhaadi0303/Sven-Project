import React, { useState } from 'react';
import { Upload, Volume2, Settings, Play, Home } from 'lucide-react';

// Component 1: Audio Upload Section
const AudioUploadSection = ({ onFileUpload, uploadedFile }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      onFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-cyan-400 text-lg font-semibold mb-4">Audio</h3>
      
      {!uploadedFile ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragOver ? 'border-cyan-400 bg-cyan-50' : 'border-gray-300'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-600 mb-2">
            Drop your Audio file here or{' '}
            <label className="text-cyan-400 cursor-pointer hover:underline">
              Browse
              <input
                type="file"
                className="hidden"
                accept=".mp3,.wav,.mp4,.m4a"
                onChange={handleFileSelect}
              />
            </label>
          </p>
          <p className="text-sm text-gray-500">Supports MP3,WAV,MP4, MAX 100MB</p>
        </div>
      ) : (
        <div className="bg-cyan-400 text-white p-4 rounded-lg text-center">
          File Uploaded Successfully ({(uploadedFile.size / (1024 * 1024)).toFixed(1)}MB)
        </div>
      )}
    </div>
  );
};

// Component 2: Audio Visualization Section
const AudioVisualizationSection = ({ isProcessing }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <div className="flex justify-center items-center h-32 mb-4">
        {/* Audio waveform visualization */}
        <div className="flex items-end space-x-1 h-16">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className={`bg-cyan-400 transition-all duration-300 ${
                isProcessing ? 'animate-pulse' : ''
              }`}
              style={{
                width: '3px',
                height: `${Math.random() * 60 + 10}px`,
                animationDelay: `${i * 50}ms`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="flex justify-between">
        <div className="flex-1 mr-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
          <div className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg">
            <span>Auto-Detect</span>
            <div className="ml-2 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
              <span className="text-xs">🌐</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">Speakers</label>
          <div className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg">
            <span>Auto-Detect</span>
            <div className="ml-2 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
              <span className="text-xs">👤</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component 3: Processing Structure Section
const ProcessingStructureSection = ({ structures, onStructureToggle }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-cyan-400 text-lg font-semibold mb-4">Structures</h3>
      <p className="text-gray-600 mb-4">Specify the Order in which Conversation should be Processed</p>
      
      <div className="space-y-3">
        {structures.map((structure, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-gray-700">
              {index + 1}. {structure.name}
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={structure.enabled}
                onChange={() => onStructureToggle(index)}
              />
              <div
                className={`w-11 h-6 rounded-full transition-colors ${
                  structure.enabled ? 'bg-cyan-400' : 'bg-gray-400'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                    structure.enabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component 4: Processing Parameters Section
const ProcessingParametersSection = ({ parameters, onParameterToggle, onStartProcessing, canProcess }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-cyan-400 text-lg font-semibold mb-4">Parameters</h3>
      <p className="text-gray-600 mb-4">Specify the Order in which Conversation should be Processed</p>
      
      <div className="grid grid-cols-2 gap-3 mb-6">
        {parameters.map((param, index) => (
          <button
            key={index}
            onClick={() => onParameterToggle(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              param.enabled
                ? 'bg-cyan-400 text-white'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {param.name}
          </button>
        ))}
      </div>
      
      <button
        onClick={onStartProcessing}
        disabled={!canProcess}
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          canProcess
            ? 'bg-cyan-400 text-white hover:bg-cyan-500'
            : 'bg-gray-400 text-gray-200 cursor-not-allowed'
        }`}
      >
        Start Processing File
      </button>
    </div>
  );
};

// Main Component combining all sections
export function HomePage () {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [structures, setStructures] = useState([
    { name: 'Introduction', enabled: false },
    { name: 'Biographical History', enabled: false },
    { name: 'Professional Background', enabled: true },
    { name: 'Social History', enabled: false },
    { name: 'Family History', enabled: true },
    { name: 'Medical History', enabled: true },
    { name: 'Vegetative History', enabled: true },
    { name: 'Psycologist History', enabled: false },
    { name: 'Desiese History', enabled: true }
  ]);
  
  const [parameters, setParameters] = useState([
    { name: 'Include own Statement', enabled: true },
    { name: 'Audio Enhance', enabled: true },
    { name: 'Include own Comments', enabled: true },
    { name: 'Use Indirect Speech', enabled: true },
    { name: 'Summarize Conversation', enabled: true },
    { name: 'Patient Quotes', enabled: true }
  ]);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
  };

  const handleStructureToggle = (index) => {
    const newStructures = [...structures];
    newStructures[index].enabled = !newStructures[index].enabled;
    setStructures(newStructures);
  };

  const handleParameterToggle = (index) => {
    const newParameters = [...parameters];
    newParameters[index].enabled = !newParameters[index].enabled;
    setParameters(newParameters);
  };

  const handleStartProcessing = () => {
    if (uploadedFile) {
      setIsProcessing(true);
      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false);
        alert('Processing completed!');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-white text-xl mr-2">Exploration &</span>
            <span className="text-cyan-400 text-xl font-semibold">Interviews</span>
          </div>
          <h1 className="text-4xl font-light text-white mb-2">
            <span className="text-cyan-400">"</span>
            Turn Spoken Thoughts Into Smart Actions
            <span className="text-cyan-400">"</span>
          </h1>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">

            <AudioUploadSection 
              onFileUpload={handleFileUpload}
              uploadedFile={uploadedFile}
            />
            
            <ProcessingStructureSection 
              structures={structures}
              onStructureToggle={handleStructureToggle}
            />
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <AudioVisualizationSection isProcessing={isProcessing} />
            <ProcessingParametersSection 
              parameters={parameters}
              onParameterToggle={handleParameterToggle}
              onStartProcessing={handleStartProcessing}
              canProcess={!!uploadedFile && !isProcessing}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
