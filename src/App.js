import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuComponent from './components/menu/MenuComponent';
import DashboardPage from './components/pages/DashboardPage';
import DevicesPage from './components/pages/DevicesPage';
import AnalyticsPage from './components/pages/AnalyticsPage';
import AboutPage from './components/pages/AboutPage';
import CombinedPage from './components/pages/CombinedPage';

function App() {
  return (
    <div className="app-wrapper">
      <MenuComponent />

      <main className="page-content">
        <Routes>
          <Route path="/combined" element={<CombinedPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;