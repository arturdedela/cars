import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import CarsList from './CarsList';
import CarPage from './CarPage';
import NotFoundPage from './NotFoundPage';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/cars" element={<CarsList />} />
        <Route path="/cars/:id" element={<CarPage />} />
        <Route path="/" element={<Navigate to="/cars" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
