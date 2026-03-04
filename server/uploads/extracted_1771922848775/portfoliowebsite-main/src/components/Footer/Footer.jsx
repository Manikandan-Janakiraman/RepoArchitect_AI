import React from 'react';
import { Facebook, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import PlexusBackground from './PlexusBackground';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-section">
            <PlexusBackground />
            <div className="footer-divider top"></div>

            <div className="footer-top-content">
                <nav className="footer-main-nav">
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT ME</a>
                    <a href="#services">SERVICES</a>
                    <a href="#portfolio">PORTFOLIO</a>
                    <a href="#blog">NEWS & BLOG</a>
                    <a href="#contact">CONTACT US</a>
                </nav>

                <div className="footer-social-links">
                    <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon-wrapper"><Facebook size={16} /></div>
                        <span>Facebook</span>
                    </a>
                    <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon-wrapper"><Twitter size={16} /></div>
                        <span>Twitter</span>
                    </a>
                    <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon-wrapper"><Linkedin size={16} /></div>
                        <span>Linkedin</span>
                    </a>
                </div>
            </div>

            <div className="footer-divider bottom"></div>

            <div className="footer-bottom-bar">
                <div className="footer-copyright">
                    Copyrights Reserved @ <span className="highlight">J.Manikandan</span>
                </div>
            </div>

            <button className="scroll-top-btn" onClick={scrollToTop}>
                <ArrowUp size={24} />
            </button>
        </footer>
    );
};

export default Footer;
