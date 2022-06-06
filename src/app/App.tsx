import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import CarsPage from './CarsPage';
import CarPage from './CarPage';
import NotFoundPage from './NotFoundPage';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/cars/:carId" element={<CarPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/" element={<Navigate to="/cars" />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Layout>
  );
};

export default App;
