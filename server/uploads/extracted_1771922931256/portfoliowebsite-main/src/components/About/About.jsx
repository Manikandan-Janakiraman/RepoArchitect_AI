import React from 'react';
import PlexusBackground from '../Footer/PlexusBackground';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <PlexusBackground />
            <div className="about-container">
                <div className="about-header">
                    <span className="about-pill">About Me</span>
                    <h2 className="about-main-text">
                        I’m a passionate web developer focused on building clean, responsive, and user friendly digital experiences.
                        I turn ideas into functional interfaces using modern technologies and practical design thinking.
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default About;
