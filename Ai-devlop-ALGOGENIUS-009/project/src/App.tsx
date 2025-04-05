import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatedBackground } from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import StudyGroups from './pages/StudyGroups';
import ResourceLibrary from './pages/ResourceLibrary';
import Communication from './pages/Communication';
import Assessment from './pages/Assessment';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <AnimatedBackground />
        <div className="relative z-10">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/study-groups" element={<StudyGroups />} />
              <Route path="/resources" element={<ResourceLibrary />} />
              <Route path="/communication" element={<Communication />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;