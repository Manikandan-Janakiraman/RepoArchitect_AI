import React from 'react';
import { SiFigma, SiSketch, SiAdobexd, SiWordpress, SiReact, SiJavascript } from 'react-icons/si';
import PlexusBackground from '../Footer/PlexusBackground';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'Figma', icon: <SiFigma />, percentage: '92%' },
        { name: 'Sketch', icon: <SiSketch />, percentage: '80%' },
        { name: 'XD', icon: <SiAdobexd />, percentage: '85%' },
        { name: 'WordPress', icon: <SiWordpress />, percentage: '99%' },
        { name: 'React', icon: <SiReact />, percentage: '89%' },
        { name: 'JavaScript', icon: <SiJavascript />, percentage: '93%' },
    ];

    return (
        <section className="skills-section" id="skills">
            <PlexusBackground />
            <div className="skills-content">
                <div className="skills-header">
                    <h2 className="skills-title">My Skills</h2>
                    <p className="skills-subtitle">
                        We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
                    </p>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-card">
                                <div className="skill-icon">{skill.icon}</div>
                                {/* <div className="skill-percentage">{skill.percentage}</div> */}
                            </div>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
