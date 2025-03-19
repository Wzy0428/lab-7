import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'; 
import About from './components/About';
import Projects from './components/Projects';
import NotFound from './components/NotFound'; 
import Skills from './components/Skills';
import ThemeSwitcher from './components/ThemeSwitcher';
import React from 'react';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <ThemeSwitcher /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
