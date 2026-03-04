import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext.jsx';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* <Link to="/" className="logo">
                  
                </Link> */}
                {/* <span className="logo-symbol">J.Manikandan</span>  */}

                <h1 className="new">J.Manikandan</h1>
                
                {/* Desktop Menu */}
                <ul className="nav-menu">
                    <li><Link to="/" className={isActive('/')}>Home</Link></li>
                    <li><Link to="/about" className={isActive('/about')}>About</Link></li>
                    <li><Link to="/portfolio" className={isActive('/portfolio')}>Portfolio</Link></li>
                    <li><Link to="/skills" className={isActive('/skills')}>Skills</Link></li>
                    <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
                </ul>

                <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button onClick={toggleTheme} className="theme-toggle-btn" style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                    <Link to="/contact" className="btn-start-project">Let's Talk</Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="mobile-menu-icon" onClick={toggleMenu} style={{ marginLeft: '1rem' }}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div className={`mobile-nav ${isOpen ? 'active' : ''}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/about" onClick={toggleMenu}>About</Link>
                <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
                <Link to="/skills" onClick={toggleMenu}>Skills</Link>
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                <Link to="/contact" className="btn-start-project mobile" onClick={toggleMenu}>Let's Talk</Link>
            </div>
        </nav>
    );
};

export default Navbar;
