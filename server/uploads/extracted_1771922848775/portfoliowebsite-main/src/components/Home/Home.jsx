import React from 'react';
import { Sparkles, ArrowRight, Download, Mail, Phone, Github, Linkedin, Code } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container" id="home">
            <div className="home-bg-effects">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="grid-overlay"></div>
            </div>

            {/* Left Content */}
            <div className="home-content-left">
                <div className="greeting">
                    <Sparkles className="greeting-icon" size={20} />
                    <span>Hello, I'm</span>
                </div>

                <h1 className="name">J.Manikandan</h1>
                <h2 className="role">Full Stack Developer (MERN)</h2>

                <p className="description">
                    I turn ideas into high-performing web experiences that drive real results.
                    With 5+ years of expertise in React, Node.js, and modern web technologies,
                    I don't just build apps. I create digital solutions that grow your business,
                    engage users, and boost conversions.
                </p>

                <div className="action-buttons">
                    <a href="#portfolio" className="btn-primary">
                        View My Work <ArrowRight size={18} />
                    </a>
                    {/* <a href="#contact" className="btn-secondary">
                        <Download size={18} /> Let's Connect
                    </a> */}
                </div>

                {/* <div className="stats-row">
                    <div className="stat-item">
                        <span className="stat-number">14</span>
                        <div className="stat-text">
                            <span>Years of</span>
                            <span>Experience</span>
                        </div>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">50+</span>
                        <div className="stat-text">
                            <span>Project</span>
                            <span>Completed</span>
                        </div>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">1.5K</span>
                        <div className="stat-text">
                            <span>Happy</span>
                            <span>Clients</span>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* Right Content - Code Window */}
            <div className="home-content-right">
                <div className="code-window">
                    <div className="window-header">
                        <div className="window-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <span className="filename">developer.js</span>
                        <span style={{ marginLeft: 'auto', color: '#cbd5e1' }}><Code size={16} /></span>
                    </div>

                    <div className="window-content">
                        <div className="code-content">
                            <span className="code-line comment">// Building the future, one line at a time</span>
                            <span className="code-line">
                                <span className="keyword">export default class</span> <span className="class-name">FullStackDeveloper</span> <span className="keyword">extends</span> <span className="class-name">Craftsman</span>
                            </span>
                            <span className="code-line">{'{'}</span>
                            <span className="code-line indent">
                                <span className="variable">name</span> = <span className="string">"J.Manikandan"</span>;
                            </span>
                            <span className="code-line indent">
                                <span className="variable">role</span> = <span className="string">"Full stack developer"</span>;
                            </span>
                            <span className="cursor"></span>
                            <span className="code-line">{'}'}</span>
                        </div>

                        <div className="contact-info">
                            <div className="contact-item">
                                <Mail /> <span>manij472@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <Phone /> <span>+9198844 85312</span>
                            </div>
                            <div className="contact-item">
                                <Github /> <span><a href="https://github.com/Manikandan-Janakiraman" target='_blank'>Github</a></span>
                            </div>
                            <div className="contact-item">
                                <Linkedin /> <span><a href="https://www.linkedin.com/in/JManikandan" target='_blank'>LinkedIn</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
