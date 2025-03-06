// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage'; // If you have a category page
import AboutPage from './pages/AboutPage';
import StoryPage from './pages/StoryPage';
import ConceptPage from './pages/ConceptPage';
import Navbar from './components/Navbar';
import './App.css';  // This ensures the styles from App.css are applied

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} /> {/* Ensure the category route */}
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/concept" element={<ConceptPage />} />
      </Routes>
    </Router>
  );
}

export default App;
