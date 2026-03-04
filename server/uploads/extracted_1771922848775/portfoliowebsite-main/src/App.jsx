import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import ProjectDetail from './components/Portfolio/ProjectDetail';
import About from './components/About/About'; // Added import
import Contact from './components/Contact/Contact'; // Added import
import './App.css';

import { ThemeProvider } from './context/ThemeContext.jsx'; // Explicit extension


function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Portfolio />
              <Skills />
              <Contact />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
